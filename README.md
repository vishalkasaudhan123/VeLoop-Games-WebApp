# VELOOP Games — React + Vite

A responsive VELOOP Games assignment implementation with:

- 13 reusable game banner cards
- Smooth automatic horizontal carousel
- Seamless loop
- Touch/trackpad horizontal scrolling
- Carousel dots and no left/right arrows
- Play Now shimmer animation
- 20 Token entry-cost validation
- Centralized Game Coin wallet using React Context + localStorage
- Fully playable Word Hunt
- Fully playable Merge Master
- Game guide
- Score/progress
- Game-over flow
- One-time Revive for 20 Tokens
- No Thanks / reward collection
- Game Coin redemption
- Insufficient Tokens and Game Coins states
- Responsive light-theme game environments
- Bootstrap + CSS Modules + React Hooks
- Framer Motion/Lucide dependencies included for further polish

## Run

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Required supplied assets

Put the 13 supplied banner images in:

`src/assets/games/`

Expected names:

```text
banner-01.jpg
banner-02.avif
banner-03.avif
...
banner-13.avif
```

The sample `banner-01.jpg` can be replaced by the official supplied Blade Master artwork.

Also add the supplied Token/Game Coin/VE/SVE/Gems/Spin assets in the same folder when available. The wallet/redeem logic is already implemented; the visual asset placement can then be added to match the supplied design exactly.

## Fully playable games

1. Word Hunt
2. Merge Master

The remaining 11 games are intentionally banner/card only, matching the assignment scope.

## Test flow

Default wallet:

- Tokens: 100
- Game Coins: 0

Test:

1. Open `/games`.
2. Confirm all 13 banners appear.
3. Confirm carousel auto-scrolls and loops.
4. Open Word Hunt.
5. Start → 20 Tokens deducted.
6. Complete/timeout → Game Over.
7. Revive once → another 20 Tokens deducted.
8. Finish with No Thanks → Game Coins added.
9. Repeat with Merge Master.
10. Open Redeem.
11. Redeem when balance is sufficient.
12. Test insufficient Game Coins.
13. Refresh browser and verify wallet persists.

## Important

The assignment asks for the supplied artwork to be used rather than recreating supplied images in HTML. Replace the placeholder/missing asset paths with the exact supplied files before final submission.

For production, move wallet/token/reward validation to a backend. The current localStorage state is intentionally a frontend development/demo implementation.
