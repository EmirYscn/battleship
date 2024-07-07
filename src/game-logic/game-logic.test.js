// game-logic.test.js
import {
  initGame,
  getPlayers,
  getGameState,
  changeCurrentPlayer,
  getCurrentPlayer,
  getOpposingPlayer,
} from "../game-logic/game-logic";
import { Player } from "../player/player-class";
import { initDom, populateGameboards } from "../dom-manip/dom-manip";

// Mock dependencies
jest.mock("../player/player-class", () => {
  return {
    Player: jest.fn().mockImplementation((type, name) => {
      return { type, name };
    }),
  };
});

jest.mock("../dom-manip/dom-manip", () => {
  return {
    initDom: jest.fn(),
    populateGameboards: jest.fn(),
  };
});

describe("Game Logic", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="current-player-header"></div>
      <div class="boards">
        <div class="player-1-container">
          <div class="player-1-text"></div>
          <div class="board player-1-board"></div>
        </div>
        <div class="player-2-container">
          <div class="player-2-text"></div>
          <div class="board player-2-board"></div>
        </div>
      </div>
    `;
  });

  it("should initialize players correctly", () => {
    const player1 = { type: "human", name: "Player 1" };
    const player2 = { type: "ai", name: "Player 2" };

    initGame(player1, player2);

    const players = getPlayers();
    expect(players).toHaveLength(2);
    expect(players[0].player.type).toBe("human");
    expect(players[0].player.name).toBe("Player 1");
    expect(players[1].player.type).toBe("ai");
    expect(players[1].player.name).toBe("Player 2");
  });

  it("should initialize game state correctly", () => {
    const player1 = { type: "human", name: "Player 1" };
    const player2 = { type: "ai", name: "Player 2" };

    initGame(player1, player2);

    const gameState = getGameState();
    expect(gameState.currentPlayer).toEqual(getPlayers()[0].player);
    expect(gameState.isFinished).toBe(false);
  });

  it("should change the current player correctly", () => {
    const player1 = { type: "human", name: "Player 1" };
    const player2 = { type: "ai", name: "Player 2" };

    initGame(player1, player2);

    const initialPlayer = getCurrentPlayer();
    changeCurrentPlayer();
    const newPlayer = getCurrentPlayer();
    expect(newPlayer).not.toEqual(initialPlayer);
  });

  it("should get the opposing player correctly", () => {
    const player1 = { type: "human", name: "Player 1" };
    const player2 = { type: "ai", name: "Player 2" };

    initGame(player1, player2);

    const currentPlayer = getCurrentPlayer();
    const opposingPlayer = getOpposingPlayer();
    expect(opposingPlayer).not.toEqual(currentPlayer);
  });

  it("should call initDom and populateGameboards when initializing the game", () => {
    const player1 = { type: "human", name: "Player 1" };
    const player2 = { type: "ai", name: "Player 2" };

    initGame(player1, player2);

    expect(initDom).toHaveBeenCalled();
    expect(populateGameboards).toHaveBeenCalled();
  });
});
