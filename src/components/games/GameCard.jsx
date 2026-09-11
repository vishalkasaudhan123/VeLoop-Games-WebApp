import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import PlayNowButton from "./PlayNowButton";
import styles from "./GameCard.module.css";

export default function GameCard({ game }) {
  const navigate = useNavigate();
  const go = () => {
    if (game.playable) navigate(`/games/${game.id}`);
  };
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={game.image} alt={`${game.name} game banner`} loading="lazy" />
        {!game.playable && <span className={styles.badge}><Lock size={13}/> Banner only</span>}
      </div>
      <div className={styles.body}>
        <h2>{game.name}</h2>
        <p>{game.description}</p>
        <PlayNowButton onClick={go} disabled={!game.playable} />
      </div>
    </article>
  );
}
