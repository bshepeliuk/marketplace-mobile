import socket from 'socket.io-client';

class SocketApi {
  init(token) {
    this.socket = socket(
      'wss://apiko-marketplace-api-2019.herokuapp.com/',
      {
        query: {
          token,
        },
        transports: ['websocket'],
        timeout: 10000,
        jsonp: false,
        autoConnect: false,
        agent: '-',
        path: '/',
        pfx: '-',
        cert: '-',
        ca: '-',
        ciphers: '-',
        rejectUnauthorized: '-',
      },
    );
  }

  handleMessages(handler) {
    this.socket.on('message', (message) => {
      handler(JSON.parse(message));
    });
  }
}

export default new SocketApi();
