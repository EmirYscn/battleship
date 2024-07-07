import { Gameboard } from "../gameboard/gameboard-class";

class Player {
  constructor(type, name) {
    this.type = type;
    this.name = name;
    this.gameboard = new Gameboard();
  }
}

export { Player };
