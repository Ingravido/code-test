module.exports = {
  normalize(json) {
    const operators = json.operators;
    return Object.keys(operators).map((op, id) => {
      const opObj = operators[op];
      return {
        order: id,
        title: op,
        contents: [
          {
            type: 'url',
            data: opObj.url,
          },
        ],
      };
    });
  },
};
