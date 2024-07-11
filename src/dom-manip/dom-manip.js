import {
  getPlayers,
  changeCurrentPlayer,
  getCurrentPlayer,
  getOpposingPlayer,
  getCurrentPlayerDomBoard,
  getNonCurrentPlayerDomBoard,
  getGameState,
  setGameState,
  reInitPlayer,
} from "../game-logic/game-logic";
import { playAgain } from "./dom-buttons";
function initDom() {
  populateBoard();
}

function populateBoard() {
  const boards = document.querySelectorAll(".board");

  boards.forEach((board, index) => {
    board.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      const rowIndex = i;
      for (let j = 0; j < 10; j++) {
        const columnIndex = j;
        const div = createDiv("box");

        div.dataset.row = rowIndex;
        div.dataset.column = columnIndex;
        div.dataset.player = index;

        // generateCoordNums([rowIndex, columnIndex]);
        if (rowIndex === 0) {
          const span = createSpan("coord-num-up", columnIndex);
          div.appendChild(span);
        }
        if (columnIndex === 0) {
          const span = createSpan("coord-num-left", rowIndex);
          div.appendChild(span);
        }
        board.appendChild(div);

        div.addEventListener("click", handleDivClick);
      }
    }
  });
}
function generateCoordNums(div) {
  const divRow = parseInt(div.dataset.row);
  const divColumn = parseInt(div.dataset.column);
  if (divRow === 0 && divColumn === 0) {
    const span1 = createSpan("coord-num-up", divColumn);
    div.appendChild(span1);
    const span2 = createSpan("coord-num-left", divRow);
    div.appendChild(span2);
  } else if (divRow === 0) {
    const span = createSpan("coord-num-up", divColumn);
    div.appendChild(span);
  } else if (divColumn === 0) {
    const span = createSpan("coord-num-left", divRow);
    div.appendChild(span);
  }
}

async function handleDivClick(e) {
  // if hit ship is succesful
  if (hitShip(e.target.dataset)) {
    // continue playing with the current player
    const currentPlayer = getPlayers()[parseInt(e.target.dataset.player)];
    // check if any ship is sunk
    const x_coord = parseInt(e.target.dataset.column);
    const y_coord = parseInt(e.target.dataset.row);

    const currentShip = currentPlayer.player.gameboard._getShip([
      x_coord,
      y_coord,
    ]);
    if (currentShip.sunk) {
      const surroundingCoords =
        currentPlayer.player.gameboard._getShipSurroundingCoords([
          x_coord,
          y_coord,
        ]);
      currentPlayer.player.gameboard.surroundingShots.push(
        ...surroundingCoords
      );
      // renderGameboardData(currentPlayer, surroundingCoords, "▪️", "surround");
    }
    if (currentPlayer.player.gameboard.hasAllShipsBeenSunk()) {
      // check if all ships sunk
      // display winning player
      // displayWinner()
      console.log("winner is", getCurrentPlayer());
      setEndGameState();
      return;
    }
    // if hit ship is not successful
  } else {
    changeCurrentPlayer();
    populateGameboards();
    renderCurrentPlayerDisplay();
    // change the current player
    renderHeaderInfo(getCurrentPlayer(), "is attacking...");
    const nonAIPlayer = getPlayers()[0];
    const playerGameboard = nonAIPlayer.player.gameboard;

    await aiAttackWithDelay(playerGameboard);
    if (playerGameboard.hasAllShipsBeenSunk()) return;
  }

  populateGameboards();
  await new Promise((resolve) => setTimeout(resolve, 300));
  renderCurrentPlayerDisplay();
}

async function aiAttackWithDelay(playerGameboard) {
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (!aiAttack()) {
      if (playerGameboard.hasAllShipsBeenSunk()) {
        console.log("winner is", getCurrentPlayer());
        setEndGameState();
        return;
      }
      changeCurrentPlayer();
      renderHeaderInfo(getCurrentPlayer(), "is attacking...");
      break;
    }
    populateGameboards();
    renderCurrentPlayerDisplay();
  }
}

// function aiAttack() {
//   // get the board ai is attacking
//   const nonAIPlayer = getPlayers()[0];
//   const playerGameboard = nonAIPlayer.player.gameboard;

//   const attackSequence = getAttackSequence();
//   attackSequence.forEach((coord) => {
//     if (!playerGameboard.receiveAttack(coord)) {
//       return false;
//     }
//   });

//   return true;

//   // if (!playerGameboard.receiveAttack(coord)) {
//   //   changeCurrentPlayer();
//   //   renderHeaderInfo(getCurrentPlayer(), "is attacking...");
//   //   return;
//   // }
// }

// function getAttackSequence() {
//   // get the board ai is attacking
//   const nonAIPlayer = getPlayers()[0];
//   const playerGameboard = nonAIPlayer.player.gameboard;
//   const playerGameboardCurrentCoords = playerGameboard.currentCoords;

