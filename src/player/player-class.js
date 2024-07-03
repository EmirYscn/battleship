const Gameboard = require("../gameboard/gameboard-class");

class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }
}

export { Player };
