import { Player } from "../player/player-class";
import { initDom, populateGameboards } from "../dom-manip/dom-manip";

let players = [];

function getBoardsDOM(index) {
  const boards = Array.from(document.querySelectorAll(".board"));
  const boardsChildNodes = [boards[0].children, boards[1].children];
  return boardsChildNodes[index];
}

function initPlayers(player1Type, player2Type) {
  players = [
    { player: createPlayer(player1Type), board: getBoardsDOM(0) },
    { player: createPlayer(player2Type), board: getBoardsDOM(1) },
  ];
}

function createPlayer(playerType) {
  return new Player(playerType);
}
function getPlayers() {
  return players;
}

function initGame(player1Type, player2Type) {
  initDom();
  initPlayers(player1Type, player2Type);
  populateGameboards(players);
}

export { initGame, getPlayers };
