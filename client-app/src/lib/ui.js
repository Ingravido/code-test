module.exports = {
  getElement(selector) {
    return document.querySelector(selector);
  },
  getElementHtml(selector) {
    return this.getElement(selector).innerHTML;
  },
  setElementHtml(selector, html) {
    this.getElement(selector).innerHTML = html;
  },
  setElementHtmlWithfadeIn(selector, html, secs = 5, delay = 100) {
    const element = this.getElement(selector);
    element.setAttribute('style', 'transition: 0s; opacity: 0;');
    element.innerHTML = html;
    setTimeout(() => (element.setAttribute('style', `transition: ${secs}s; opacity: 1;`)), delay);
  },
};
