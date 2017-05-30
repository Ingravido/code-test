const template = require('../lib/template');
const ui = require('../lib/ui');
const templates = require('./templates/buttonsBar');

const buttonsClickListeners = [];

module.exports = {
  render(dest, data) {
    const buttonsHtml = renderButtons(data);
    const buttonsBar = template.renderStrTemplate(templates.barContainer, { buttonsHtml });

    ui.setElementHtml(dest, buttonsBar);
    bindButtons(data);
  },
  addBtnCLickListerner(callback) {
    buttonsClickListeners.push(callback);
  },
};

function renderButtons(data) {
  return data.reduce(
    (html, button) => {
      const idButton = getButtonId(button);
      const buttonHtml = template.renderStrTemplate(templates.button, {
        id: idButton,
        file: button.file,
        category: button.category,
      });
      return html + buttonHtml;
    },
    '',
  );
}

function bindButtons(data) {
  data.forEach((button) => {
    const buttonSelector = `#${getButtonId(button)}`;
    ui.getElement(buttonSelector).addEventListener('click', event =>
      doBtnCLickListerners(event.target.dataset),
    );
  });
}

function getButtonId(button) {
  return `${button.file}_${button.category}`;
}

function doBtnCLickListerners(event) {
  buttonsClickListeners.forEach(callback => callback(event));
}


