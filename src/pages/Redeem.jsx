
// import { useState } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   CheckCircle2,
//   Coins,
//   Gift,
//   Gem,
//   Ticket,
//   Sparkles,
//   WalletCards,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// // import WalletBar from "../components/common/WalletBar";
// import InsufficientModal from "../components/game/InsufficientModal";
// import { useWallet } from "../context/GameCoinContext";

// import styles from "./Redeem.module.css";

// const rewards = [
//   {
//     id: "ve",
//     name: "VE",
//     cost: 50,
//     icon: Gift,
//     description: "Redeem VE rewards using your Game Coins.",
//   },
//   {
//     id: "sve",
//     name: "SVE",
//     cost: 100,
//     icon: Sparkles,
//     description: "Convert your Game Coins into SVE rewards.",
//   },
//   {
//     id: "gems",
//     name: "Gems",
//     cost: 150,
//     icon: Gem,
//     description: "Get Gems and unlock more rewards.",
//   },
//   {
//     id: "tokens",
//     name: "Tokens",
//     cost: 200,
//     icon: WalletCards,
//     description: "Redeem Tokens from your Game Coin balance.",
//   },
//   {
//     id: "spins",
//     name: "Spins",
//     cost: 250,
//     icon: Ticket,
//     description: "Use Game Coins to redeem Spins.",
//   },
// ];

// export default function Redeem() {
//   const { gameCoins, redeemGameCoins, addTokens } = useWallet();

//   const [message, setMessage] = useState("");
//   const [insufficient, setInsufficient] = useState(false);

//   const redeem = (reward) => {
//     if (!redeemGameCoins(reward.cost)) {
//       setInsufficient(true);
//       return;
//     }

//     if (reward.id === "tokens") {
//       addTokens(20);
//     }

//     setMessage(
//       `${reward.name} redemption confirmed for ${reward.cost} Game Coins.`
//     );
//   };

//   return (
//     <div className={styles.page}>
//       <WalletBar />

//       <main className={styles.main}>
//         {/* HEADER */}
//         <section className={styles.hero}>
//           <div className={styles.heroContent}>
//             <Link to="/games" className={styles.backLink}>
//               <ArrowLeft size={16} />
//               Back to Games
//             </Link>

//             <span className={styles.badge}>
//               <Gift size={14} />
//               REWARDS CENTER
//             </span>

//             <h1>
//               Redeem your
//               <br />
//               <strong>Game Coins.</strong>
//             </h1>

//             <p>
//               Use your Game Coins to redeem exciting rewards and
//               get more value from your gaming journey.
//             </p>
//           </div>

//           <div className={styles.heroDecoration}>
//             <div className={styles.glow} />
//             <div className={styles.coinLarge}>
//               <Coins size={58} />
//             </div>
//             <div className={styles.coinSmall}>
//               <Coins size={24} />
//             </div>
//           </div>
//         </section>

//         {/* BALANCE */}
//         <section className={styles.balanceSection}>
//           <div className={styles.balanceInfo}>
//             <div className={styles.balanceIcon}>
//               <Coins size={22} />
//             </div>

//             <div>
//               <span>AVAILABLE BALANCE</span>
//               <strong>{gameCoins}</strong>
//               <small>Game Coins</small>
//             </div>
//           </div>

//           <div className={styles.balanceHint}>
//             <span>Keep playing to earn more coins</span>
//           </div>
//         </section>

//         {/* REWARDS */}
//         <section className={styles.rewardsSection}>
//           <div className={styles.sectionHeader}>
//             <div>
//               <span>CHOOSE A REWARD</span>
//               <h2>Redeem Rewards</h2>
//             </div>

//             <div className={styles.rewardCount}>
//               {rewards.length} Rewards
//             </div>
//           </div>

//           <div className={styles.grid}>
//             {rewards.map((reward) => {
//               const Icon = reward.icon;
//               const canRedeem = gameCoins >= reward.cost;

