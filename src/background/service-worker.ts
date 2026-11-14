// Background service worker (Manifest V3).
//
// Chrome stops this worker when it is idle and starts it again for each event, so:
//   - register every chrome.* listener synchronously at the top level of this file,
//     so the listener exists when Chrome wakes the worker to deliver an event;
//   - never keep state in module-level variables; persist it in chrome.storage.

chrome.runtime.onInstalled.addListener((details) => {
  console.log("[Tab Switcher Blacklist] onInstalled, reason:", details.reason);
  // TODO(milestone ?): when details.reason is "install", seed the default blocked
  // sites (youtube.com, instagram.com, reddit.com) into chrome.storage.local.
});

// TODO(milestone ?): register tab-switch, window-focus and navigation listeners here,
// at the top level, to check the active tab against the blocked list.
