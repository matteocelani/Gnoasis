import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
// Importing Hooks
import { useAccount } from 'wagmi';
// Importing Layout
import Header from '@/layout/header';
import TabBar from '@/layout/tabbar';
// Importing Components
import { Login } from '@/components/Login';

export default function Layout({ children }: PropsWithChildren) {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return (
      <div className="min-h-screen w-full bg-01 dark:bg-09 flex items-center justify-center px-8">
        <Login />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
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
