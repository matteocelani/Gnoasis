import React, { PropsWithChildren, useState, useEffect } from 'react';
import Head from 'next/head';
// Importing Hooks
import { useAccount } from 'wagmi';
import { useWallet } from '@/hooks/useWallet';
// Importing Layout
import Header from '@/layout/header';
import TabBar from '@/layout/tabbar';
import SmartWalletSelection from '@/layout/SmartWalletSelection';
// Importing Components
import { Login } from '@/components/Login';
import { Spinner } from '@/components/ui/spinner';

export default function Layout({ children }: PropsWithChildren) {
  const { isConnecting, isConnected, isDisconnected } = useAccount();
  const { selectedWallet } = useWallet();

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isConnecting) {
      setIsInitialized(true);
    }
  }, [isConnecting]);

  if (!isInitialized) {
    return (
      <div className="min-h-screen w-full bg-background flex items-center justify-center">
        <Spinner size="lg" className="text-primary" />
      </div>
    );
  }

  if (!isConnected || isDisconnected) {
    return (
      <div className="min-h-screen w-full bg-02 dark:bg-08 flex items-center justify-center px-8">
        <Login />
      </div>
    );
  }

  if (selectedWallet) {
    return (
      <div className="min-h-screen w-full bg-02 dark:bg-08 flex items-center justify-center px-8">
        <SmartWalletSelection />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-02 dark:bg-08 text-foreground">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>

      <Header />

      <main className="flex-1 overflow-y-auto p-4 pt-20">{children}</main>

      <TabBar />
    </div>
  );
}
