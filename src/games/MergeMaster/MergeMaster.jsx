import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import GameOver from "../../components/game/GameOver";
import InsufficientModal from "../../components/game/InsufficientModal";
import { useWallet } from "../../context/GameCoinContext";
import { ENTRY_COST } from "../../data/gamesData";
import styles from "./MergeMaster.module.css";

const SIZE = 4;
function emptyBoard() { return Array.from({length: SIZE}, () => Array(SIZE).fill(0)); }
function spawn(board) {
  const next = board.map(r => [...r]);
  const empty = [];
  next.forEach((r,i) => r.forEach((v,j) => { if (!v) empty.push([i,j]); }));
  if (!empty.length) return next;
  const [r,c] = empty[Math.floor(Math.random() * empty.length)];
  next[r][c] = Math.random() < .9 ? 2 : 4;
  return next;
}
function newBoard() { return spawn(spawn(emptyBoard())); }
function moveLine(line) {
  const compact = line.filter(Boolean);
  const out = []; let gain = 0;
  for (let i=0; i<compact.length; i++) {
    if (compact[i] === compact[i+1]) { const v = compact[i]*2; out.push(v); gain += v; i++; }
    else out.push(compact[i]);
  }
  while (out.length < SIZE) out.push(0);
  return { line: out, gain };
}
function move(board, dir) {
  let rotated = board.map(r => [...r]);
  if (dir === "up") rotated = board[0].map((_,c) => board.map(r => r[c]));
  if (dir === "down") rotated = board[0].map((_,c) => board.map(r => r[c]).reverse());
  if (dir === "right") rotated = board.map(r => [...r].reverse());
  let gain = 0;
  rotated = rotated.map(line => { const x=moveLine(line); gain += x.gain; return x.line; });
  let result = rotated;
  if (dir === "up") result = rotated[0].map((_,c) => rotated.map(r => r[c]));
  if (dir === "down") result = rotated[0].map((_,c) => rotated.map(r => r[c]).reverse());
  if (dir === "right") result = rotated.map(r => [...r].reverse());
  const changed = JSON.stringify(result) !== JSON.stringify(board);
  return { board: changed ? spawn(result) : board, gain, changed };
}
function canMove(board) {
  for (let r=0;r<SIZE;r++) for(let c=0;c<SIZE;c++){
    if(!board[r][c]) return true;
    if(c+1<SIZE && board[r][c]===board[r][c+1]) return true;
    if(r+1<SIZE && board[r][c]===board[r+1][c]) return true;
  }
  return false;
}

export default function MergeMaster() {
  const { tokens, deductTokens, addGameCoins } = useWallet();
  const [board,setBoard]=useState(newBoard);
  const [score,setScore]=useState(0);
  const [started,setStarted]=useState(false);
  const [gameOver,setGameOver]=useState(false);
  const [revived,setRevived]=useState(false);
  const [rewardAdded,setRewardAdded]=useState(false);
  const [insufficient,setInsufficient]=useState(false);

  const start=()=>{ if(!deductTokens(ENTRY_COST)){setInsufficient(true);return;} setBoard(newBoard());setScore(0);setStarted(true);setGameOver(false);setRevived(false);setRewardAdded(false); };
  const play=(dir)=>{
    if(!started || gameOver) return;
    const r=move(board,dir);
    if(!r.changed) { if(!canMove(board)) setGameOver(true); return; }
    setBoard(r.board); setScore(s=>s+r.gain);
    if(!canMove(r.board)) setGameOver(true);
  };
  useEffect(()=>{
    const key=(e)=>{const map={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down"}; if(map[e.key]){e.preventDefault();play(map[e.key]);}};
    window.addEventListener("keydown",key); return()=>window.removeEventListener("keydown",key);
  });
  const revive=()=>{if(!deductTokens(ENTRY_COST)){setInsufficient(true);return;}setGameOver(false);setRevived(true);setBoard(spawn(spawn(emptyBoard())));};
  const finish=()=>{if(!rewardAdded){addGameCoins(Math.max(5,Math.floor(score/20)));setRewardAdded(true);}};
  return <div className={styles.game}>
    <div className={styles.top}><div><span>Score</span><strong>{score}</strong></div><div><span>Best Tile</span><strong>{Math.max(...board.flat())}</strong></div></div>
    {!started ? <div className={styles.start}><h2>Merge Master</h2><p>Swipe or use the arrow keys to merge matching numbers.</p><button onClick={start}>Start for {ENTRY_COST} Tokens</button><small>Wallet: {tokens} Tokens</small></div> :
      rewardAdded ? <div className={styles.start}><h2>Reward added!</h2><p>Your Game Coins are now in the central wallet.</p><button onClick={()=>window.location.href="/games/merge-master"}>Back to Game Home</button></div> :
      <>
        <div className={styles.board}>{board.flatMap((row,r)=>row.map((v,c)=><div key={`${r}-${c}`} className={`${styles.tile} ${v ? styles[`v${Math.min(v,2048)}`] : ""}`}>{v || ""}</div>))}</div>
        <div className={styles.controls}>
          <button onClick={()=>play("up")} aria-label="Move up"><ArrowUp/></button>
          <div><button onClick={()=>play("left")} aria-label="Move left"><ArrowLeft/></button><button onClick={()=>play("down")} aria-label="Move down"><ArrowDown/></button><button onClick={()=>play("right")} aria-label="Move right"><ArrowRight/></button></div>
        </div>
        <p className={styles.help}>Use swipe on mobile or arrow keys on desktop.</p>
      </>
    }
    {gameOver && !rewardAdded && <GameOver score={score} coins={Math.max(5,Math.floor(score/20))} canRevive={!revived} onRevive={revive} onFinish={finish}/>}
    {insufficient && <InsufficientModal type="tokens" onClose={()=>setInsufficient(false)}/>}
  </div>;
}
