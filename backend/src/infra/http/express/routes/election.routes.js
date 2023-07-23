const express = require('express');
const RegisterVoteControllerFactory = require('../factories/register-vote.factory');

class ElectionRoutes {
  #router = {};

  constructor() {
    this.#router = express.Router();
    this.#createRoutes();
  }

  #createRoutes() {
    const registerVoteController = new RegisterVoteControllerFactory().create();

    this.#router.post("/vote", (req, res, next) => registerVoteController.handle(req, res, next))
  }

  get routes() {
    return this.#router;
  }
}

module.exports = ElectionRoutes;