module.exports = {
  fileTpl:
    `<div class="elements-container">
        {htmlFileElements}
    </div>`,
  itemContentsTpl:
    `<div class="element-container">
      <div class="title-container">
        {intemTitle}
      </div>
      <div class="contents-container">
        {intemContents}
      </div>
    </div>`,
  titleTpl:
    `<div class="title">
      {title}
    </div>`,
  dateTpl:
    `<div class="date-content content">
      <div class="icon-date"></div>
      <div class="date">{date}</div>
     </div>`,
  linkTpl:
    `<div class="link-content content">
      <div class="icon-link"></div>
      <div class="link"><a href="{linkUrl}">{linkUrl}</a></div>
    </div>`,
  textTpl:
    `<div class="text-content content">
      {text}
    </div>`,
  imageTpl:
    `<div class="image-content content">
      <img src="{imageUrl}"/>
    </div>`,
};
