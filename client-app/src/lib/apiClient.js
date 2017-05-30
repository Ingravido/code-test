const config = require('../config/config');
const io = require('socket.io-client');

let socketHandler = null;
const eventsListeners = [];

module.exports = {
  connect() {
    const socket = io(`http://${config.apiHost}:${config.apiPort}`);
    socket.on('connect', () => onConnect(socket));

    bindEventListeners(socket);
  },
  addEventListener(listener) {
    eventsListeners.push(listener);
  },
  emitEvent(event, data) {
    socketHandler.emit(event, data);
  },
};

function onConnect(socket) {
  socketHandler = socket;
  module.exports.emitEvent('buttons');
}

function bindEventListeners(socket) {
  eventsListeners.forEach(listener =>
    socket.on(listener.on, listener.handler));
}

