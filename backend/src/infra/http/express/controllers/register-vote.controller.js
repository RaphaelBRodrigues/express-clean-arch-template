const { InputRegisterVoteDTO } = require("../../../../domain/usecases/register-vote/register-vote.dto");

class RegisterVoteController {
  constructor(registerVoteUseCase) {
    this.registerVoteUseCase = registerVoteUseCase;
  }

  async handle(request, response, next) {
    try {
      const voteDTO = new InputRegisterVoteDTO({
        participantId: request.body.participantId
      });

      const result = await this.registerVoteUseCase.execute(voteDTO);

      return response.send(result);
    } catch (err) {
      next(err)
    }
  }
}

module.exports = RegisterVoteController;