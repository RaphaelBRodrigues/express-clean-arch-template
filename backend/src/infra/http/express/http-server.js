const express = require('express');
const ParticipantRoutes = require('./routes/participant.routes');
const ElectionRoutes = require('./routes/election.routes');
const SwaggerRoutes = require('./routes/swagger.routes');

class HttpServer {
  constructor() {
    this.app = express();
  }

  start() {
    this.createRoutes();
    this.startListener();
  }

  createRoutes() {
    const participantRoutes = new ParticipantRoutes().routes;
    const electionRoutes = new ElectionRoutes().routes;
    const swaggerRoutes = new SwaggerRoutes().routes;

    this.app.use("/elections", electionRoutes);
    this.app.use("/participants", participantRoutes);
    this.app.use("/swagger", swaggerRoutes);
  }

  startListener() {
    this.app.listen(3000);
  }
}

module.exports = HttpServer;