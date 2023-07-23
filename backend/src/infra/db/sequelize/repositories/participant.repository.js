const ParticipantRepository = require("../../../../domain/repositories/participant.repository");

class ParticipantSequelizeRepository extends ParticipantRepository {
  async findById(id) {
    return {}
  }
}

module.exports = ParticipantSequelizeRepository;