//   const attackSequence = [];

//   let coord = getAIAttackCoords();
//   attackSequence.push(coord);

//   console.log(coord);
//   console.log(playerGameboardCurrentCoords);
//   while (hasCoordCollision(coord, playerGameboardCurrentCoords)) {
//     coord = getAIAttackCoords();
//     attackSequence.push(coord);
//   }

//   return attackSequence;
// }

// function getAIAttackCoords() {
//   // get the board ai is attacking
//   const nonAIPlayer = getPlayers()[0];
//   const playerGameboard = nonAIPlayer.player.gameboard;
//   // data to check against coords
//   const hitShots = playerGameboard.hitShots;
//   const missedShots = playerGameboard.missedShots;
//   const surroundingShots = playerGameboard.surroundingShots;

//   // generate x and y coord
//   let x_coord = generateRandomNumber();
//   let y_coord = generateRandomNumber();

//   while (
//     hasCoordCollision([x_coord, y_coord], hitShots) ||
//     hasCoordCollision([x_coord, y_coord], missedShots) ||
//     hasCoordCollision([x_coord, y_coord], surroundingShots)
//   ) {
//     x_coord = generateRandomNumber();
//     y_coord = generateRandomNumber();
//   }

//   const coord = [x_coord, y_coord];

//   return coord;
// }

function aiAttack() {
  // get the board ai is attacking
  const nonAIPlayer = getPlayers()[0];
  const playerGameboard = nonAIPlayer.player.gameboard;

  if (playerGameboard.hasAllShipsBeenSunk()) {
    console.log("winner is", getCurrentPlayer());
    return false;
  }
  // data to check against coords
  const hitShots = playerGameboard.hitShots;
  const missedShots = playerGameboard.missedShots;
  const surroundingShots = playerGameboard.surroundingShots;

  // generate x and y coord
  let x_coord = generateRandomNumber();
  let y_coord = generateRandomNumber();

  while (
    hasCoordCollision([x_coord, y_coord], hitShots) ||
    hasCoordCollision([x_coord, y_coord], missedShots) ||
    hasCoordCollision([x_coord, y_coord], surroundingShots)
  ) {
    x_coord = generateRandomNumber();
    y_coord = generateRandomNumber();
  }

  const coord = [x_coord, y_coord];

  const isSuccessful = playerGameboard.receiveAttack(coord);

  const currentShip = playerGameboard._getShip([x_coord, y_coord]);

  if (currentShip && currentShip.sunk) {
    const surroundingCoords = playerGameboard._getShipSurroundingCoords([
      x_coord,
      y_coord,
    ]);
    playerGameboard.surroundingShots.push(...surroundingCoords);
  }

  return isSuccessful;
}

function hasCoordCollision(coord, otherCoord) {
  return otherCoord.some((existingCoord) => {
    // console.log(arraysEqual(existingCoord, coord));
    return arraysEqual(existingCoord, coord);
  });
}
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((element, index) => element === arr2[index]);
}

function hitShip(player) {
  const playerDataset = { ...player };

  const currentPlayer = getPlayers()[parseInt(playerDataset.player)];
  const playerGameboard = currentPlayer.player.gameboard;

  const x_coord = parseInt(playerDataset.column);
  const y_coord = parseInt(playerDataset.row);
  const coord = [x_coord, y_coord];
  return playerGameboard.receiveAttack(coord);
}

function populateGameboards() {
  const players = getPlayers();
  renderPlayerNames(players);
  renderHeaderInfo(getCurrentPlayer(), "is attacking...");

  players.forEach((player) => {
    renderPlayerBoard(player);
  });
}

function renderCurrentPlayerDisplay() {
  // get player board divs
  const Player1BoardDiv = document.querySelector(".player-1-board");
  const Player2BoardDiv = document.querySelector(".player-2-board");

  // reset boards opacity
  Player1BoardDiv.classList.remove("half-opacity");
  Player2BoardDiv.classList.remove("half-opacity");

  // set current player board opacity
  setBoardOpacity();

  // set players board eventListeners
  const nonCurrentPlayerBoard = [...getNonCurrentPlayerDomBoard()];
  const currentPlayerBoard = [...getCurrentPlayerDomBoard()];
  // set current players board unclickable
  setPlayerBoardEventListener(currentPlayerBoard, true);
  // set non current players board clickable
  setPlayerBoardEventListener(nonCurrentPlayerBoard, false);
}

