import { Player } from "../player/player-class";
import { initDom, populateGameboards } from "../dom-manip/dom-manip";

let players = [];
let gameState;

function getBoardsDOM(index) {
  const boards = Array.from(document.querySelectorAll(".board"));
  const boardsChildNodes = [boards[0].children, boards[1].children];
  return boardsChildNodes[index];
}

function initPlayers(player1Type, player2Type, player1Name, player2Name) {
  players = [
    {
      player: createPlayer(player1Type, player1Name),
      board: getBoardsDOM(0),
    },
    {
      player: createPlayer(player2Type, player2Name),
      board: getBoardsDOM(1),
    },
  ];
}
function initGameState() {
  gameState = {
    currentPlayer: players[0].player,
    currentPlayerBoard: players[0].board,
    isFinished: false,
  };
}

function createPlayer(playerType, playerName) {
  return new Player(playerType, playerName);
}
function getPlayers() {
  return players;
}
function getGameState() {
  return gameState;
}
function getCurrentPlayer() {
  return gameState.currentPlayer;
}
function getCurrentPlayerDomBoard() {
  return gameState.currentPlayerBoard;
}
function getNonCurrentPlayerDomBoard() {
  return gameState.currentPlayer === players[0].player
    ? players[1].board
    : players[0].board;
}
function getOpposingPlayer() {
  return gameState.currentPlayer === players[0].player
    ? players[1].player
    : players[0].player;
}
function changeCurrentPlayer() {
  gameState.currentPlayer =
    gameState.currentPlayer === players[0].player
      ? (gameState.currentPlayer = players[1].player)
      : (gameState.currentPlayer = players[0].player);

  gameState.currentPlayerBoard =
    gameState.currentPlayer === players[0].player
      ? players[0].board
      : players[1].board;
}

function initGame(player1, player2) {
  initDom();
  initPlayers(player1.type, player2.type, player1.name, player2.name);
  initGameState();
  populateGameboards();
}

export {
  initGame,
  getPlayers,
  getGameState,
  changeCurrentPlayer,
  getCurrentPlayer,
  getOpposingPlayer,
  getCurrentPlayerDomBoard,
  getNonCurrentPlayerDomBoard,
};
