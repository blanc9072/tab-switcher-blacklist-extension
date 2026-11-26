// Background service worker (Manifest V3).
//
// Chrome stops this worker when it is idle and starts it again for each event, so:
//   - register every chrome.* listener synchronously at the top level of this file,
//     so the listener exists when Chrome wakes the worker to deliver an event;
//   - never keep state in module-level variables; persist it in chrome.storage.

import { getWebHostname } from "../shared/url.js";

const LOG_PREFIX = "[Tab Switcher Blacklist]";

/** What made the active tab change. Used only for logging for now. */
type SwitchTrigger = "tab-activated" | "window-focused" | "navigated";

chrome.runtime.onInstalled.addListener((details) => {
  console.log(LOG_PREFIX, "onInstalled, reason:", details.reason);
  // TODO(milestone 4): when details.reason is "install", seed the default blocked
  // sites (youtube.com, instagram.com, reddit.com) into chrome.storage.local.
});

// The user switched to a different tab within a window.
chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  try {
    const tab = await chrome.tabs.get(tabId);
    checkActiveTab(tab, "tab-activated");
  } catch (error) {
    console.warn(LOG_PREFIX, `couldn't read activated tab ${tabId}:`, error);
  }
});

// The user switched to a different Chrome window. WINDOW_ID_NONE means focus left
// Chrome altogether (another app, or briefly between windows on some platforms).
chrome.windows.onFocusChanged.addListener(async (windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) return;
  try {
    const [tab] = await chrome.tabs.query({ active: true, windowId });
    if (tab) checkActiveTab(tab, "window-focused");
  } catch (error) {
    console.warn(LOG_PREFIX, `couldn't read active tab of window ${windowId}:`, error);
  }
});

// The active tab moved to a new URL. This also fires for in-page navigation on
// single-page apps like YouTube and Reddit. changeInfo.url is only reported when
// the extension has the "tabs" permission.
chrome.tabs.onUpdated.addListener((_tabId, changeInfo, tab) => {
  if (changeInfo.url === undefined || !tab.active) return;
  checkActiveTab(tab, "navigated");
});

/** Called whenever the tab the user is looking at may have changed. */
function checkActiveTab(tab: chrome.tabs.Tab, trigger: SwitchTrigger): void {
  const hostname = getWebHostname(tab.url);
  console.log(
    LOG_PREFIX,
    `${trigger}: tab ${tab.id} ->`,
    hostname ?? `(not a web page: ${tab.url || "no URL yet"})`,
  );
  // TODO(milestone 6): if hostname is on the blocked list, show the warning overlay.
  // TODO(milestone 7): only do this while a focus session is running.
}
