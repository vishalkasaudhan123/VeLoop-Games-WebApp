import {
  Home,
  Gamepad2,
  Gift,
  Trophy,
  User,
  Settings,
  Coins,
  ArrowRight
} from "lucide-react";

import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const menuItems = [
  {
    label: "Home",
    icon: Home,
    path: "/games"
  },
  {
    label: "Games",
    icon: Gamepad2,
    path: "/games"
  },
  {
    label: "Redeem",
    icon: Gift,
    path: "/games/redeem"
  },
  {
    label: "Leaderboard",
    icon: Trophy,
    path: "#"
  },
  {
    label: "Profile",
    icon: User,
    path: "#"
  },
  {
    label: "Settings",
    icon: Settings,
    path: "#"
  }
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>ϟ</span>
        <span>
          VELOOP <b>GAMES</b>
        </span>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item) => {
          const Icon = item.icon;

          if (item.path === "#") {
            return (
              <button
                key={item.label}
                className={styles.navItem}
                type="button"
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          }

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `${styles.navItem} ${
                  isActive ? styles.active : ""
                }`
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className={styles.rewardBox}>
        <div className={styles.rewardGlow} />

        <div className={styles.rewardIcon}>
          <Coins size={28} />
        </div>

        <h3>Earn More Coins</h3>

        <p>
          Play games, complete tasks
          <br />
          and get rewarded!
        </p>

        <NavLink to="/games/redeem">
          View Rewards
          <ArrowRight size={15} />
        </NavLink>
      </div>
    </aside>
  );
}