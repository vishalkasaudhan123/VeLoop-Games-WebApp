
import { Navigate, Route, Routes } from "react-router-dom";

import AppShell from "./components/layout/AppShell";

import Games from "./pages/Games";
import GameHome from "./pages/GameHome";
import GamePlay from "./pages/GamePlay";
import Redeem from "./pages/Redeem";
import Leaderboard from "./pages/Leaderboard";

function Profile() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Profile</h1>
      <p>Welcome to your VELOOP Games profile.</p>
    </div>
  );
}

function Settings() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Settings</h1>
      <p>Manage your VELOOP Games settings here.</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>

      <Route element={<AppShell />}>

        {/* HOME */}

        <Route
          path="/"
          element={
            <Navigate
              to="/games"
              replace
            />
          }
        />

        {/* GAMES */}

        <Route
          path="/games"
          element={<Games />}
        />

        {/* REDEEM */}

        <Route
          path="/games/redeem"
          element={<Redeem />}
        />

        {/* GAME PLAY */}

        <Route
          path="/games/:gameId/play"
          element={<GamePlay />}
        />

        {/* GAME HOME */}

        <Route
          path="/games/:gameId"
          element={<GameHome />}
        />

        {/* LEADERBOARD */}

        <Route
          path="/leaderboard"
          element={<Leaderboard />}
        />

        {/* PROFILE */}

        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* SETTINGS */}

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Route>

      {/* INVALID ROUTE */}

      <Route
        path="*"
        element={
          <Navigate
            to="/games"
            replace
          />
        }
      />

    </Routes>
  );
} 