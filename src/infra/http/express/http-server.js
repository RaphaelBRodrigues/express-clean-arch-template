const express = require('express');
const ElectionRoutes = require('./routes/election.routes');
const SwaggerRoutes = require('./routes/swagger.routes');
const cors = require('cors');

class HttpServer {
  constructor() {
    this.app = express();
  }

  start() {
    this.createRoutes();
    this.startListener();
  }

  createRoutes() {
    const electionRoutes = new ElectionRoutes().routes;
    const swaggerRoutes = new SwaggerRoutes().routes;

    this.app.use(cors());
    this.app.use(express.json())

    this.app.use("/elections", electionRoutes);
    this.app.use("/swagger", swaggerRoutes);

    this.app.use((error, __, res, ___) => {
      console.error(error);

      return res.status(500).json({
        message: "internal server error"
      })
    })
  }

  startListener() {
    this.app.listen(3000);
  }
}

module.exports = HttpServer;