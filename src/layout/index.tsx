import React, { PropsWithChildren, useState, useEffect } from 'react';
import Head from 'next/head';
// Importing Hooks
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import { useWallet } from '@/hooks/useWallet';
// Importing Layout
import Header from '@/layout/header';
import TabBar from '@/layout/tabbar';
import SmartWalletSelection from '@/layout/SmartWalletSelection';
// Importing Components
import { Login } from '@/components/Login';
import { Spinner } from '@/components/ui/spinner';
import Meta from '@/components/Meta';

export default function Layout({ children }: PropsWithChildren) {
  const router = useRouter();
  const { isConnecting, isConnected, isDisconnected } = useAccount();
  const { selectedWallet } = useWallet();

  const [isInitialized, setIsInitialized] = useState(false);

  // Determine if we're on the desktop page
  const isDesktopPage = router.pathname === '/desktop';

  useEffect(() => {
    if (!isConnecting) {
      setIsInitialized(true);
    }
  }, [isConnecting]);

  if (isDesktopPage) {
    return (
      <div className="min-h-screen w-full bg-02 dark:bg-08 flex items-center justify-center px-8">
        <Meta />
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            App available only on mobile devices
          </h1>
          <p className="text-base">
            Please access from a smartphone or tablet and refresh.
          </p>
        </div>
      </div>
    );
  }

  if (!isInitialized) {
    return (
      <div className="min-h-screen w-full bg-background flex items-center justify-center">
        <Meta />
        <Spinner size="lg" className="text-primary" />
      </div>
    );
  }

  if (!isConnected || isDisconnected) {
    return (
      <div className="min-h-screen w-full bg-02 dark:bg-08 flex items-center justify-center px-8">
        <Meta />

        <Login />
      </div>
    );
  }

  if (!selectedWallet) {
    return (
      <div className="min-h-screen w-full bg-02 dark:bg-08 flex items-center justify-center px-8">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
        </Head>
        <SmartWalletSelection />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-02 dark:bg-08 text-foreground">
      <Meta />

      <Header />

      <main className="flex-1 overflow-y-auto p-4 pt-20 pb-16">{children}</main>

      <TabBar />
    </div>
  );
}
