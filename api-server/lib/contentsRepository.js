const fs = require('fs-extra');

module.exports = {
  getCategoriesAndFiles() {
    return getCategories().then((categories) => {
      const categoriesDirs = [];
      categories.forEach(categoryName => categoriesDirs.push(getFilesInCategory(categoryName)));

      return Promise.all(categoriesDirs).then((categoriesResolved) => {
        const allFiles = mergeAllCategoryDirs(categoriesResolved);
        return Promise.resolve(allFiles);
      });
    });
  },
  getFileContents(args) {
    const {category, file} = args;
    const fileFullPath = getFileFullPath(category, file);

    return readFileContents(fileFullPath).then(raw => Promise.resolve({category, raw}));
  },
};

function getFilesInCategory(categoryName) {
  const categoryFullPath = getCategoryFullPath(categoryName);

  return readDir(categoryFullPath).then((files) => {
    const filesInCategory = files.map(file => ({
      file: removeExtensionToFile(file),
      category: categoryName,
    }));
    return Promise.resolve(filesInCategory);
  });
}

function mergeAllCategoryDirs(categoriesResolved) {
  const allFiles = [];

  categoriesResolved.map(category => allFiles.push(...category));
  return allFiles;
}

function getJSONDataPath() {
  return `${process.env.APP_BASE_PATH}/${process.env.JSON_DATA_PATH}`;
}

function getCategoryFullPath(category) {
  return `${getJSONDataPath()}/${category}`;
}

function getFileFullPath(category, file) {
  return `${getCategoryFullPath(category)}/${file}.json`;
}

function removeExtensionToFile(file) {
  return file.split('.').shift();
}

function readFileContents(file) {
  return fs.readFile(file, 'utf8');
}

function readDir(categoryFullPath) {
  return fs.readdir(categoryFullPath);
}

function getCategories() {
  return readDir(getJSONDataPath());
}
