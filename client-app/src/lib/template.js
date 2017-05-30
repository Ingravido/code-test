const ui = require('./ui');

module.exports = {
  renderStrTemplate(strTpl, data = {}) {
    let template = strTpl;
    return renderTemplate(template, data);
  },
};

function renderTemplate(template, data) {
  const re = /{([^}]+)}/g;
  let match = null;
  while (match = re.exec(template)) {
    template = template.replace(match[0], data[match[1]]);
  }
  return template;
}
