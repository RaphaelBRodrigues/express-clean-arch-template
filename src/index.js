const HttpServer = require("./infra/http/express/http-server");

class Main {
  constructor() {
    this.startServer();
  }

  startServer() {
    const server = new HttpServer();
    server.start();
  }
};

new Main();