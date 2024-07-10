import { getPlayers, reInitPlayer, initGame } from "../game-logic/game-logic";
import {
  populateGameboards,
  renderGameboardData,
  setBeforeGameState,
  startGame,
} from "./dom-manip";

function initButtons() {
  setRandomButton();
  startButton();
}
function setRandomButton() {
  const buttonContainer = document.querySelector(".buttons");

  const btn = document.createElement("button");
  btn.textContent = "Randomise 🔄";
  btn.classList.add("btn");
  btn.classList.add("random-btn");

  const player = getPlayers()[0];
  const currentPlayer = player.player;

  btn.addEventListener("click", () => {
    reInitPlayer("human", "player-1");
  });
  buttonContainer.appendChild(btn);
}

function startButton() {
  const buttonContainer = document.querySelector(".buttons");
  const randomBtn = document.querySelector(".random-btn");
  const btn = document.createElement("button");
  btn.textContent = "Start";
  btn.classList.add("btn");
  btn.classList.add("start-btn");

  btn.addEventListener("click", () => {
    // start the game TODO
    startGame();
    btn.remove();
    randomBtn.remove();
    buttonContainer.classList.add("hidden");
  });

  buttonContainer.appendChild(btn);
}

function playAgain() {
  const buttonContainer = document.querySelector(".buttons");

  const btn = document.createElement("button");
  btn.textContent = "Play Again";
  btn.classList.add("btn");
  btn.classList.add("play-again-btn");

  btn.addEventListener("click", () => {
    initGame(
      { type: "human", name: "player-1" },
      { type: "human", name: "player-2" }
    );
    btn.remove();
    initButtons();
  });

  buttonContainer.appendChild(btn);
  buttonContainer.classList.remove("hidden");
}

export { initButtons, playAgain };
