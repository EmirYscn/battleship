import { getPlayers } from "../game-logic/game-logic";

function initDom() {
  populateBoard();
}

function populateBoard() {
  console.log("in populateboard");
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

        div.addEventListener("click", (e) => {
          if (hitShip(e.target.dataset)) {
            // DO SOMETHING IF ALL SHIP SUNK
          } else {
            populateGameboards(getPlayers());
          }
        });
      }
    }
  });
}

function hitShip(player) {
  const playerDataset = { ...player };

  const currentPlayer = getPlayers()[parseInt(playerDataset.player)];
  const playerGameboard = currentPlayer.player.gameboard;

  const x_coord = parseInt(playerDataset.row);
  const y_coord = parseInt(playerDataset.column);
  const coord = [x_coord, y_coord];
  console.log(coord);
  playerGameboard.receiveAttack(coord);
  console.log(playerGameboard);
  return playerGameboard.hasAllShipsBeenSunk();
}

function populateGameboards(players) {
  renderPlayerNames(players);
  players.forEach((player) => {
    renderPlayerBoard(player.player, player.board);
  });
}
function renderPlayerBoard(player, board) {
  // if ai dont render
  if (player.type === "ai") return;

  const currentPlayer = player;
  const playerBoardsChildNodes = Array.from(board);

  //render currentcoords
  currentPlayer.gameboard.currentCoords.forEach((coord) => {
    const [x_coord, y_coord] = coord;
    const div = playerBoardsChildNodes.find((div) => {
      const row = parseInt(div.dataset.row);
      const column = parseInt(div.dataset.column);
      return row === x_coord && column === y_coord;
    });
    div.classList.add("ship");
  });

  //render successful hitshots
  currentPlayer.gameboard.hitShots.forEach((coord) => {
    const [x_coord, y_coord] = coord;
    const div = playerBoardsChildNodes.find((div) => {
      const row = parseInt(div.dataset.row);
      const column = parseInt(div.dataset.column);
      return row === x_coord && column === y_coord;
    });
    div.classList.add("hit");
  });

  //render missedshots
  currentPlayer.gameboard.missedShots.forEach((coord) => {
    const [x_coord, y_coord] = coord;
    const div = playerBoardsChildNodes.find((div) => {
      const row = parseInt(div.dataset.row);
      const column = parseInt(div.dataset.column);
      return row === x_coord && column === y_coord;
    });
    div.classList.add("missed");
  });
}

function renderPlayerNames(players) {
  const player1Div = document.querySelector(".player-1-text");
  const player2Div = document.querySelector(".player-2-text");

  player1Div.textContent = "";
  player2Div.textContent = "";

  player1Div.appendChild(createHeading(`${players[0].player.type}`));
  player2Div.appendChild(createHeading(`${players[1].player.type}`));
}

function createHeading(text) {
  const h1 = document.createElement("h1");
  h1.textContent = text;

  return h1;
}

function createDiv(className) {
  const div = document.createElement("div");
  div.classList.add(className);
  return div;
}

export { initDom, populateGameboards };
