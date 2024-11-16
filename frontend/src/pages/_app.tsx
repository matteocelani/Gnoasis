import React from 'react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
// Importing Next Themes
import { ThemeProvider } from 'next-themes';
// TanStack
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Importing Styles
import '@/assets/styles/globals.scss';
// Raimbow Kit
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, lightTheme, Theme } from '@rainbow-me/rainbowkit';
// Wagmi
import { WagmiProvider } from 'wagmi';
// Wagmi Config
import { wagmiConfig } from '@/lib/constants/wagmiConfig';
// Merge
import merge from 'lodash.merge';
// Importing Layout
const Layout = dynamic(() => import('@/layout'), { ssr: false });

const theme = merge(lightTheme(), {
  colors: {
    accentColor: '#FF801F',
    accentColorForeground: '#fff',
    actionButtonSecondaryBackground: '#DADDD8',
    connectButtonBackground: '#fff',
    connectButtonBackgroundError: '#fff',
    connectButtonInnerBackground: '#fff',
    connectButtonText: '#000',
    connectButtonTextError: '#FF494A',
  },
} as Theme);

// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={theme} showRecentTransactions={true}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}
