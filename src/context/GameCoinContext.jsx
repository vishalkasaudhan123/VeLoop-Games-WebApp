// import React, { createContext, useContext, useEffect, useState } from "react";

// const STORAGE_KEY = "veloop-wallet-v1";

// const DEFAULT_WALLET = {
//   tokens: 100,
//   gameCoins: 0,
// };

// const GameCoinContext = createContext(null);

// function readWallet() {
//   try {
//     const storedWallet = localStorage.getItem(STORAGE_KEY);

//     if (!storedWallet) {
//       return DEFAULT_WALLET;
//     }

//     const wallet = JSON.parse(storedWallet);

//     if (
//       typeof wallet.tokens === "number" &&
//       typeof wallet.gameCoins === "number"
//     ) {
//       return wallet;
//     }
//   } catch (error) {
//     console.error("Failed to read wallet:", error);
//   }

//   return DEFAULT_WALLET;
// }

// export function GameCoinProvider({ children }) {
//   const [wallet, setWallet] = useState(readWallet);

//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(wallet));
//   }, [wallet]);

//   const deductTokens = (amount) => {
//     if (wallet.tokens < amount) {
//       return false;
//     }

//     setWallet((currentWallet) => ({
//       ...currentWallet,
//       tokens: currentWallet.tokens - amount,
//     }));

//     return true;
//   };

//   const addTokens = (amount) => {
//     setWallet((currentWallet) => ({
//       ...currentWallet,
//       tokens: currentWallet.tokens + amount,
//     }));
//   };

//   const addGameCoins = (amount) => {
//     setWallet((currentWallet) => ({
//       ...currentWallet,
//       gameCoins: currentWallet.gameCoins + Math.max(0, amount),
//     }));
//   };

//   const redeemGameCoins = (amount) => {
//     if (wallet.gameCoins < amount) {
//       return false;
//     }

//     setWallet((currentWallet) => ({
//       ...currentWallet,
//       gameCoins: currentWallet.gameCoins - amount,
//     }));

//     return true;
//   };

//   const resetWallet = () => {
//     setWallet(DEFAULT_WALLET);
//   };

//   return (
//     <GameCoinContext.Provider
//       value={{
//         tokens: wallet.tokens,
//         gameCoins: wallet.gameCoins,
//         deductTokens,
//         addTokens,
//         addGameCoins,
//         redeemGameCoins,
//         resetWallet,
//       }}
//     >
//       {children}
//     </GameCoinContext.Provider>
//   );
// }

// export const useWallet = () => {
//   const context = useContext(GameCoinContext);

//   if (context === null) {
//     throw new Error(
//       "useWallet must be used inside GameCoinProvider"
//     );
//   }

//   return context;
// };




import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "veloop-wallet-v1";

const DEFAULT_WALLET = {
  tokens: 100,
  gameCoins: 0,
};

const GameCoinContext = createContext(null);

function readWallet() {
  try {
    const storedWallet = localStorage.getItem(STORAGE_KEY);

    if (!storedWallet) {
      return DEFAULT_WALLET;
    }

    const wallet = JSON.parse(storedWallet);

    if (
      typeof wallet.tokens === "number" &&
      typeof wallet.gameCoins === "number"
    ) {
      return wallet;
    }
  } catch (error) {
    console.error("Failed to read wallet:", error);
  }

  return DEFAULT_WALLET;
}

export function GameCoinProvider({ children }) {
  const [wallet, setWallet] = useState(readWallet);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wallet));
  }, [wallet]);

  const deductTokens = (amount) => {
    if (wallet.tokens < amount) {
      return false;
    }

    setWallet((currentWallet) => ({
      ...currentWallet,
      tokens: currentWallet.tokens - amount,
    }));

    return true;
  };

  const addTokens = (amount) => {
    setWallet((currentWallet) => ({
      ...currentWallet,
      tokens: currentWallet.tokens + Math.max(0, amount),
    }));
  };

  const addGameCoins = (amount) => {
    setWallet((currentWallet) => ({
      ...currentWallet,
      gameCoins:
        currentWallet.gameCoins + Math.max(0, amount),
    }));
  };

  const redeemGameCoins = (amount) => {
    if (wallet.gameCoins < amount) {
      return false;
    }

    setWallet((currentWallet) => ({
      ...currentWallet,
      gameCoins: currentWallet.gameCoins - amount,
    }));

    return true;
  };

  const resetWallet = () => {
    setWallet(DEFAULT_WALLET);
  };

  return (
    <GameCoinContext.Provider
      value={{
        tokens: wallet.tokens,
        gameCoins: wallet.gameCoins,
        deductTokens,
        addTokens,
        addGameCoins,
        redeemGameCoins,
        resetWallet,
      }}
    >
      {children}
    </GameCoinContext.Provider>
  );
}

export const useWallet = () => {
  const context = useContext(GameCoinContext);

  if (context === null) {
    throw new Error(
      "useWallet must be used inside GameCoinProvider"
    );
  }

  return context;
};