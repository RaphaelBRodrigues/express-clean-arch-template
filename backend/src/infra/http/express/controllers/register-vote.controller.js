const { InputRegisterVoteDTO } = require("../../../../domain/usecases/register-vote/register-vote.dto");

class RegisterVoteController {
  constructor(registerVoteUseCase) {
    this.registerVoteUseCase = registerVoteUseCase;
  }

  async handle(request, response) {
    const voteDTO = new InputRegisterVoteDTO();

    await this.registerVoteUseCase(voteDTO);

    return res.send();
  };
}

module.exports = RegisterVoteController;