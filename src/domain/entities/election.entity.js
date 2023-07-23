class Election {
  totalVotes = 0;

  constructor({
    id = null,
    participants = [],
    status = false
  }) {
    this.id = id;
    this.participants = participants;
    this.status = status;
  };


  calcTotalVotes() {
    const totalVotes = participats.reduce((totalVotes, { votes }) => {
      return votes + totalVotes;
    }, 0);

    this.totalVotes = totalVotes;
  }
}

module.exports = Election;