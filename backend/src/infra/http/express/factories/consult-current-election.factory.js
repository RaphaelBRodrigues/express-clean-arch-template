const ConsultCurrentElectionUseCase = require("../../../../domain/usecases/consult-current-election/consult-current-election.usecase");
const ElectionRepositoryInMemory = require("../../../db/in-memory/repositories/election.repository");
const ConsultCurrentElectionController = require("../controllers/consult-current-election.controller");

class ConsultCurrentElectionFactory {
  create() {
    const electionRepository = new ElectionRepositoryInMemory();
    const consultCurrentElectionUseCase = new ConsultCurrentElectionUseCase(electionRepository);
    const consultCurrentElectionController = new ConsultCurrentElectionController(consultCurrentElectionUseCase);

    return consultCurrentElectionController;
  }
}

module.exports = ConsultCurrentElectionFactory;