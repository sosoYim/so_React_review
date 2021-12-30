export const settings = {
  setDocumentTitle(newTitle) {
    document.title = newTitle;
  },
  clickDocumentReloadBrowser() {
    document.addEventListener('click', () => window.location.reload());
  },
};
