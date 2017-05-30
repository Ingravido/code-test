const news = require('./strategies/news');
const operators = require('./strategies/operators');
const services = require('./strategies/services');
const games = require('./strategies/games');

module.exports = {
  normalize(data) {
    const strategy = getStrategy(data.category);
    const json = JSON.parse(data.raw);

    return strategy.normalize(json);
  },
};

const strategies = {
  news,
  operators,
  services,
  games,
};

function getStrategy(strategyName) {
  return strategies[strategyName];
}
