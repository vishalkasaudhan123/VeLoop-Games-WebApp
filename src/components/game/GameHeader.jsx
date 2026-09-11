import { ArrowLeft, Coins } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWallet } from "../../context/GameCoinContext";
import styles from "./GameHeader.module.css";

export default function GameHeader({ gameName }) {
  const navigate = useNavigate();
  const { gameCoins } = useWallet();
  return (
    <header className={styles.header}>
      <button className={styles.back} onClick={() => navigate("/games")} aria-label="Back to games"><ArrowLeft size={20}/></button>
      <strong>{gameName}</strong>
      <div className={styles.coins}><Coins size={18}/> {gameCoins}</div>
    </header>
  );
}
