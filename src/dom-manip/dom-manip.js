function initDom() {
  console.log("in initdom");
  populateBoard();
}

function populateBoard() {
  console.log("in populateboard");
  const boards = document.querySelectorAll(".board");
  console.log(boards);

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

function createDiv(className) {
  const div = document.createElement("div");
  div.classList.add(className);
  return div;
}

export { initDom };
