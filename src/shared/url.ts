/**
 * Returns the hostname of an http(s) URL (for example "www.youtube.com"), or null
 * for anything that isn't a web page: chrome:// pages, the new tab page, file://
 * URLs, unparseable strings, or a missing URL.
 */
export function getWebHostname(url: string | undefined): string | null {
  if (!url) return null;

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null;
  return parsed.hostname;
}
