export const getBookmarks = (): Promise<
  chrome.bookmarks.BookmarkTreeNode[]
> => {
  return new Promise((resolve, reject) => {
    chrome.bookmarks.getTree((bookmarkTreeNodes) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
      } else {
        resolve(bookmarkTreeNodes);
      }
    });
  });
};
