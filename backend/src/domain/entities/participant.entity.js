class Participant {
  #_votesPercentage = 0;

  constructor({ id = null, name, votes }) {
    this.id = id;
    this.name = name;
    this.votes = votes;
  }

  set votesPercentage(votesPercentage) {
    this.#_votesPercentage = votesPercentage;
  }

  get votesPercentage() {
    return this.#_votesPercentage;
  }
};

module.exports = Participant;