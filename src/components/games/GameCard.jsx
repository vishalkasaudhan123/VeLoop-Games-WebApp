
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

import PlayNowButton from "./PlayNowButton";
import styles from "./GameCard.module.css";

export default function GameCard({ game }) {
const navigate = useNavigate();

const handlePlay = () => {
if (game.playable) {
navigate(`/games/${game.id}`);
}
};

return ( <article className={styles.card}> <div className={styles.imageWrap}>
<img
src={game.image}
alt={`${game.name} game banner`}
loading="lazy"
/>

    <div className={styles.overlay} />

    {!game.playable && (
      <span className={styles.badge}>
        <Lock size={11} />

      </span>
    )}

    <div className={styles.content}>
      <span className={styles.category}>
        {game.category || "Arcade"}
      </span>

      <h2>{game.name}</h2>

      <PlayNowButton
        onClick={handlePlay}
        disabled={!game.playable}
      />
    </div>
  </div>
</article>


);
}
