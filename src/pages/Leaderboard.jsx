import {
  Trophy,
  Medal,
  Crown,
  Gamepad2,
  Coins,
} from "lucide-react";

import styles from "./Leaderboard.module.css";

const leaderboardData = [
  {
    rank: 1,
    name: "GameMaster",
    gamesPlayed: 28,
    gameCoins: 1250,
  },
  {
    rank: 2,
    name: "ProGamer",
    gamesPlayed: 24,
    gameCoins: 1080,
  },
  {
    rank: 3,
    name: "WordWizard",
    gamesPlayed: 21,
    gameCoins: 920,
  },
  {
    rank: 4,
    name: "PlayerOne",
    gamesPlayed: 18,
    gameCoins: 780,
  },
  {
    rank: 5,
    name: "GameKing",
    gamesPlayed: 16,
    gameCoins: 690,
  },
  {
    rank: 6,
    name: "SmartPlayer",
    gamesPlayed: 14,
    gameCoins: 610,
  },
  {
    rank: 7,
    name: "Champion",
    gamesPlayed: 12,
    gameCoins: 540,
  },
  {
    rank: 8,
    name: "LuckyPlayer",
    gamesPlayed: 10,
    gameCoins: 460,
  },
  {
    rank: 9,
    name: "QuickMind",
    gamesPlayed: 9,
    gameCoins: 390,
  },
  {
    rank: 10,
    name: "NewPlayer",
    gamesPlayed: 7,
    gameCoins: 300,
  },
];

export default function Leaderboard() {
  return (
    <main className={styles.page}>

      {/* HEADER */}

      <section className={styles.header}>
        <div className={styles.icon}>
          <Trophy size={28} />
        </div>

        <div>
          <h1>Leaderboard</h1>
          <p>Top players and their achievements</p>
        </div>
      </section>

      {/* TOP 3 */}

      <section className={styles.topPlayers}>

        {leaderboardData.slice(0, 3).map((player) => (
          <div
            key={player.rank}
            className={`${styles.topCard} ${
              player.rank === 1
                ? styles.first
                : player.rank === 2
                ? styles.second
                : styles.third
            }`}
          >

            <div className={styles.rankIcon}>
              {player.rank === 1 ? (
                <Crown size={24} />
              ) : (
                <Medal size={24} />
              )}
            </div>

            <div className={styles.avatar}>
              {player.name.charAt(0)}
            </div>

            <h2>{player.name}</h2>

            <div className={styles.coins}>
              <Coins size={16} />
              {player.gameCoins} Game Coins
            </div>

            <span className={styles.rank}>
              #{player.rank}
            </span>

          </div>
        ))}

      </section>

      {/* LEADERBOARD TABLE */}

      <section className={styles.tableCard}>

        <div className={styles.tableHeader}>
          <div>Rank</div>
          <div>Player</div>
          <div>Games Played</div>
          <div>Game Coins</div>
        </div>

        {leaderboardData.map((player) => (
          <div
            key={player.rank}
            className={styles.row}
          >

            <div className={styles.rankNumber}>
              {player.rank <= 3 ? (
                <Medal size={18} />
              ) : (
                player.rank
              )}
            </div>

            <div className={styles.player}>
              <div className={styles.smallAvatar}>
                {player.name.charAt(0)}
              </div>

              <span>{player.name}</span>
            </div>

            <div className={styles.games}>
              <Gamepad2 size={16} />
              {player.gamesPlayed}
            </div>

            <div className={styles.gameCoins}>
              <Coins size={16} />
              {player.gameCoins}
            </div>

          </div>
        ))}

      </section>

    </main>
  );
}