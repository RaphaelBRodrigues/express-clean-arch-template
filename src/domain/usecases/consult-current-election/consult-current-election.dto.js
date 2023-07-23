class InputConsultCurrentElectionDTO {
  constructor({ id }) {
    this.id = id;
  }
}

class OutputConsultCurrentElectionDTO {
  constructor({ election }) {
    this.election = election;
  }
}

module.exports = {
  InputConsultCurrentElectionDTO,
  OutputConsultCurrentElectionDTO
}