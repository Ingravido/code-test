const normalizer = require('./lib/normalizer');
const renderer = require('./vendor/thirdpartyrenderer/thirdPartyRenderer');
const buttonsBar = require('./components/buttonsBar');
const apiClient = require('./lib/apiClient');
const ui = require('./lib/ui');
const template = require('./lib/template');

const styles = require('./assets/css/styles.css');
const templates = require('./templates/app');

const elRenderContainer = '#renderer-container';
const elButtonsContainer = '#buttons-container';

const apiEventsListeners = [
  {
    on: 'buttons',
    handler: gotButtons,
  },
  {
    on: 'file',
    handler: gotFile,
  },
];

init();

function init() {
  apiEventsListeners.forEach(event => apiClient.addEventListener(event));
  buttonsBar.addBtnCLickListerner(gotButtonClick);
  apiClient.connect();
}

function gotButtonClick(fileParams) {
  apiClient.emitEvent('file', fileParams);
}

function gotButtons(data) {
  buttonsBar.render(elButtonsContainer, data);
}

function gotFile(data) {
  const fileHtml = (fileHasData(data)) ?
    renderer.render(normalizer.normalize(data)) :
    template.renderStrTemplate(templates.noJsonTpl);

  ui.setElementHtmlWithfadeIn(elRenderContainer, fileHtml);
}

function fileHasData(data) {
  return data.raw.length;
}
