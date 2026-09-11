// import { useEffect, useMemo, useRef, useState } from "react";
// import GameCard from "./GameCard";
// import styles from "./GamesCarousel.module.css";

// export default function GamesCarousel({ games }) {
//   const viewportRef = useRef(null);
//   const trackRef = useRef(null);
//   const [paused, setPaused] = useState(false);
//   const [page, setPage] = useState(0);
//   const loopGames = useMemo(() => [...games, ...games], [games]);

//   useEffect(() => {
//     const viewport = viewportRef.current;
//     if (!viewport) return;
//     let raf;
//     const tick = () => {
//       if (!paused && viewport.scrollWidth > viewport.clientWidth) {
//         viewport.scrollLeft += 0.45;
//         const half = viewport.scrollWidth / 2;
//         if (viewport.scrollLeft >= half) viewport.scrollLeft -= half;
//       }
//       raf = requestAnimationFrame(tick);
//     };
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [paused]);

//   useEffect(() => {
//     const viewport = viewportRef.current;
//     if (!viewport) return;
//     const onScroll = () => {
//       const cardWidth = viewport.querySelector("[data-card]")?.getBoundingClientRect().width || 1;
//       setPage(Math.round(viewport.scrollLeft / (cardWidth + 16)) % games.length);
//     };
//     viewport.addEventListener("scroll", onScroll, { passive: true });
//     return () => viewport.removeEventListener("scroll", onScroll);
//   }, [games.length]);

//   const goTo = (index) => {
//     const viewport = viewportRef.current;
//     const card = viewport?.querySelector("[data-card]");
//     if (!viewport || !card) return;
//     const width = card.getBoundingClientRect().width + 16;
//     viewport.scrollTo({ left: width * index, behavior: "smooth" });
//   };

//   return (
//     <section>
//       <div
//         ref={viewportRef}
//         className={styles.viewport}
//         onMouseEnter={() => setPaused(true)}
//         onMouseLeave={() => setPaused(false)}
//         onFocus={() => setPaused(true)}
//         onBlur={() => setPaused(false)}
//         aria-label="VELOOP games carousel"
//       >
//         <div ref={trackRef} className={styles.track}>
//           {loopGames.map((game, index) => <div data-card key={`${game.id}-${index}`}><GameCard game={game} /></div>)}
//         </div>
//       </div>
//       <div className={styles.dots} aria-label="Carousel pages">
//         {games.map((game, index) => (
//           <button
//             key={game.id}
//             className={index === page ? styles.activeDot : ""}
//             onClick={() => goTo(index)}
//             aria-label={`Go to ${game.name}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }





// import {
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";

// import GameCard from "./GameCard";
// import styles from "./GamesCarousel.module.css";

// export default function GamesCarousel({ games = [] }) {
//   const viewportRef = useRef(null);
//   const trackRef = useRef(null);

//   const [paused, setPaused] = useState(false);
//   const [page, setPage] = useState(0);

//   const safeGames = Array.isArray(games)
//     ? games
//     : [];

//   const loopGames = useMemo(() => {
//     if (safeGames.length === 0) {
//       return [];
//     }

//     return safeGames.concat(safeGames);
//   }, [safeGames]);

//   /* =========================================================
//      AUTO SCROLL
//      ========================================================= */

//   useEffect(() => {
//     const viewport = viewportRef.current;

//     if (!viewport || safeGames.length === 0) {
//       return undefined;
//     }

//     let raf;

//     const tick = () => {
//       if (
//         !paused &&
//         viewport.scrollWidth > viewport.clientWidth
//       ) {
//         viewport.scrollLeft += 0.45;

//         const half =
//           viewport.scrollWidth / 2;

//         if (viewport.scrollLeft >= half) {
//           viewport.scrollLeft -= half;
//         }
//       }

//       raf = requestAnimationFrame(tick);
//     };

//     raf = requestAnimationFrame(tick);

//     return () => {
//       cancelAnimationFrame(raf);
//     };
//   }, [paused, safeGames.length]);

//   /* =========================================================
//      ACTIVE DOT
//      ========================================================= */

//   useEffect(() => {
//     const viewport = viewportRef.current;

//     if (!viewport || safeGames.length === 0) {
//       return undefined;
//     }

//     const onScroll = () => {
//       const card =
//         viewport.querySelector(
//           "[data-card]"
//         );

//       if (!card) {
//         return;
//       }

//       const cardWidth =
//         card.getBoundingClientRect().width;

