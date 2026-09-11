import { Link, useNavigate, useParams } from "react-router-dom";
import WalletBar from "../components/common/WalletBar";
import GameHeader from "../components/game/GameHeader";
import GameGuide from "../components/game/GameGuide";
import PlayNowButton from "../components/games/PlayNowButton";
import { games, ENTRY_COST } from "../data/gamesData";
import styles from "./GameHome.module.css";

const guides = {
  "word-hunt": { steps:["Find all target words before the 45-second timer ends.","Each found word adds points.","If the game ends, you can revive once for 20 Tokens."], reward:"Score ÷ 10 Game Coins, minimum 5." },
  "merge-master": { steps:["Start with two tiles on a 4×4 board.","Swipe or use arrow keys to merge matching numbers.","When no valid moves remain, the game ends. Revive once for 20 Tokens."], reward:"Score ÷ 20 Game Coins, minimum 5." }
};

export default function GameHome() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = games.find(g=>g.id===gameId);
  if(!game || !game.playable) return <div><WalletBar/><main className={styles.notFound}><h1>Game not available</h1><p>This banner is not one of the two fully playable games.</p><Link to="/games">Back to Games</Link></main></div>;
  const guide=guides[gameId];
  return <div><WalletBar/><main className={styles.main}><GameHeader gameName={game.name}/>
    <section className={styles.hero}>
      <div className={styles.art}><img src={game.image} alt={`${game.name} banner`}/></div>
      <div className={styles.info}><span className={styles.pill}>ENTRY: {ENTRY_COST} TOKENS</span><h1>{game.name}</h1><p>{game.description}</p><PlayNowButton onClick={()=>navigate(`/games/${game.id}/play`)}/><p className={styles.balance}>20 Tokens are deducted before gameplay starts. Your Game Coins remain centralized.</p></div>
    </section>
    <GameGuide title="How to play" steps={guide.steps} reward={guide.reward}/>
    <nav className={styles.bottom}><Link to="/games">Home</Link><Link to="/games/redeem">Redeem</Link></nav>
  </main></div>;
}
