
import { useEffect, useRef, useState } from "react";

import {
  Search,
  Coins,
  Gem,
  Bell,
  User,
  X,
  Check,
  Trophy,
  Gamepad2,
  Settings,
  LogOut,
} from "lucide-react";

import { useWallet } from "../../context/GameCoinContext";
import styles from "./TopBar.module.css";

const SEARCH_EVENT = "veloop-game-search";

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    title: "Welcome to VELOOP Games!",
    message: "Start playing and earn Game Coins.",
    time: "Just now",
    read: false,
  },
  {
    id: 2,
    title: "Word Hunt is ready",
    message: "Play Word Hunt and test your skills.",
    time: "5 min ago",
    read: false,
  },
  {
    id: 3,
    title: "Daily Bonus",
    message: "Your daily bonus is available.",
    time: "1 hour ago",
    read: true,
  },
];

export default function TopBar() {
  const { tokens, gameCoins } = useWallet();

  /* ================= SEARCH STATE ================= */

  const [searchText, setSearchText] = useState(() => {
    return sessionStorage.getItem(SEARCH_EVENT) || "";
  });

  /* ================= NOTIFICATION STATE ================= */

  const [notifications, setNotifications] = useState(
    INITIAL_NOTIFICATIONS
  );

  const [showNotifications, setShowNotifications] =
    useState(false);

  /* ================= PROFILE STATE ================= */

  const [showProfile, setShowProfile] = useState(false);

  /* ================= REFS ================= */

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

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

  /* ================= NOTIFICATIONS ================= */

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const toggleNotifications = () => {
    setShowNotifications((previous) => !previous);
    setShowProfile(false);
  };

  const markAsRead = (id) => {
    setNotifications((previous) =>
      previous.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              read: true,
            }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((previous) =>
      previous.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  /* ================= PROFILE ================= */

  const toggleProfile = () => {
    setShowProfile((previous) => !previous);
    setShowNotifications(false);
  };

  /* ================= CLOSE OUTSIDE ================= */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

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

        {/* ================= NOTIFICATIONS ================= */}

        <div
          className={styles.notificationWrapper}
          ref={notificationRef}
        >
          <button
            className={styles.iconButton}
            type="button"
            aria-label="Notifications"
            onClick={toggleNotifications}
          >
            <Bell size={19} />

            {unreadCount > 0 && (
              <span className={styles.notification}>
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className={styles.notificationPanel}>

              {/* NOTIFICATION HEADER */}

              <div className={styles.notificationHeader}>
                <div>
                  <h3>Notifications</h3>

                  {unreadCount > 0 && (
                    <span>
                      {unreadCount} unread
                    </span>
                  )}
                </div>

                {unreadCount > 0 && (
                  <button
                    type="button"
                    className={styles.markAllButton}
                    onClick={markAllAsRead}
                  >
                    <Check size={14} />
                    Mark all read
                  </button>
                )}
              </div>

              {/* NOTIFICATION LIST */}

              <div className={styles.notificationList}>

                {notifications.length === 0 ? (
                  <div className={styles.emptyNotifications}>
                    <Bell size={28} />

                    <p>No notifications</p>

                    <span>
                      You're all caught up!
                    </span>
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <button
                      key={notification.id}
                      type="button"
                      className={`${styles.notificationItem} ${
                        !notification.read
                          ? styles.unread
                          : ""
                      }`}
                      onClick={() =>
                        markAsRead(notification.id)
                      }
                    >
                      <div
                        className={
                          styles.notificationIcon
                        }
                      >
                        <Bell size={16} />
                      </div>

                      <div
                        className={
                          styles.notificationContent
                        }
                      >
                        <strong>
                          {notification.title}
                        </strong>

                        <p>
                          {notification.message}
                        </p>

                        <span>
                          {notification.time}
                        </span>
                      </div>

                      {!notification.read && (
                        <span
                          className={
                            styles.unreadDot
                          }
                        />
                      )}
                    </button>
                  ))
                )}

              </div>
            </div>
          )}
        </div>

        {/* ================= PROFILE ================= */}

        <div
          className={styles.profileWrapper}
          ref={profileRef}
        >
          <button
            className={styles.profile}
            type="button"
            aria-label="Profile"
            onClick={toggleProfile}
          >
            <User size={19} />
          </button>

          {showProfile && (
            <div className={styles.profilePanel}>

              {/* PROFILE HEADER */}

              <div className={styles.profileHeader}>

                <div className={styles.profileAvatar}>
                  <User size={26} />
                </div>

                <div className={styles.profileInfo}>
                  <h3>VEloop Player</h3>
                  <span>Game Enthusiast</span>
                </div>

              </div>

              {/* BALANCE */}

              <div className={styles.profileBalance}>

                <div className={styles.profileBalanceItem}>
                  <Coins size={17} />

                  <div>
                    <span>Tokens</span>
                    <strong>{tokens}</strong>
                  </div>
                </div>

                <div className={styles.profileBalanceItem}>
                  <Gem size={17} />

                  <div>
                    <span>Game Coins</span>
                    <strong>{gameCoins}</strong>
                  </div>
                </div>

              </div>

              {/* STATS */}

              <div className={styles.profileStats}>

                <div>
                  <Gamepad2 size={18} />

                  <strong>2</strong>

                  <span>
                    Games Played
                  </span>
                </div>

                <div>
                  <Trophy size={18} />

                  <strong>0</strong>

                  <span>
                    Games Won
                  </span>
                </div>

              </div>

              {/* PROFILE MENU */}

              <div className={styles.profileMenu}>

                <button
                  type="button"
                  onClick={() => {
                    setShowProfile(false);
                  }}
                >
                  <Settings size={17} />
                  <span>Settings</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowProfile(false);
                  }}
                >
                  <LogOut size={17} />
                  <span>Logout</span>
                </button>

              </div>

            </div>
          )}
        </div>

      </div>
    </header>
  );
}

