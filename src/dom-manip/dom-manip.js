import {
  getPlayers,
  getGameState,
  changeCurrentPlayer,
  getCurrentPlayer,
  getOpposingPlayer,
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
        board.appendChild(div);

        div.addEventListener("click", handleDivClick);
      }
    }
  });
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
    renderCurrentPlayerDisplay();
  }

  populateGameboards();
  renderCurrentPlayerText(getCurrentPlayer());
}

function hitShip(player) {
  const playerDataset = { ...player };

  const currentPlayer = getPlayers()[parseInt(playerDataset.player)];
  const playerGameboard = currentPlayer.player.gameboard;

  const x_coord = parseInt(playerDataset.row);
  const y_coord = parseInt(playerDataset.column);
  const coord = [x_coord, y_coord];
  return playerGameboard.receiveAttack(coord);
}

function populateGameboards() {
  const players = getPlayers();
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
    // prevent clicking the same coord again
    div.removeEventListener("click", handleDivClick);
  });

  //render missedshots
  currentPlayer.gameboard.missedShots.forEach((coord) => {
    const div = findCorrespondingDiv(coord, playerBoard);
    div.textContent = "🔘";
    div.classList.add("missed");
    // prevent clicking the same coord again
    div.removeEventListener("click", handleDivClick);
  });
}

function findCorrespondingDiv(coord, board) {
  const [x_coord, y_coord] = coord;

  const div = board.find((div) => {
    const row = parseInt(div.dataset.row);
    const column = parseInt(div.dataset.column);
    return row === x_coord && column === y_coord;
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

function createDiv(className) {
  const div = document.createElement("div");
  div.classList.add(className);
  return div;
}

export { initDom, populateGameboards };
