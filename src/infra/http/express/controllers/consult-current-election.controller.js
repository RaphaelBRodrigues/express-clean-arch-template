const { InputConsultCurrentElectionDTO } = require("../../../../domain/usecases/consult-current-election/consult-current-election.dto")

class ConsultCurrentElectionController {
  constructor(consultCurrentElectionUseCase) {
    this.consultCurrentElectionUseCase = consultCurrentElectionUseCase;
  }

  handle(req, res, next) {
    try {
      const inputDTO = new InputConsultCurrentElectionDTO({
        id: req.body.id
      })

      const result = this.consultCurrentElectionUseCase.execute(inputDTO);

      return res.json(result)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ConsultCurrentElectionController;