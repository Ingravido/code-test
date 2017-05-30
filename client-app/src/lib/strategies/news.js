module.exports = {
  normalize(json) {
    const news = json.news;
    return news.map((n, id) => ({
      order: id,
      title: n.title,
      contents: [
        {
          type: 'text',
          data: n.content,
        },
      ],
    }));
  },
};
