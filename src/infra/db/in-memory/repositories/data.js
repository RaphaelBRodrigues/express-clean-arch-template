const Election = require('../../../../domain/entities/election.entity');
const Participant = require('../../../../domain/entities/participant.entity');

const firstElection = new Election({
  id: 1,
  participants: [
    new Participant({
      id: 1,
      name: "Fred",
      votes: 65465,
      imageURL: "https://avatars.githubusercontent.com/u/42044496?v=4"
    }),
    new Participant({
      id: 2,
      name: "Marvvila",
      votes: 23114,
      imageURL: "https://avatars.githubusercontent.com/u/42044496?v=4"
    })
  ],
  status: false
});

const currentElection = new Election({
  id: 2,
  participants: [
    new Participant({
      id: 7,
      name: "Gabriel",
      votes: 0,
      imageURL: "https://avatars.githubusercontent.com/u/42044496?v=4"
    }),
    new Participant({
      id: 15,
      name: "Key Alves",
      votes: 0,
      imageURL: "https://avatars.githubusercontent.com/u/42044496?v=4"
    })
  ],
  status: true
});

module.exports = { firstElection, currentElection }