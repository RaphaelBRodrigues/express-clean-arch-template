class Election {
  totalVotes = 0;

  constructor({
    id = null,
    participants = [],
  });


  calcTotalVotes() {
    const totalVotes = participats.reduce((totalVotes, { votes }) => {
      return votes + totalVotes;
    }, 0);

    this.totalVotes = totalVotes;
  }
}