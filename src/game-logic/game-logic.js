import { Player } from "../player/player-class";

const initPlayers = function () {
  const player1 = new Player();
  const player2 = new Player();

  return [player1, player2];
};

export { initPlayers };