//       const gap = 16;

//       const currentPage = Math.round(
//         viewport.scrollLeft /
//           (cardWidth + gap)
//       );

//       setPage(
//         currentPage % safeGames.length
//       );
//     };

//     viewport.addEventListener(
//       "scroll",
//       onScroll,
//       { passive: true }
//     );

//     return () => {
//       viewport.removeEventListener(
//         "scroll",
//         onScroll
//       );
//     };
//   }, [safeGames.length]);

//   /* =========================================================
//      GO TO GAME
//      ========================================================= */

//   const goTo = (index) => {
//     const viewport = viewportRef.current;

//     if (!viewport) {
//       return;
//     }

//     const card =
//       viewport.querySelector(
//         "[data-card]"
//       );

//     if (!card) {
//       return;
//     }

//     const cardWidth =
//       card.getBoundingClientRect().width;

//     const gap = 16;

//     const position =
//       (cardWidth + gap) * index;

//     viewport.scrollTo({
//       left: position,
//       behavior: "smooth",
//     });

//     setPage(index);
//   };

//   /* =========================================================
//      EMPTY STATE
//      ========================================================= */

//   if (safeGames.length === 0) {
//     return null;
//   }

//   /* =========================================================
//      RENDER
//      ========================================================= */

//   return (
//     <section>

//       {/* =====================================================
//           CAROUSEL VIEWPORT
//           ===================================================== */}

//       <div
//         ref={viewportRef}
//         className={styles.viewport}
//         onMouseEnter={() => {
//           setPaused(true);
//         }}
//         onMouseLeave={() => {
//           setPaused(false);
//         }}
//         onFocus={() => {
//           setPaused(true);
//         }}
//         onBlur={() => {
//           setPaused(false);
//         }}
//         aria-label="VELOOP games carousel"
//       >

//         <div
//           ref={trackRef}
//           className={styles.track}
//         >

//           {loopGames.map(
//             (game, index) => (
//               <div
//                 data-card
//                 key={game.id + "-" + index}
//               >
//                 <GameCard
//                   game={game}
//                 />
//               </div>
//             )
//           )}

//         </div>

//       </div>

//       {/* =====================================================
//           CAROUSEL DOTS
//           ===================================================== */}

//       <div
//         className={styles.dots}
//         aria-label="Carousel pages"
//       >

//         {safeGames.map(
//           (game, index) => (
//             <button
//               key={game.id}
//               type="button"
//               className={
//                 index === page
//                   ? styles.activeDot
//                   : ""
//               }
//               onClick={() => {
//                 goTo(index);
//               }}
//               aria-label={
//                 "Go to " + game.name
//               }
//             />
//           )
//         )}

//       </div>

//     </section>
//   );
// }




import { useEffect, useRef, useState } from "react";

import GameCard from "./GameCard";
import styles from "./GamesCarousel.module.css";

export default function GamesCarousel({ games = [] }) {
const viewportRef = useRef(null);

const [paused, setPaused] = useState(false);
const [page, setPage] = useState(0);

const safeGames = Array.isArray(games) ? games : [];

const loopGames =
safeGames.length > 0
? [...safeGames, ...safeGames]
: [];

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

    const halfWidth =
      viewport.scrollWidth / 2;

    if (viewport.scrollLeft >= halfWidth) {
      viewport.scrollLeft -= halfWidth;
    }
  }

  animationFrame =
    requestAnimationFrame(scroll);
};

animationFrame =
  requestAnimationFrame(scroll);

return () => {
  cancelAnimationFrame(animationFrame);
};


}, [paused, safeGames.length]);

useEffect(() => {
const viewport = viewportRef.current;


if (!viewport || safeGames.length === 0) {
  return;
}

const handleScroll = () => {
  const card =
    viewport.querySelector("[data-card]");

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

  setPage(
    currentPage % safeGames.length
  );
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

if (safeGames.length === 0) {
return null;
}

return ( <section>
<div
ref={viewportRef}
className={styles.viewport}
onMouseEnter={() => setPaused(true)}
onMouseLeave={() => setPaused(false)}
onFocus={() => setPaused(true)}
onBlur={() => setPaused(false)}
aria-label="VELOOP games carousel"
> <div className={styles.track}>
{loopGames.map((game, index) => (
<div
data-card
key={game.id + "-" + index}
> <GameCard game={game} /> </div>
))} </div> </div>

```
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
        aria-label={"Go to " + game.name}
      />
    ))}
  </div>
</section>

);
}
