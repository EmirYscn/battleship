import { Player } from "../player/player-class";
import {
  initDom,
  populateGameboards,
  setBeforeGameState,
} from "../dom-manip/dom-manip";
import { initButtons } from "../dom-manip/dom-buttons";

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
  console.log(players);
}
function reInitPlayer(player1Type, player1Name) {
  players[0] = {
    player: createPlayer(player1Type, player1Name),
    board: getBoardsDOM(0),
  };
  initGameState();
  populateGameboards();
  setBeforeGameState();
  console.log(players);
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
function setGameState(key, value) {
  gameState[`${key}`] = value;
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
  setBeforeGameState();
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
  setGameState,
  reInitPlayer,
};
