import React from 'react';
// TanStack
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Raimbow Kit
import { RainbowKitProvider, lightTheme, Theme } from '@rainbow-me/rainbowkit';
// Wagmi
import { WagmiProvider } from 'wagmi';
// Wagmi Config
import useWagmiConfig from '@/hooks/useWagmiConfig';
// Merge
import merge from 'lodash.merge';
import { gnosis } from 'wagmi/chains';
import { WalletProvider } from '@/context/WalletContext';
// PWA Prompt
import { PWAPrompt } from './PWAPrompt';

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

const queryClient = new QueryClient();

interface ProviderWrapperProps {
  children: React.ReactNode;
}

export default function ProviderWrapper({ children }: ProviderWrapperProps) {
  const { config } = useWagmiConfig();

  if (!config) return null;

  return (
    <WalletProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            initialChain={gnosis}
            theme={theme}
            showRecentTransactions={true}
          >
            {children}
            <PWAPrompt />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </WalletProvider>
  );
}
