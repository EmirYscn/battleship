import "./styles.css";
import { initGame } from "./game-logic/game-logic";

// initGame("human", "human");
initGame({ type: "human", name: "player-1" }, { type: "ai", name: "player-2" });
