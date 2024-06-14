export function queryTabs(
  queryInfo: chrome.tabs.QueryInfo,
): Promise<chrome.tabs.Tab[]> {
  return new Promise((resolve, reject) => {
    chrome.tabs.query(queryInfo, (result) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
      } else {
        resolve(result);
      }
    });
  });
}
