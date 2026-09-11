import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Clock3 } from "lucide-react";
import GameOver from "../../components/game/GameOver";
import InsufficientModal from "../../components/game/InsufficientModal";
import { useWallet } from "../../context/GameCoinContext";
import { ENTRY_COST } from "../../data/gamesData";
import styles from "./WordHunt.module.css";

const WORDS = ["JAVA", "REACT", "SPRING", "MYSQL", "CODE"];
const GRID = [
  ["J","A","V","A","X","C"],
  ["R","E","A","C","T","O"],
  ["S","P","R","I","N","G"],
  ["M","Y","S","Q","L","D"],
  ["C","O","D","E","K","Z"],
  ["H","U","N","T","A","B"]
];

const PATHS = {
  JAVA: [[0,0],[0,1],[0,2],[0,3]],
  REACT: [[1,0],[1,1],[1,2],[1,3],[1,4]],
  SPRING: [[2,0],[2,1],[2,2],[2,3],[2,4],[2,5]],
  MYSQL: [[3,0],[3,1],[3,2],[3,3],[3,4]],
  CODE: [[4,0],[4,1],[4,2],[4,3]]
};

export default function WordHunt() {
  const { tokens, deductTokens, addTokens, addGameCoins } = useWallet();
  const [started, setStarted] = useState(false);
  const [seconds, setSeconds] = useState(45);
  const [found, setFound] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [revived, setRevived] = useState(false);
  const [insufficient, setInsufficient] = useState(false);
  const [rewardAdded, setRewardAdded] = useState(false);

  const selectedCells = useMemo(() => new Set(found.flatMap(w => PATHS[w].map(([r,c]) => `${r}-${c}`))), [found]);

  useEffect(() => {
    if (!started || gameOver) return;
    if (seconds <= 0) { setGameOver(true); return; }
    const id = setInterval(() => setSeconds(s => s - 1), 1000);
    return () => clearInterval(id);
  }, [started, gameOver, seconds]);

  // const start = () => {
  //   if (!deductTokens(ENTRY_COST)) { setInsufficient(true); return; }
  //   setStarted(true); setGameOver(false); setRewardAdded(false);
  // };

  const start = () => {
  console.log("TOKENS:", tokens);
  console.log("ENTRY COST:", ENTRY_COST);
  console.log("DEDUCT FUNCTION:", deductTokens);

  if (!deductTokens(ENTRY_COST)) {
    console.log("DEDUCTION FAILED");
    setInsufficient(true);
    return;
  }

  console.log("DEDUCTION SUCCESS");

  setStarted(true);
  setGameOver(false);
  setRewardAdded(false);
};

  const chooseWord = (word) => {
    if (!started || gameOver || found.includes(word)) return;
    setFound((current) => [...current, word]);
    setScore((s) => s + word.length * 10);
    if (found.length + 1 === WORDS.length) setGameOver(true);
  };

  const revive = () => {
    if (!deductTokens(ENTRY_COST)) { setInsufficient(true); return; }
    setSeconds(25);
    setGameOver(false);
    setRevived(true);
  };

  // const finish = () => {
  //   if (!rewardAdded) {
  //     const reward = Math.max(5, Math.floor(score / 10));
  //     addGameCoins(reward);
  //     setRewardAdded(true);
  //   }
  // };

  const finish = () => {
  const reward = Math.max(5, Math.floor(score / 10));

  console.log("FINISH CLICKED");
  console.log("Reward:", reward);
  console.log("Before adding:", tokens);

  if (!rewardAdded) {
    addGameCoins(reward);
    setRewardAdded(true);
  }
};

  return (
    <div className={styles.game}>
      <div className={styles.top}>
        <div><Clock3 size={17}/> {seconds}s</div>
        <div>Score <strong>{score}</strong></div>
        <div>{found.length}/{WORDS.length} found</div>
      </div>

      {!started ? (
        <div className={styles.start}>
          <h2>Word Hunt</h2>
          <p>Find every hidden word before time runs out.</p>
          <button onClick={start}>Start for {ENTRY_COST} Tokens</button>
          <small>Wallet: {tokens} Tokens</small>
        </div>
      ) : rewardAdded ? (
        <div className={styles.result}>
          <h2>Reward added!</h2>
          <p>Your Game Coins have been added to the central wallet.</p>
          <button onClick={() => window.location.href="/games/word-hunt"}>Back to Game Home</button>
        </div>
      ) : (
        <>
          <div className={styles.words}>{WORDS.map(w => <button key={w} className={found.includes(w) ? styles.found : ""} onClick={() => chooseWord(w)}>{w}{found.includes(w) && <CheckCircle2 size={15}/>}</button>)}</div>
          <div className={styles.grid} aria-label="Word Hunt grid">
            {GRID.flatMap((row,r) => row.map((letter,c) => <div key={`${r}-${c}`} className={selectedCells.has(`${r}-${c}`) ? styles.cellFound : styles.cell}>{letter}</div>))}
          </div>
          <p className={styles.help}>For this assignment demo, select a word from the target list to mark its supplied path as found.</p>
        </>
      )}

      {gameOver && !rewardAdded && (
        <GameOver
          score={score}
          coins={Math.max(5, Math.floor(score / 10))}
          canRevive={!revived}
          onRevive={revive}
          onFinish={finish}
        />
      )}
      {insufficient && <InsufficientModal type="tokens" onClose={() => setInsufficient(false)} />}
    </div>
  );
}
