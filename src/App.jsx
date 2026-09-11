// import { Navigate, Route, Routes } from "react-router-dom";
// import Games from "./pages/Games";
// import GameHome from "./pages/GameHome";
// import GamePlay from "./pages/GamePlay";
// import Redeem from "./pages/Redeem";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/games" replace />} />
//       <Route path="/games" element={<Games />} />
//       <Route path="/games/:gameId" element={<GameHome />} />
//       <Route path="/games/:gameId/play" element={<GamePlay />} />
//       <Route path="/games/redeem" element={<Redeem />} />
//       <Route path="*" element={<Navigate to="/games" replace />} />
//     </Routes>
//   );
// }





import { Navigate, Route, Routes } from "react-router-dom";

import AppShell from "./components/layout/AppShell";

import Games from "./pages/Games";
import GameHome from "./pages/GameHome";
import GamePlay from "./pages/GamePlay";
import Redeem from "./pages/Redeem";

export default function App() {
  return (
    <Routes>

      <Route element={<AppShell />}>

        <Route
          path="/"
          element={
            <Navigate
              to="/games"
              replace
            />
          }
        />

        <Route
          path="/games"
          element={<Games />}
        />

        <Route
          path="/games/redeem"
          element={<Redeem />}
        />

        <Route
          path="/games/:gameId/play"
          element={<GamePlay />}
        />

        <Route
          path="/games/:gameId"
          element={<GameHome />}
        />

      </Route>

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