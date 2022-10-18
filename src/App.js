import { Routes, Route } from "react-router-dom";

import "./App.css";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import StartPage from "./Components/StartPage/StartPage";
import Level from "./Components/Level/Level";
import GameWinner from "./Components/GameWinner/GameWinner";
import GameLose from "./Components/GameLose/GameLose";
import MyContext from "./Components/Context/Context";

function App() {
  return (
    <MyContext>
      <Routes>
        <Route index path="/" element={<StartPage />}/>
        <Route path="level" element={<Level />}/>
        <Route path="gameWinner" element={<GameWinner />}/>
        <Route path="gameLose" element={<GameLose />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </MyContext>
  );
}

export default App;