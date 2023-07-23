const express = require('express');

class ParticipantRoutes {
  #router = {};

  constructor() {
    this.#router = express.Router();

    this.#createRoutes();
  }

  #createRoutes() {
    this.#router.get("/")
  }

  get routes() {
    return this.#router;
  }
}

module.exports = ParticipantRoutes;