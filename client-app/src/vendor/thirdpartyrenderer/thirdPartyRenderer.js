const template = require('../../lib/template');
const ui = require('../../lib/ui');
const templates = require('./templates/templates');

const styles = require('./assets/css/styles.css');

module.exports = {
  render(items) {
    const htmlFileElements = renderItems(items);

    return renderFile(htmlFileElements);
  },
};

function renderFile(htmlFileElements) {
  return template.renderStrTemplate(templates.fileTpl, { htmlFileElements });
}

function renderItems(items) {
  const htmlFile = items.reduce((html, item) =>
    html + renderItem(item)
    , '',
  );
  return htmlFile;
}

function renderTitle(title) {
  return template.renderStrTemplate(templates.titleTpl, { title });
}

function renderItem(item) {
  const htmlTitle = renderTitle(item.title);
  const htmlContents = renderContents(item.contents);

  return renderFileContents(htmlTitle, htmlContents);
}

function renderFileContents(intemTitle, intemContents) {
  return template.renderStrTemplate(templates.itemContentsTpl, { intemTitle, intemContents });
}

function renderContents(contents) {
  return contents.reduce((html, contentsItem) =>
    html + renderContentsItem(contentsItem)
    , '',
  );
}

function renderContentsItem(contentsItem) {
  const itemRenderers = {
    img: renderImage,
    date: renderDate,
    url: renderLink,
    text: renderText,
  };

  return itemRenderers[contentsItem.type](contentsItem.data);
}

function renderImage(imageUrl) {
  return template.renderStrTemplate(templates.imageTpl, { imageUrl });
}

function renderLink(linkUrl) {
  return template.renderStrTemplate(templates.linkTpl, { linkUrl });
}

function renderText(text) {
  return template.renderStrTemplate(templates.textTpl, { text });
}

function renderDate(date) {
  return template.renderStrTemplate(templates.dateTpl, { date });
}
