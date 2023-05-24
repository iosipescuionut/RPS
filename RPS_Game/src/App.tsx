import "./App.css";
import Game from "./components/Game/Game";
import { GameProvider } from "./components/contexts/GameContext";

function App() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
}

export default App;
