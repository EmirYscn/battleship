import {
  getPlayers,
  getGameState,
  changeCurrentPlayer,
  getCurrentPlayer,
  getOpposingPlayer,
  getCurrentPlayerDomBoard,
  getNonCurrentPlayerDomBoard,
} from "../game-logic/game-logic";

function initDom() {
  populateBoard();
}

function populateBoard() {
  const boards = document.querySelectorAll(".board");

  boards.forEach((board, index) => {
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

function handleDivClick(e) {
  // if hit ship is succesful
  if (hitShip(e.target.dataset)) {
    // continue playing with the current player
    const currentPlayer =
      getPlayers()[parseInt(e.target.dataset.player)].player;
    // check if all ships sunk
    if (currentPlayer.gameboard.hasAllShipsBeenSunk()) {
      // display winning player
      // displayWinner()
      console.log("winner is", getCurrentPlayer());
    }
    // if hit ship is not successful
  } else {
    // change the current player
    changeCurrentPlayer();
    // renderCurrentPlayerDisplay();
  }

  populateGameboards();
  renderCurrentPlayerText(getCurrentPlayer());
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
  console.log(players);
  renderPlayerNames(players);
  renderCurrentPlayerText(getCurrentPlayer());
  renderCurrentPlayerDisplay();
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
  const currentPlayer = getCurrentPlayer();
  const currentPlayerBoardDiv = document.querySelector(
    `.${currentPlayer.name}-board`
  );
  currentPlayerBoardDiv.classList.add("half-opacity");

  // set players board eventListeners
  const nonCurrentPlayerBoard = [...getNonCurrentPlayerDomBoard()];
  const currentPlayerBoard = [...getCurrentPlayerDomBoard()];
  // set current players board unclickable
  currentPlayerBoard.forEach((div) => {
    div.removeEventListener("click", handleDivClick);
  });
  // set non current players board clickable
  nonCurrentPlayerBoard.forEach((div) => {
    div.addEventListener("click", handleDivClick);
  });
}

function renderPlayerBoard(player) {
  // if player is something other than human dont render
  if (player.type === "ai") return;

  const currentPlayer = player.player;
  const playerBoard = Array.from(player.board);

  //render currentcoords
  currentPlayer.gameboard.currentCoords.forEach((coord) => {
    const div = findCorrespondingDiv(coord, playerBoard);
    div.classList.add("ship");
  });

  //render successful hitshots
  currentPlayer.gameboard.hitShots.forEach((coord) => {
    const div = findCorrespondingDiv(coord, playerBoard);

    div.textContent = "❌";
    div.classList.add("hit");
    generateCoordNums(div);
    // prevent clicking the same coord again
    div.removeEventListener("click", handleDivClick);
  });

  //render missedshots
  currentPlayer.gameboard.missedShots.forEach((coord) => {
    const div = findCorrespondingDiv(coord, playerBoard);
    div.textContent = "🔘";
    div.classList.add("missed");
    generateCoordNums(div);
    // prevent clicking the same coord again
    div.removeEventListener("click", handleDivClick);
  });

  // //render surroundingCoords
  // currentPlayer.gameboard.surroundingCoords.forEach((coord) => {
  //   const div = findCorrespondingDiv(coord, playerBoard);
  //   div.textContent = "🔘";
  //   div.classList.add("missed");
  //   // prevent clicking the same coord again
  //   div.removeEventListener("click", handleDivClick);
  // });
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

function renderCurrentPlayerText(player) {
  const currentPlayerHeader = document.querySelector(".current-player-header");
  currentPlayerHeader.innerHTML = "";
  const header = createHeading(`${player.name} is attacking...`, "h1");

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

export { initDom, populateGameboards };
