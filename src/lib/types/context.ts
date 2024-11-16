import { ReactNode } from 'react';

/* ------------------------------ Email Context ----------------------------- */

export type EmailContextType = {
  email: string;
  setEmail: (email: string) => void;
};

export type EmailProviderProps = {
  children: ReactNode;
};

/* ----------------------------- Wallet Context ----------------------------- */

export type SmartWallet = {
  address: string;
  chainId: string;
  balance: bigint;
};

export type WalletContextType = {
  selectedWallet: SmartWallet | null;
  setSelectedWallet: (wallet: SmartWallet | null) => void;
};
