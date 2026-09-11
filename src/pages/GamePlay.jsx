// import { Link, useParams } from "react-router-dom";
// import WalletBar from "../components/common/WalletBar";
// import GameHeader from "../components/game/GameHeader";
// import WordHunt from "../games/WordHunt/WordHunt";
// import MergeMaster from "../games/MergeMaster/MergeMaster";
// import { games } from "../data/gamesData";
// import styles from "./GamePlay.module.css";

// export default function GamePlay() {
//   const { gameId } = useParams();
//   const game=games.find(g=>g.id===gameId);
//   if(!game?.playable) return <div><WalletBar/><main className={styles.empty}><h1>Game unavailable</h1><Link to="/games">Back</Link></main></div>;
//   return <div><WalletBar/><main className={styles.main}><GameHeader gameName={game.name}/>{gameId==="word-hunt" ? <WordHunt/> : <MergeMaster/>}</main></div>;
// }




import { Link, useParams } from "react-router-dom";
import WalletBar from "../components/common/WalletBar";
import GameHeader from "../components/game/GameHeader";
import WordHunt from "../games/WordHunt/WordHunt";
import MergeMaster from "../games/MergeMaster/MergeMaster";
import { games } from "../data/gamesData";
import styles from "./GamePlay.module.css";

export default function GamePlay() {
  const { gameId } = useParams();

  const game = games.find((g) => g.id === gameId);

  // Game unavailable
  if (!game?.playable) {
    return (
      <div className={styles.page}>
        <WalletBar />

        <main className={styles.empty}>
          <div className={styles.emptyCard}>
            <div className={styles.emptyIcon}>🎮</div>

            <span className={styles.emptyBadge}>GAME UNAVAILABLE</span>

            <h1>Game unavailable</h1>

            <p>
              This game is currently not available to play.
            </p>

            <Link to="/games" className={styles.backButton}>
              ← Back to Games
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <WalletBar />

      <main className={styles.main}>
        <div className={styles.gameContainer}>
          <GameHeader gameName={game.name} />

          <section className={styles.gameArea}>
            {gameId === "word-hunt" ? <WordHunt /> : <MergeMaster />}
          </section>
        </div>
      </main>
    </div>
  );
}