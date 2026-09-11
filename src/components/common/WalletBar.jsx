// ```jsx
// import { Coins, Gem, Home, Ticket } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useWallet } from "../../context/GameCoinContext";
// import styles from "./WalletBar.module.css";

// export default function WalletBar() {
//   const { tokens, gameCoins } = useWallet();

//   return (
//     <div className={styles.bar}>
//       <Link to="/games" className={styles.brand}>
//         VELOOP <span>GAMES</span>
//       </Link>

//       <div className={styles.wallet}>
//         <span title="Tokens">
//           <Ticket size={16} />
//           {tokens}
//         </span>

//         <span title="Game Coins">
//           <Coins size={16} />
//           {gameCoins}
//         </span>

//         <Link
//           to="/games/redeem"
//           aria-label="Redeem Game Coins"
//         >
//           <Gem size={17} />
//         </Link>

//         <Link
//           to="/games"
//           aria-label="Games home"
//         >
//           <Home size={17} />
//         </Link>
//       </div>
//     </div>
//   );
// }
// ```



import { Coins, Gem, Home, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { useWallet } from "../../context/GameCoinContext";
import styles from "./WalletBar.module.css";

export default function WalletBar() {
  const { tokens, gameCoins } = useWallet();

  return (
    <div className={styles.bar}>
      <Link to="/games" className={styles.brand}>
        VELOOP <span>GAMES</span>
      </Link>

      <div className={styles.wallet}>
        <span title="Tokens">
          <Ticket size={16} />
          {tokens}
        </span>

        <span title="Game Coins">
          <Coins size={16} />
          {gameCoins}
        </span>

        <Link to="/games/redeem" aria-label="Redeem Game Coins">
          <Gem size={17} />
        </Link>

        <Link to="/games" aria-label="Games home">
          <Home size={17} />
        </Link>
      </div>
    </div>
  );
}