const ElectionRepository = require('../../../../domain/repositories/election.repository');

const { currentElection, firstElection } = require('./data')

const elections = [
  firstElection,
  currentElection
]

class ElectionRepositoryInMemory extends ElectionRepository {

  getCurrentElection() {
    return elections.find((election) => election.status);
  }

  registerVote({
    electionId,
    participantId
  }) {
    const electionIndex = elections
      .findIndex((election) => election.id === electionId);

    const participantIndex = elections[electionIndex]
      .participants.findIndex(participant => participant.id === participantId);

    elections[electionIndex]
      .participants[participantIndex].votes++;

    elections[electionIndex].totalVotes++;

    return elections[electionIndex];
  }
}

module.exports = ElectionRepositoryInMemory;