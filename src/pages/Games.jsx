// // import { Link } from "react-router-dom";
// // import WalletBar from "../components/common/WalletBar";
// // import GamesCarousel from "../components/games/GamesCarousel";
// // import { games } from "../data/gamesData";
// // import styles from "./Games.module.css";

// // export default function Games() {
// //   return <div><WalletBar/><main className={styles.main}>
// //     <section className={styles.hero}>
// //       <span>VELOOP GAMES</span><h1>Play. Challenge yourself. Earn Game Coins.</h1>
// //       <p>Explore all 13 games. Two games are fully playable in this assignment: Word Hunt and Merge Master.</p>
// //       <Link to="/games/redeem">View Redemption</Link>
// //     </section>
// //     <h2 className={styles.title}>All Games</h2>
// //     <GamesCarousel games={games}/>
// //     <p className={styles.note}>11 games are implemented as banner/card experiences only, as required. Word Hunt and Merge Master open their complete playable journeys.</p>
// //   </main></div>;
// // }





// import {
//   ArrowRight,
//   Coins,
//   Trophy,
//   ChevronRight,
//   Wallet,
//   Gift,
//   Headphones,
//   Gamepad2,
// } from "lucide-react";

// import { Link } from "react-router-dom";

// import WalletBar from "../components/common/WalletBar";
// import GamesCarousel from "../components/games/GamesCarousel";
// import { games } from "../data/gamesData";

// import styles from "./Games.module.css";

// export default function Games() {
//   return (
//     <div className={styles.page}>

//       {/* ================= TOP WALLET BAR ================= */}
//       <WalletBar />

//       {/* ================= HERO ================= */}
//       <main className={styles.container}>
//         <section className={styles.hero}>

//           <div className={styles.heroContent}>
//             <span className={styles.heroBadge}>
//               WELCOME BACK
//             </span>

//             <h1>
//               Play. Challenge yourself.
//               <br />
//               Earn <strong>Game Coins.</strong>
//             </h1>

//             <p>
//               Explore all 13 games. Two games are fully playable
//               in this assignment: Word Hunt and Merge Master.
//             </p>

//             <Link
//               to="/games/redeem"
//               className={styles.heroButton}
//             >
//               <Gift size={17} />
//               <span>View Redemption</span>
//               <ArrowRight size={16} />
//             </Link>
//           </div>

//           <div className={styles.heroVisual}>
//             <div
//               className={`${styles.orb} ${styles.orbOne}`}
//             />

//             <div
//               className={`${styles.orb} ${styles.orbTwo}`}
//             />

//             <div className={styles.gamepadGlow}>
//               <Gamepad2
//                 size={150}
//                 strokeWidth={1.2}
//               />
//             </div>
//           </div>

//         </section>

//         {/* ================= GAMES ================= */}
//         <section className={styles.gamesSection}>

//           <div className={styles.sectionHeader}>

//             <div>
//               <h2>All Games</h2>
//               <span className={styles.titleLine} />
//             </div>

//             <div className={styles.filters}>
//               <button
//                 type="button"
//                 className={styles.filterActive}
//               >
//                 All
//               </button>

//               <button type="button">
//                 Playable
//               </button>

//               <button type="button">
//                 Coming Soon
//               </button>
//             </div>

//           </div>

//           <GamesCarousel games={games} />

//         </section>

//         {/* ================= DASHBOARD ================= */}
//         <section className={styles.dashboardGrid}>

//           {/* WALLET */}
//           <div className={`${styles.panel} ${styles.walletPanel}`}>

//             <div className={styles.panelTitle}>
//               <Wallet size={18} />
//               <span>Your Wallet</span>
//             </div>

//             <div className={styles.walletContent}>

//               <div>
//                 <div className={styles.coinAmount}>
//                   <Coins size={30} />
//                   <strong>100</strong>
//                 </div>

//                 <p>Game Coins</p>

//                 <button
//                   type="button"
//                   className={styles.smallButton}
//                 >
//                   <span>View Wallet</span>
//                   <ArrowRight size={14} />
//                 </button>
//               </div>

//               <div className={styles.coinDecoration}>
//                 🪙
//               </div>

//             </div>

//           </div>

//           {/* LEADERBOARD */}
//           <div className={styles.panel}>

//             <div className={styles.panelTitle}>
//               <Trophy size={18} />
//               <span>Top Players</span>
//             </div>

//             <div className={styles.players}>

//               <div>
//                 <b>1</b>
//                 <span>AlexRanger</span>
//                 <strong>12,450</strong>
//               </div>

//               <div>
//                 <b>2</b>
//                 <span>GamePro</span>
//                 <strong>11,230</strong>
//               </div>

//               <div>
//                 <b>3</b>
//                 <span>PixelMaster</span>
//                 <strong>10,865</strong>
//               </div>

//             </div>

//             <button
//               type="button"
//               className={styles.smallButton}
//             >
//               <span>View Leaderboard</span>
//               <ArrowRight size={14} />
//             </button>

