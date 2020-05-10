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
      },
    );
  }

  handleMessages(handler) {
    try {
      this.socket.on('message', (message) => {
        handler(JSON.parse(message));
      });
    } catch (error) {}
  }
}

export default new SocketApi();
