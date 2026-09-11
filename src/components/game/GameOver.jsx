import { Coins, RotateCcw } from "lucide-react";
import styles from "./GameOver.module.css";

export default function GameOver({ score, coins, canRevive, onRevive, onFinish }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="game-over-title">
        <h2 id="game-over-title">Game Over</h2>
        <p className={styles.score}>Score: <strong>{score}</strong></p>
        <p>You earned <strong>{coins}</strong> Game Coins.</p>
        {canRevive && <button className={styles.secondary} onClick={onRevive}><RotateCcw size={17}/> Revive for 20 Tokens</button>}
        <button className={styles.primary} onClick={onFinish}><Coins size={17}/> No Thanks — Collect Reward</button>
      </div>
    </div>
  );
}