//           </div>

//           {/* QUICK LINKS */}
//           <div className={styles.panel}>

//             <div className={styles.panelTitle}>
//               <Gamepad2 size={18} />
//               <span>Quick Links</span>
//             </div>

//             <div className={styles.quickLinks}>

//               <div>
//                 <span>
//                   <Gamepad2 size={16} />
//                 </span>

//                 <span className={styles.linkText}>
//                   How to Play
//                 </span>

//                 <ChevronRight size={17} />
//               </div>

//               <div>
//                 <span>
//                   <Gift size={16} />
//                 </span>

//                 <span className={styles.linkText}>
//                   Redeem Rewards
//                 </span>

//                 <ChevronRight size={17} />
//               </div>

//               <div>
//                 <span>
//                   <Headphones size={16} />
//                 </span>

//                 <span className={styles.linkText}>
//                   Support
//                 </span>

//                 <ChevronRight size={17} />
//               </div>

//             </div>

//           </div>

//           {/* CTA */}
//           <div className={styles.ctaPanel}>

//             <div className={styles.ctaIcon}>
//               <Gamepad2 size={32} />
//             </div>

//             <div className={styles.ctaContent}>

//               <h3>
//                 Ready for the next
//                 <br />
//                 challenge?
//               </h3>

//               <p>
//                 Choose your favorite game
//                 and start playing now!
//               </p>

//               <Link to="/games">
//                 <span>Explore Games</span>
//                 <ArrowRight size={15} />
//               </Link>

//             </div>

//           </div>

//         </section>
//       </main>
//     </div>
//   );
// }





import { useEffect, useMemo, useState } from "react";

import {
  ArrowRight,
  Coins,
  Trophy,
  ChevronRight,
  Wallet,
  Gift,
  Headphones,
  Gamepad2,
} from "lucide-react";

import { Link } from "react-router-dom";

import GamesCarousel from "../components/games/GamesCarousel";
import { games } from "../data/gamesData";
import { useWallet } from "../context/GameCoinContext";

import styles from "./Games.module.css";

const SEARCH_EVENT = "veloop-game-search";

