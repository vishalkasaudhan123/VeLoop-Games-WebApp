
import { useEffect, useRef, useState } from "react";

import GameCard from "./GameCard";
import styles from "./GamesCarousel.module.css";

export default function GamesCarousel({ games = [] }) {
  const viewportRef = useRef(null);

  const [paused, setPaused] = useState(false);
  const [page, setPage] = useState(0);

  const safeGames = Array.isArray(games) ? games : [];

  /* =========================================================
     RESET POSITION WHEN FILTER CHANGES
     ========================================================= */

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    viewport.scrollLeft = 0;
    setPage(0);
  }, [safeGames]);

  /* =========================================================
     AUTO SCROLL
     ========================================================= */

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport || safeGames.length === 0) {
      return;
    }

    let animationFrame;

    const scroll = () => {
      if (
        !paused &&
        viewport.scrollWidth > viewport.clientWidth
      ) {
        viewport.scrollLeft += 0.45;

        /*
         * When we reach the end,
         * go back to the beginning.
         */
        const maxScroll =
          viewport.scrollWidth - viewport.clientWidth;

        if (viewport.scrollLeft >= maxScroll) {
          viewport.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [paused, safeGames.length]);

  /* =========================================================
     DETECT CURRENT PAGE
     ========================================================= */

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport || safeGames.length === 0) {
      return;
    }

    const handleScroll = () => {
      const card = viewport.querySelector("[data-card]");

      if (!card) {
        return;
      }

      const cardWidth =
        card.getBoundingClientRect().width;

      const gap = 16;

      const currentPage = Math.round(
        viewport.scrollLeft /
          (cardWidth + gap)
      );

      const safePage = Math.min(
        currentPage,
        safeGames.length - 1
      );

      setPage(safePage);
    };

    viewport.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      viewport.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [safeGames.length]);

  /* =========================================================
     GO TO CARD
     ========================================================= */

  const goTo = (index) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const card =
      viewport.querySelector("[data-card]");

    if (!card) {
      return;
    }

    const cardWidth =
      card.getBoundingClientRect().width;

    const gap = 16;

    viewport.scrollTo({
      left: (cardWidth + gap) * index,
      behavior: "smooth",
    });

    setPage(index);
  };

  /* =========================================================
     EMPTY STATE
     ========================================================= */

  if (safeGames.length === 0) {
    return null;
  }

  return (
    <section>

      {/* =====================================================
          VIEWPORT
          ===================================================== */}

      <div
        ref={viewportRef}
        className={styles.viewport}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        aria-label="VELOOP games carousel"
      >

        <div className={styles.track}>

          {safeGames.map((game) => (
            <div
              data-card
              key={game.id}
            >
              <GameCard game={game} />
            </div>
          ))}

        </div>

      </div>

      {/* =====================================================
          DOTS
          ===================================================== */}

      <div
        className={styles.dots}
        aria-label="Carousel pages"
      >

        {safeGames.map((game, index) => (
          <button
            key={game.id}
            type="button"
            className={
              index === page
                ? styles.activeDot
                : ""
            }
            onClick={() => goTo(index)}
            aria-label={
              "Go to " + game.name
            }
          />
        ))}

      </div>

    </section>
  );
}