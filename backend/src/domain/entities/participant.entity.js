class Participant {
  #_votesPercentage = 0;

  constructor({ id = null, name, imageURL, votes }) {
    this.id = id;
    this.name = name;
    this.votes = votes;
    this.imageURL = imageURL
  }

  set votesPercentage(votesPercentage) {
    this.#_votesPercentage = votesPercentage;
  }

  get votesPercentage() {
    return this.#_votesPercentage;
  }
};

module.exports = Participant;