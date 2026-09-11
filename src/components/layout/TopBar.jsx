// import {
//   Search,
//   Coins,
//   Gem,
//   Bell,
//   User
// } from "lucide-react";

// import { useWallet } from "../../context/GameCoinContext";
// import styles from "./TopBar.module.css";

// export default function TopBar() {
//   const { tokens, gameCoins } = useWallet();

//   return (
//     <header className={styles.header}>
//       <div className={styles.search}>
//         <Search size={19} />

//         <input
//           type="text"
//           placeholder="Search games..."
//         />
//       </div>

//       <div className={styles.actions}>
//         <div className={styles.balance}>
//           <Coins size={19} />
//           <span>{tokens}</span>
//         </div>

//         <div className={styles.balance}>
//           <Gem size={18} />
//           <span>{gameCoins}</span>
//         </div>

//         <button
//           className={styles.iconButton}
//           type="button"
//           aria-label="Notifications"
//         >
//           <Bell size={19} />
//           <span className={styles.notification} />
//         </button>

//         <button
//           className={styles.profile}
//           type="button"
//           aria-label="Profile"
//         >
//           <User size={19} />
//         </button>
//       </div>
//     </header>
//   );
// }




import { useEffect, useState } from "react";

import {
  Search,
  Coins,
  Gem,
  Bell,
  User,
  X,
} from "lucide-react";

import { useWallet } from "../../context/GameCoinContext";
import styles from "./TopBar.module.css";

const SEARCH_EVENT = "veloop-game-search";

export default function TopBar() {
  const { tokens, gameCoins } = useWallet();

  const [searchText, setSearchText] = useState(() => {
    return sessionStorage.getItem(SEARCH_EVENT) || "";
  });

  /* ================= SEARCH ================= */

  useEffect(() => {
    sessionStorage.setItem(
      SEARCH_EVENT,
      searchText
    );

    window.dispatchEvent(
      new CustomEvent(SEARCH_EVENT, {
        detail: searchText,
      })
    );
  }, [searchText]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return (
    <header className={styles.header}>

      {/* ================= SEARCH ================= */}

      <div className={styles.search}>

        <Search size={19} />

        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search games..."
          aria-label="Search games"
        />

        {searchText && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={clearSearch}
            aria-label="Clear search"
          >
            <X size={15} />
          </button>
        )}

      </div>

      {/* ================= ACTIONS ================= */}

      <div className={styles.actions}>

        {/* TOKENS */}

        <div className={styles.balance}>
          <Coins size={19} />
          <span>{tokens}</span>
        </div>

        {/* GAME COINS */}

        <div className={styles.balance}>
          <Gem size={18} />
          <span>{gameCoins}</span>
        </div>

        {/* NOTIFICATIONS */}

        <button
          className={styles.iconButton}
          type="button"
          aria-label="Notifications"
        >
          <Bell size={19} />

          <span className={styles.notification} />
        </button>

        {/* PROFILE */}

        <button
          className={styles.profile}
          type="button"
          aria-label="Profile"
        >
          <User size={19} />
        </button>

      </div>

    </header>
  );
}

