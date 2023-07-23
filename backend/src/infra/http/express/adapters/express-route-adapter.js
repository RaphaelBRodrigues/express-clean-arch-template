class ExpressRouteAdapter {
  constructor(controller) {
    this.controller = controller;
    this.handle = this.handle.bind(this);
  }

  handle(req, res, next) {
    return this.controller.handle(req, res, next)
  }
}

module.exports = ExpressRouteAdapter;