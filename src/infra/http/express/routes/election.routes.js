const express = require('express');
const RegisterVoteControllerFactory = require('../factories/register-vote.factory');
const ExpressRouteAdapter = require('../adapters/express-route-adapter');
const ConsultCurrentControllerFactory = require('../factories/consult-current-election.factory');

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

    const consultCurrentElection = new ExpressRouteAdapter(
      new ConsultCurrentControllerFactory().create()
    )

    this.#router.get("/", consultCurrentElection.handle);
    this.#router.post("/vote", registerVoteController.handle);
  }

  get routes() {
    return this.#router;
  }
}

module.exports = ElectionRoutes;