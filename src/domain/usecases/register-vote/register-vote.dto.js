class InputRegisterVoteDTO {
  constructor({ participantId }) {
    this.participantId = participantId;
  }
};

class OutputRegisterVoteDTO {
  message = "vote computed";

  constructor({
    participantId,
    election
  }) {
    this.election = election;
    this.participantId = participantId;
  }
};

module.exports = {
  InputRegisterVoteDTO,
  OutputRegisterVoteDTO
}