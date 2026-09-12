import styles from "./PlayNowButton.module.css";

export default function PlayNowButton({ onClick, disabled }) {
return ( <button
   type="button"
   className={styles.button}
   onClick={onClick}
   disabled={disabled}
 >
{disabled ? "Coming Soon" : "Play Now →"} </button>
);
}
