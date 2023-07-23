const RegisterVoteUseCase = require("../../../../domain/usecases/register-vote/register-vote.usecase");
const ElectionRepositoryInMemory = require("../../../db/in-memory/repositories/election.repository");
const RegisterVoteController = require("../controllers/register-vote.controller");

class RegisterVoteControllerFactory {
  create() {
    const electionRepository = new ElectionRepositoryInMemory();
    const registerVoteUseCase = new RegisterVoteUseCase(electionRepository);
    const registerVoteController = new RegisterVoteController(registerVoteUseCase);

    return registerVoteController;
  }
}

module.exports = RegisterVoteControllerFactory;