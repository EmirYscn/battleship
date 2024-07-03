import { Player } from "../player/player-class";

const init = function () {
  const player1 = new Player();
  const player2 = new Player();

  console.log(player1);
  console.log(player2);
};

export { init };
