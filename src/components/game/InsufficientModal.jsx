import { Ticket } from "lucide-react";
import styles from "./InsufficientModal.module.css";

export default function InsufficientModal({ type, onClose }) {
  const token = type === "tokens";
  return (
    <div className={styles.overlay}>
      <div className={styles.modal} role="dialog" aria-modal="true">
        <Ticket size={30}/>
        <h2>{token ? "Not Enough Tokens" : "Not Enough Game Coins"}</h2>
        <p>{token ? "You need 20 Tokens to start or revive this game." : "You do not have enough Game Coins for this redemption."}</p>
        <button onClick={onClose}>Okay</button>
      </div>
    </div>
  );
}
