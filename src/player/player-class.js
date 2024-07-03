const Gameboard = require("../gameboard/gameboard-class");

class Player {
  constructor(type) {
    this.type = type;
    this.gameboard = new Gameboard();
  }
}

export { Player };
