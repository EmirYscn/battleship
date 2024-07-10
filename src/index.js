import "./styles.css";
import { initGame } from "./game-logic/game-logic";
import { initButtons } from "./dom-manip/dom-buttons";

// initGame("human", "human");
initGame(
  { type: "human", name: "player-1" },
  { type: "human", name: "player-2" }
);
initButtons();
