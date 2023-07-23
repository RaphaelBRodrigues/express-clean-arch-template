const { OutputConsultCurrentElectionDTO } = require("./consult-current-election.dto");

class ConsultCurrentElectionUseCase {
  constructor(electionRepository) {
    this.electionRepository = electionRepository;
  }

  execute(inputDTO) {
    const currentElection = this.electionRepository.getCurrentElection(inputDTO.electionId);
    const outputDTO = new OutputConsultCurrentElectionDTO({
      election: currentElection
    });

    return outputDTO;
  }
}

module.exports = ConsultCurrentElectionUseCase;