import "./App.css";
import Game from "./components/Game/Game";
import { GameProvider } from "./components/contexts/GameContext";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState<boolean>(true);
  return (
    <GameProvider>
      {showModal ? <Modal setShowModal={setShowModal} /> : <Game />}
    </GameProvider>
  );
}

export default App;
