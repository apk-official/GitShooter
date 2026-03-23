import AppLayout from "./layout/AppLayout";
import { Routes, Route, Navigate } from "react-router";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Game from "./Pages/Game";
import GameOver from "./Pages/GameOver";
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="search" element={<Search />} />
        <Route path="game" element={<Game />} />
        <Route path="game-over" element={<GameOver />} />
      </Route>
    </Routes>
  );
}

export default App;
