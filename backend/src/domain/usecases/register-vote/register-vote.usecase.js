const { OutputRegisterVoteDTO } = require("./register-vote.dto");

class RegisterVoteUseCase {
  constructor(electionRepository) {
    this.electionRepository = electionRepository;
  }

  execute(inputDTO) {
    const currentElection = this.electionRepository.getCurrentElection();

    const election = this.electionRepository.registerVote({
      electionId: currentElection.id,
      participantId: inputDTO.participantId
    })

    const outputDTO = new OutputRegisterVoteDTO({
      participantId: inputDTO.participantId,
      election
    });

    return outputDTO;
  }
}

module.exports = RegisterVoteUseCase;