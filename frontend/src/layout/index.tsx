import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
// Importing Layout
import Header from '@/layout/header';
import TabBar from '@/layout/tabbar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class">
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
    </ThemeProvider>
  );
}