export default function Games() {
  const { gameCoins } = useWallet();

  const [searchText, setSearchText] = useState(() => {
    try {
      return sessionStorage.getItem(SEARCH_EVENT) || "";
    } catch {
      return "";
    }
  });

  /* =========================================================
     SEARCH LISTENER
     ========================================================= */

  useEffect(() => {
    const handleSearch = (event) => {
      const value = event?.detail ?? "";
      setSearchText(String(value));
    };

    window.addEventListener(
      SEARCH_EVENT,
      handleSearch
    );

    return () => {
      window.removeEventListener(
        SEARCH_EVENT,
        handleSearch
      );
    };
  }, []);

  /* =========================================================
     FILTER GAMES
     ========================================================= */

  const filteredGames = useMemo(() => {
    const query = searchText
      .trim()
      .toLowerCase();

    if (!query) {
      return games;
    }

    return games.filter((game) => {
      const name = String(
        game?.name || ""
      ).toLowerCase();

      const description = String(
        game?.description || ""
      ).toLowerCase();

      return (
        name.includes(query) ||
        description.includes(query)
      );
    });
  }, [searchText]);

  const hasSearch =
    searchText.trim().length > 0;

  return (
    <div className={styles.page}>

      {/* =====================================================
          MAIN CONTAINER
          ===================================================== */}

      <main className={styles.container}>

        {/* ===================================================
            HERO
            =================================================== */}

        <section className={styles.hero}>

          <div className={styles.heroContent}>

            <span className={styles.heroBadge}>
              WELCOME BACK
            </span>

            <h1>
              Play. Challenge yourself.
              <br />
              Earn <strong>Game Coins.</strong>
            </h1>

            <p>
              Explore all 13 games. Two games are fully playable
              in this assignment: Word Hunt and Merge Master.
            </p>

            <Link
              to="/games/redeem"
              className={styles.heroButton}
            >
              <Gift size={17} />

              <span>
                View Redemption
              </span>

              <ArrowRight size={16} />
            </Link>

          </div>

          {/* =================================================
              HERO VISUAL
              ================================================= */}

          <div className={styles.heroVisual}>

            <div
              className={`${styles.orb} ${styles.orbOne}`}
            />

            <div
              className={`${styles.orb} ${styles.orbTwo}`}
            />

            <div className={styles.gamepadGlow}>

              <Gamepad2
                size={150}
                strokeWidth={1.2}
              />

            </div>

          </div>

        </section>

        {/* ===================================================
            GAMES SECTION
            =================================================== */}

        <section className={styles.gamesSection}>

          <div className={styles.sectionHeader}>

            <div>

              <h2>
                {hasSearch
                  ? "Search Results"
                  : "All Games"}
              </h2>

              <span
                className={styles.titleLine}
              />

            </div>

            <div className={styles.filters}>

              <button
                type="button"
                className={styles.filterActive}
              >
                All
              </button>

              <button type="button">
                Playable
              </button>

              <button type="button">
                Coming Soon
              </button>

            </div>

          </div>

          {/* =================================================
              SEARCH RESULT COUNT
              ================================================= */}

          {hasSearch &&
            filteredGames.length > 0 && (
              <p
                className={
                  styles.searchResultText
                }
              >
                {filteredGames.length}{" "}

                {filteredGames.length === 1
                  ? "game"
                  : "games"}{" "}

                found for "
                {searchText.trim()}
                "
              </p>
            )}

          {/* =================================================
              GAME RESULTS
              ================================================= */}

          {filteredGames.length > 0 ? (

            <GamesCarousel
              games={filteredGames}
            />

          ) : (

            <div className={styles.noResults}>

              <div
                className={
                  styles.noResultsIcon
                }
              >
                <SearchIcon />
              </div>

              <h3>
                No games found
              </h3>

              <p>
                We couldn't find any game
                matching
                <strong>
                  {" "}
                  "{searchText.trim()}"
                </strong>.
              </p>

              <span>
                Try searching for Word Hunt,
                Merge Master, or another game.
              </span>

            </div>

          )}

        </section>

        {/* ===================================================
            DASHBOARD
            =================================================== */}

        <section
          className={styles.dashboardGrid}
        >

          {/* =================================================
              WALLET
              ================================================= */}

          <div
            className={`${styles.panel} ${styles.walletPanel}`}
          >

            <div className={styles.panelTitle}>

              <Wallet size={18} />

              <span>
                Your Wallet
              </span>

            </div>

            <div
              className={
                styles.walletContent
              }
            >

              <div>

                <div
                  className={
                    styles.coinAmount
                  }
                >

                  <Coins size={30} />

                  <strong>
                    {gameCoins}
                  </strong>

                </div>

                <p>
                  Game Coins
                </p>

                <Link
                  to="/games/redeem"
                  className={styles.smallButton}
                >
                  <span>
                    View Wallet
                  </span>

                  <ArrowRight size={14} />
                </Link>

              </div>

              <div
                className={
                  styles.coinDecoration
                }
              >
                🪙
              </div>

            </div>

          </div>

          {/* =================================================
              LEADERBOARD
              ================================================= */}

          <div className={styles.panel}>

            <div
              className={
                styles.panelTitle
              }
            >

              <Trophy size={18} />

              <span>
                Top Players
              </span>

            </div>

            <div
              className={styles.players}
            >

              <div>
                <b>1</b>
                <span>
                  AlexRanger
                </span>
                <strong>
                  12,450
                </strong>
              </div>

              <div>
                <b>2</b>
                <span>
                  GamePro
                </span>
                <strong>
                  11,230
                </strong>
              </div>

              <div>
                <b>3</b>
                <span>
                  PixelMaster
                </span>
                <strong>
                  10,865
                </strong>
              </div>

            </div>

            <button
              type="button"
              className={
                styles.smallButton
              }
            >
              <span>
                View Leaderboard
              </span>

              <ArrowRight size={14} />
            </button>

          </div>

          {/* =================================================
              QUICK LINKS
              ================================================= */}

          <div className={styles.panel}>

            <div
              className={
                styles.panelTitle
              }
            >

              <Gamepad2 size={18} />

              <span>
                Quick Links
              </span>

            </div>

            <div
              className={
                styles.quickLinks
              }
            >

              <div>

                <span>
                  <Gamepad2 size={16} />
                </span>

                <span
                  className={
                    styles.linkText
                  }
                >
                  How to Play
                </span>

                <ChevronRight size={17} />

              </div>

              <Link to="/games/redeem">

                <span>
                  <Gift size={16} />
                </span>

                <span
                  className={
                    styles.linkText
                  }
                >
                  Redeem Rewards
                </span>

                <ChevronRight size={17} />

              </Link>

              <div>

                <span>
                  <Headphones size={16} />
                </span>

                <span
                  className={
                    styles.linkText
                  }
                >
                  Support
                </span>

                <ChevronRight size={17} />

              </div>

            </div>

          </div>

          {/* =================================================
              CTA
              ================================================= */}

          <div
            className={styles.ctaPanel}
          >

            <div
              className={styles.ctaIcon}
            >
              <Gamepad2 size={32} />
            </div>

            <div
              className={styles.ctaContent}
            >

              <h3>
                Ready for the next
                <br />
                challenge?
              </h3>

              <p>
                Choose your favorite game
                and start playing now!
              </p>

              <Link to="/games">

                <span>
                  Explore Games
                </span>

                <ArrowRight size={15} />

              </Link>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}


/* =========================================================
   SEARCH ICON
   ========================================================= */

function SearchIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
      />

      <path d="m20 20-4-4" />
    </svg>
  );
}

