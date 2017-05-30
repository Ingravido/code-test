module.exports = {
  normalize(json) {
    return Object.keys(json).map((game, id) => {
      const gameObj = json[game];
      return {
        order: id,
        title: game,
        contents: [
          {
            type: 'url',
            data: gameObj.url,
          },
          {
            type: 'text',
            data: gameObj.description,
          },
          {
            type: 'img',
            data: gameObj.img,
          },
          {
            type: 'date',
            data: gameObj.publishDate,
          },
        ],
      };
    });
  },
};
