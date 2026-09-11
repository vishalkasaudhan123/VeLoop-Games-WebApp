import { ArrowRight } from "lucide-react";
import styles from "./PlayNowButton.module.css";

// export default function PlayNowButton({ onClick, disabled = false }) {
//   return (
//     <button className={styles.button} onClick={onClick} disabled={disabled}>
//       <span className={styles.shimmer} aria-hidden="true" />
//       <span>PLAY NOW</span>
//       <ArrowRight size={18} />
//     </button>
//   );
// }



export default function PlayNowButton({ onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? "Coming Soon" : "Play Now"}
    </button>
  );
}