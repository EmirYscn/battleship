import { getPlayers } from "../game-logic/game-logic";

function initDom() {
  populateBoard();
}

function populateBoard() {
  console.log("in populateboard");
  const boards = document.querySelectorAll(".board");

  boards.forEach((board) => {
    for (let i = 0; i < 10; i++) {
      const rowIndex = i;
      for (let j = 0; j < 10; j++) {
        const columnIndex = j;
        const div = createDiv("box");

        div.dataset.row = rowIndex;
        div.dataset.column = columnIndex;

        board.appendChild(div);
      }
    }
  });
}

function populateGameboards(players) {
  renderPlayerNames(players);
  players.forEach((player) => {
    renderPlayerBoard(player.player, player.board);
  });
}
function renderPlayerBoard(player, board) {
  console.log("in render");
  if (player.type === "ai") return;

  const currentPlayer = player;
  const playerBoardsChildNodes = Array.from(board);

  currentPlayer.gameboard.currentCoords.forEach((coord) => {
    const [x_coord, y_coord] = coord;
    console.log(x_coord, y_coord);
    const div = playerBoardsChildNodes.find((div) => {
      const row = parseInt(div.dataset.row);
      const column = parseInt(div.dataset.column);
      return row === x_coord && column === y_coord;
    });

    div.classList.add("ship");
  });
}

function renderPlayerNames(players) {
  const player1Div = document.querySelector(".player-1-text");
  console.log(players);
  player1Div.appendChild(createHeading(`${players[0].player.type}`));
  const player2Div = document.querySelector(".player-2-text");
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
