
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

import styles from "./AppShell.module.css";

export default function AppShell() {
  return (
    <div className={styles.app}>

      {/* LEFT SIDEBAR */}

      <Sidebar />

      {/* MAIN CONTENT */}

      <div className={styles.content}>

        {/* TOP BAR */}

        <TopBar />

        {/* PAGE CONTENT */}

        <main className={styles.main}>
          <Outlet />
        </main>

      </div>

    </div>
  );
}