//               return (
//                 <article
//                   key={reward.id}
//                   className={`${styles.rewardCard} ${
//                     canRedeem ? "" : styles.disabledCard
//                   }`}
//                 >
//                   <div className={styles.cardTop}>
//                     <div className={styles.rewardIcon}>
//                       <Icon size={27} />
//                     </div>

//                     {canRedeem && (
//                       <span className={styles.availableBadge}>
//                         Available
//                       </span>
//                     )}
//                   </div>

//                   <div className={styles.rewardInfo}>
//                     <h3>{reward.name}</h3>

//                     <p>{reward.description}</p>
//                   </div>

//                   <div className={styles.cardBottom}>
//                     <div className={styles.cost}>
//                       <Coins size={17} />
//                       <strong>{reward.cost}</strong>
//                       <span>Coins</span>
//                     </div>

//                     <button
//                       type="button"
//                       className={styles.redeemButton}
//                       onClick={() => redeem(reward)}
//                     >
//                       Redeem
//                       <ArrowRight size={16} />
//                     </button>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </section>

//         {/* SUCCESS MESSAGE */}
//         {message && (
//           <div className={styles.success}>
//             <div className={styles.successIcon}>
//               <CheckCircle2 size={21} />
//             </div>

//             <div>
//               <strong>Redemption Successful</strong>
//               <p>{message}</p>
//             </div>

//             <button
//               type="button"
//               className={styles.closeSuccess}
//               onClick={() => setMessage("")}
//               aria-label="Close message"
//             >
//               ×
//             </button>
//           </div>
//         )}

//         {/* FOOTER */}
//         <div className={styles.footer}>
//           <Link to="/games">
//             <ArrowLeft size={15} />
//             Continue Playing
//           </Link>
//         </div>

//         {insufficient && (
//           <InsufficientModal
//             type="coins"
//             onClose={() => setInsufficient(false)}
//           />
//         )}
//       </main>
//     </div>
//   );
// }




import { useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Coins,
  Gift,
  Gem,
  Ticket,
  Sparkles,
  WalletCards,
} from "lucide-react";

import { Link } from "react-router-dom";

import InsufficientModal from "../components/game/InsufficientModal";
import { useWallet } from "../context/GameCoinContext";

import styles from "./Redeem.module.css";

const rewards = [
  {
    id: "ve",
    name: "VE",
    cost: 50,
    icon: Gift,
    description: "Redeem VE rewards using your Game Coins.",
  },
  {
    id: "sve",
    name: "SVE",
    cost: 100,
    icon: Sparkles,
    description: "Convert your Game Coins into SVE rewards.",
  },
  {
    id: "gems",
    name: "Gems",
    cost: 150,
    icon: Gem,
    description: "Get Gems and unlock more rewards.",
  },
  {
    id: "tokens",
    name: "Tokens",
    cost: 200,
    icon: WalletCards,
    description: "Redeem Tokens from your Game Coin balance.",
  },
  {
    id: "spins",
    name: "Spins",
    cost: 250,
    icon: Ticket,
    description: "Use Game Coins to redeem Spins.",
  },
];