function setBoardOpacity(shouldSetBothBoard = false) {
  const currentPlayer = getCurrentPlayer();
  const nonCurrentPlayer = getOpposingPlayer();
  const opposinglayerBoardDiv = document.querySelector(
    `.${nonCurrentPlayer.name}-board`
  );
  const currentPlayerBoardDiv = document.querySelector(
    `.${currentPlayer.name}-board`
  );
  opposinglayerBoardDiv.classList.remove("half-opacity");
  currentPlayerBoardDiv.classList.remove("half-opacity");
  if (shouldSetBothBoard) {
    opposinglayerBoardDiv.classList.add("half-opacity");
  }

  currentPlayerBoardDiv.classList.add("half-opacity");
}

function setEndGameState() {
  populateGameboards();
  renderHeaderInfo(getCurrentPlayer(), "has won");
  setGameState("isFinished", true);
  const nonCurrentPlayerBoard = [...getNonCurrentPlayerDomBoard()];
  const currentPlayerBoard = [...getCurrentPlayerDomBoard()];
  console.log(currentPlayerBoard);
  console.log(nonCurrentPlayerBoard);
  setPlayerBoardEventListener(currentPlayerBoard, true);
  setPlayerBoardEventListener(nonCurrentPlayerBoard, true);
  setBoardOpacity(true);

  // populate play again button
  playAgain();
}

function setBeforeGameState() {
  const nonCurrentPlayerBoard = [...getNonCurrentPlayerDomBoard()];
  const currentPlayerBoard = [...getCurrentPlayerDomBoard()];
  setPlayerBoardEventListener(currentPlayerBoard, true);
  setPlayerBoardEventListener(nonCurrentPlayerBoard, true);
  setBoardOpacity(true);
}

function startGame() {
  const nonCurrentPlayerBoard = [...getNonCurrentPlayerDomBoard()];
  const currentPlayerBoard = [...getCurrentPlayerDomBoard()];
  setPlayerBoardEventListener(currentPlayerBoard, false);
  setPlayerBoardEventListener(nonCurrentPlayerBoard, false);
  setBoardOpacity(false);
}

function setPlayerBoardEventListener(board, shouldRemoveEventListener) {
  if (shouldRemoveEventListener) {
    board.forEach((div) => {
      div.removeEventListener("click", handleDivClick);
    });
  } else {
    board.forEach((div) => {
      div.addEventListener("click", handleDivClick);
    });
  }
}

function renderPlayerBoard(player) {
  const currentPlayer = player.player;

  //render currentcoords
  // if player is ai dont render currentcoords
  if (player.player.type !== "ai") {
    const playerBoard = Array.from(player.board);
    playerBoard.forEach((element) => {
      element.classList.remove("ship");
    });
    renderGameboardData(
      player,
      currentPlayer.gameboard.currentCoords,
      "",
      "ship",
      false
    );
  }

  //render successful hitshots
  renderGameboardData(player, currentPlayer.gameboard.hitShots, "❌", "hit");

  //render missedshots
  renderGameboardData(
    player,
    currentPlayer.gameboard.missedShots,
    "▪️",
    "missed"
  );

  // render surrounding shots
  renderGameboardData(
    player,
    currentPlayer.gameboard.surroundingShots,
    "▪️",
    "surround"
  );
}

function renderGameboardData(
  player,
  data,
  text,
  className,
  shouldRemoveEventListener = true
) {
  const playerBoard = Array.from(player.board);

  data.forEach((coord) => {
    const div = findCorrespondingDiv(coord, playerBoard);

    div.textContent = text;
    div.classList.add(className);
    generateCoordNums(div);
    // prevent clicking the same coord again
    if (shouldRemoveEventListener) {
      div.removeEventListener("click", handleDivClick);
    }
  });
}

function findCorrespondingDiv(coord, board) {
  const [x_coord, y_coord] = coord;

  const div = board.find((div) => {
    const row = parseInt(div.dataset.row);
    const column = parseInt(div.dataset.column);
    return row === y_coord && column === x_coord;
  });

  return div;
}

function renderPlayerNames(players) {
  const player1Div = document.querySelector(".player-1-text");
  const player2Div = document.querySelector(".player-2-text");

  player1Div.textContent = "";
  player2Div.textContent = "";

  player1Div.appendChild(createHeading(`${players[0].player.name}`, "h2"));
  player2Div.appendChild(createHeading(`${players[1].player.name}`, "h2"));
}

function renderHeaderInfo(player, text) {
  const currentPlayerHeader = document.querySelector(".current-player-header");
  currentPlayerHeader.innerHTML = "";
  const header = createHeading(`${player.name} ${text}`, "h1");

  currentPlayerHeader.appendChild(header);
}

function createHeading(text, heading) {
  const header = document.createElement(heading);
  header.textContent = text;

  return header;
}

function createSpan(className, text) {
  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add(className);

  return span;
}

function createDiv(className) {
  const div = document.createElement("div");
  div.classList.add(className);
  return div;
}
function generateRandomNumber() {
  return Math.floor(Math.random() * 10);
}

export {
  initDom,
  populateGameboards,
  renderGameboardData,
  startGame,
  setBeforeGameState,
};
