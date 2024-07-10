import "./styles.css";
import { initGame } from "./game-logic/game-logic";

// initGame("human", "human");
initGame(
  { type: "human", name: "player-1" },
  { type: "human", name: "player-2" }
);
