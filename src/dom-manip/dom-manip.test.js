/**
 * @jest-environment jsdom
 */

import { initDom, populateGameboards } from "../dom-manip/dom-manip";
import {
  getPlayers,
  getGameState,
  changeCurrentPlayer,
  getCurrentPlayer,
  getOpposingPlayer,
} from "../game-logic/game-logic";

// Mock the game-logic functions
jest.mock("../game-logic/game-logic");

describe.skip("DOM Manipulation", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="current-player-header"></div>
      <div class="boards">
        <div class="player-1-container">
          <div class="player-1-text"></div>
          <div class="board player1-board"></div>
        </div>
        <div class="player-2-container">
          <div class="player-2-text"></div>
          <div class="board player2-board"></div>
        </div>
      </div>
    `;
    getPlayers.mockReturnValue([
      {
        player: {
          name: "Player1",
          gameboard: { currentCoords: [], hitShots: [], missedShots: [] },
        },
        board: Array.from({ length: 100 }, (_, i) => createDiv("box")),
      },
      {
        player: {
          name: "Player2",
          gameboard: { currentCoords: [], hitShots: [], missedShots: [] },
        },
        board: Array.from({ length: 100 }, (_, i) => createDiv("box")),
      },
    ]);
    getCurrentPlayer.mockReturnValue({ name: "Player1" });
  });

  function createDiv(className) {
    const div = document.createElement("div");
    div.classList.add(className);
    return div;
  }

  it("should initialize the DOM correctly", () => {
    initDom();
    const boards = document.querySelectorAll(".board .box");
    expect(boards.length).toBe(200); // 100 boxes per board, 2 boards
  });

  it("should render player names correctly", () => {
    populateGameboards();
    const player1Text = document.querySelector(".player-1-text").textContent;
    const player2Text = document.querySelector(".player-2-text").textContent;

    expect(player1Text).toBe("Player1");
    expect(player2Text).toBe("Player2");
  });

  it("should render current player text correctly", () => {
    populateGameboards();
    const currentPlayerHeader = document.querySelector(
      ".current-player-header"
    ).textContent;

    expect(currentPlayerHeader).toBe("Player1 is attacking...");
  });

  it("should handle board clicks correctly", () => {
    document.body.innerHTML = `
      <div class="board player1-board"></div>
    `;
    const box = document.createElement("div");
    box.classList.add("box");
    box.dataset.row = "0";
    box.dataset.column = "0";
    box.dataset.player = "0";
    document.querySelector(".player1-board").appendChild(box);

    hitShip.mockReturnValue(false);
    const handleClick = new Event("click");
    box.dispatchEvent(handleClick);

    expect(changeCurrentPlayer).toHaveBeenCalled();
  });

  it("should change the current player correctly on missed shot", () => {
    hitShip.mockReturnValue(false);
    const e = { target: { dataset: { player: "0", row: "0", column: "0" } } };
    handleDivClick(e);

    expect(changeCurrentPlayer).toHaveBeenCalled();
  });

  it("should render the board with ships, hits, and misses correctly", () => {
    const players = getPlayers();
    players[0].player.gameboard.currentCoords = [[0, 0]];
    players[0].player.gameboard.hitShots = [[0, 1]];
    players[0].player.gameboard.missedShots = [[0, 2]];

    populateGameboards();

    const shipDiv = document.querySelector(
      ".player1-board .box[data-row='0'][data-column='0']"
    );
    const hitDiv = document.querySelector(
      ".player1-board .box[data-row='0'][data-column='1']"
    );
    const missedDiv = document.querySelector(
      ".player1-board .box[data-row='0'][data-column='2']"
    );

    expect(shipDiv.classList.contains("ship")).toBe(true);
    expect(hitDiv.classList.contains("hit")).toBe(true);
    expect(hitDiv.textContent).toBe("❌");
    expect(missedDiv.classList.contains("missed")).toBe(true);
    expect(missedDiv.textContent).toBe("🔘");
  });
});
