module.exports = {
  normalize(json) {
    const servicesNorm = json.servicesOrder.map((order, id) => {
      const title = json.services[id];
      const url = json.servicesUrl[id];
      const textContent = json.servicesDescription[id];

      return {
        order: order - 1,
        title: title,
        contents: [
          {
            type: 'url',
            data: url,
          },
          {
            type: 'text',
            data: textContent,
          },
        ],
      };
    });

    return servicesNorm.sort((a, b) => a.order - b.order);
  },
};
