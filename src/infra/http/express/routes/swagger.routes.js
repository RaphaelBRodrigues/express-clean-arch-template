const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../../resources/swagger.json');

class SwaggerRoutes {
  #router = {};

  constructor() {
    this.#router = express.Router();
    this.#createRoutes();
  }

  #createRoutes() {
    this.#router.use(swaggerUi.serve);
    this.#router.get("/", swaggerUi.setup(swaggerDocument))
  }

  get routes() {
    return this.#router;
  }
}

module.exports = SwaggerRoutes;