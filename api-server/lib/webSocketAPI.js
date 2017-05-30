const server = require('http').createServer();
const io = require('socket.io')(server);
const contentsRepository = require('./contentsRepository');

module.exports = {
  serverUp() {
    io.on('connection', (client) => {
      client.on('buttons', () =>
        contentsRepository.getCategoriesAndFiles().then(data => client.emit('buttons', data)));

      client.on('file', data =>
        contentsRepository.getFileContents(data).then(fileData => client.emit('file', fileData)));
    });

    server.listen(process.env.SERVER_PORT);
  }
};
