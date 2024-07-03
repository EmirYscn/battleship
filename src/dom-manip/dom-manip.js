import { initPlayers } from "../game-logic/game-logic";

function initDom() {
  console.log("in initdom");
  populateBoard();
  populateGameboard();
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

function populateGameboard() {
  const boards = Array.from(document.querySelectorAll(".board"));

  const boardsChildNodes = [
    Array.from(boards[0].childNodes),
    Array.from(boards[1].childNodes),
  ];

  const [player1, player2] = initPlayers();

  const players = [
    { player: player1, board: boardsChildNodes[0] },
    { player: player2, board: boardsChildNodes[1] },
  ];

  players.forEach((player) => {
    renderPlayerBoard(player.player, player.board);
  });
}
function renderPlayerBoard(player, board) {
  const currentPlayer = player;
  const playerBoardsChildNodes = board;

  currentPlayer.gameboard.currentCoords.forEach((coord) => {
    const [x_coord, y_coord] = coord;
    console.log(x_coord, y_coord);
    const div = playerBoardsChildNodes.find((div) => {
      const row = parseInt(div.dataset.row);
      const column = parseInt(div.dataset.column);
      return row === x_coord && column === y_coord;
    });
    console.log(div);
    div.classList.add("ship");
  });
}

function createDiv(className) {
  const div = document.createElement("div");
  div.classList.add(className);
  return div;
}

export { initDom };