export default function Redeem() {
  const {
    gameCoins,
    redeemGameCoins,
    addTokens,
  } = useWallet();

  const [message, setMessage] = useState("");
  const [insufficient, setInsufficient] = useState(false);

  const redeem = (reward) => {
    if (!redeemGameCoins(reward.cost)) {
      setInsufficient(true);
      return;
    }

    if (reward.id === "tokens") {
      addTokens(20);
    }

    setMessage(
      `${reward.name} redemption confirmed for ${reward.cost} Game Coins.`
    );
  };

  return (
    <main className={styles.main}>

      {/* ================= HEADER ================= */}

      <section className={styles.hero}>

        <div className={styles.heroContent}>

          <Link
            to="/games"
            className={styles.backLink}
          >
            <ArrowLeft size={16} />
            Back to Games
          </Link>

          <span className={styles.badge}>
            <Gift size={14} />
            REWARDS CENTER
          </span>

          <h1>
            Redeem your
            <br />
            <strong>Game Coins.</strong>
          </h1>

          <p>
            Use your Game Coins to redeem exciting rewards and
            get more value from your gaming journey.
          </p>

        </div>

        <div className={styles.heroDecoration}>

          <div className={styles.glow} />

          <div className={styles.coinLarge}>
            <Coins size={58} />
          </div>

          <div className={styles.coinSmall}>
            <Coins size={24} />
          </div>

        </div>

      </section>

      {/* ================= BALANCE ================= */}

      <section className={styles.balanceSection}>

        <div className={styles.balanceInfo}>

          <div className={styles.balanceIcon}>
            <Coins size={22} />
          </div>

          <div>
            <span>AVAILABLE BALANCE</span>

            <strong>
              {gameCoins}
            </strong>

            <small>
              Game Coins
            </small>
          </div>

        </div>

        <div className={styles.balanceHint}>
          <span>
            Keep playing to earn more coins
          </span>
        </div>

      </section>

      {/* ================= REWARDS ================= */}

      <section className={styles.rewardsSection}>

        <div className={styles.sectionHeader}>

          <div>
            <span>
              CHOOSE A REWARD
            </span>

            <h2>
              Redeem Rewards
            </h2>
          </div>

          <div className={styles.rewardCount}>
            {rewards.length} Rewards
          </div>

        </div>

        <div className={styles.grid}>

          {rewards.map((reward) => {

            const Icon = reward.icon;

            const canRedeem =
              gameCoins >= reward.cost;

            return (
              <article
                key={reward.id}
                className={`${styles.rewardCard} ${
                  canRedeem
                    ? ""
                    : styles.disabledCard
                }`}
              >

                {/* CARD TOP */}

                <div className={styles.cardTop}>

                  <div className={styles.rewardIcon}>
                    <Icon size={27} />
                  </div>

                  {canRedeem && (
                    <span
                      className={
                        styles.availableBadge
                      }
                    >
                      Available
                    </span>
                  )}

                </div>

                {/* REWARD INFO */}

                <div className={styles.rewardInfo}>

                  <h3>
                    {reward.name}
                  </h3>

                  <p>
                    {reward.description}
                  </p>

                </div>

                {/* CARD BOTTOM */}

                <div className={styles.cardBottom}>

                  <div className={styles.cost}>

                    <Coins size={17} />

                    <strong>
                      {reward.cost}
                    </strong>

                    <span>
                      Coins
                    </span>

                  </div>

                  <button
                    type="button"
                    className={
                      styles.redeemButton
                    }
                    onClick={() =>
                      redeem(reward)
                    }
                  >
                    Redeem

                    <ArrowRight size={16} />
                  </button>

                </div>

              </article>
            );
          })}

        </div>

      </section>

      {/* ================= SUCCESS MESSAGE ================= */}

      {message && (
        <div className={styles.success}>

          <div className={styles.successIcon}>
            <CheckCircle2 size={21} />
          </div>

          <div>
            <strong>
              Redemption Successful
            </strong>

            <p>
              {message}
            </p>
          </div>

          <button
            type="button"
            className={styles.closeSuccess}
            onClick={() => setMessage("")}
            aria-label="Close message"
          >
            ×
          </button>

        </div>
      )}

      {/* ================= FOOTER ================= */}

      <div className={styles.footer}>

        <Link to="/games">

          <ArrowLeft size={15} />

          Continue Playing

        </Link>

      </div>

      {/* ================= INSUFFICIENT MODAL ================= */}

      {insufficient && (
        <InsufficientModal
          type="coins"
          onClose={() =>
            setInsufficient(false)
          }
        />
      )}

    </main>
  );
}