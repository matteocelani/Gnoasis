import React, { createContext, useState, useEffect } from 'react';
import { SmartWallet, WalletContextType } from '@/lib/types/context';

export const WalletContext = createContext<WalletContextType | undefined>(
  undefined
);

// Helper function to serialize BigInt
function replacer(key: string, value: any) {
  if (typeof value === 'bigint') {
    return value.toString() + 'n';
  }
  return value;
}

// Helper function to deserialize BigInt
function reviver(key: string, value: any) {
  if (typeof value === 'string' && value.endsWith('n')) {
    return BigInt(value.slice(0, -1));
  }
  return value;
}

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [selectedWallet, setSelectedWallet] = useState<SmartWallet | null>(
    () => {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('selectedWallet');
        return saved ? JSON.parse(saved, reviver) : null;
      }
      return null;
    }
  );

  useEffect(() => {
    if (selectedWallet) {
      localStorage.setItem(
        'selectedWallet',
        JSON.stringify(selectedWallet, replacer)
      );
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
