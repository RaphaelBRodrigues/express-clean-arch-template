const { OutputRegisterVoteDTO } = require("./register-vote.dto");

class RegisterVoteUseCase {
  constructor() {

  }

  execute(inputDTO) {
    const outputDTO = new OutputRegisterVoteDTO();

    return outputDTO;
  }
}

module.exports = RegisterVoteUseCase;