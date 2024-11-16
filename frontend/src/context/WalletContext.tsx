import React, { createContext, useState, useEffect } from 'react';
// Importing Types
import { SmartWallet, WalletContextType } from '@/lib/types/context';

export const WalletContext = createContext<WalletContextType | undefined>(
  undefined
);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [selectedWallet, setSelectedWallet] = useState<SmartWallet | null>(
    () => {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('selectedWallet');
        return saved ? JSON.parse(saved) : null;
      }
      return null;
    }
  );

  useEffect(() => {
    if (selectedWallet) {
      localStorage.setItem('selectedWallet', JSON.stringify(selectedWallet));
    } else {
      localStorage.removeItem('selectedWallet');
    }
  }, [selectedWallet]);

  return (
    <WalletContext.Provider value={{ selectedWallet, setSelectedWallet }}>
      {children}
    </WalletContext.Provider>
  );
}
