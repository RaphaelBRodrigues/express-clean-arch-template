const express = require('express');
const RegisterVoteControllerFactory = require('../factories/register-vote.factory');
const ExpressRouteAdapter = require('../adapters/express-route-adapter');

class ElectionRoutes {
  #router = {};

  constructor() {
    this.#router = express.Router();
    this.#createRoutes();
  }

  #createRoutes() {
    const registerVoteController = new ExpressRouteAdapter(
      new RegisterVoteControllerFactory().create()
    );

    this.#router.post("/vote", registerVoteController.handle);
  }

  get routes() {
    return this.#router;
  }
}

module.exports = ElectionRoutes;