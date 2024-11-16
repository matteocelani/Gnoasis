import { useEffect, useState } from 'react';
// Raimbow Kit
import '@rainbow-me/rainbowkit/styles.css';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  bitgetWallet,
  bifrostWallet,
  bitskiWallet,
  braveWallet,
  coinbaseWallet,
  coin98Wallet,
  coreWallet,
  dawnWallet,
  enkryptWallet,
  foxWallet,
  frameWallet,
  frontierWallet,
  imTokenWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  mewWallet,
  okxWallet,
  omniWallet,
  oneKeyWallet,
  phantomWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  safeheronWallet,
  tahoWallet,
  talismanWallet,
  tokenaryWallet,
  tokenPocketWallet,
  trustWallet,
  uniswapWallet,
  walletConnectWallet,
  xdefiWallet,
  zerionWallet,
} from '@rainbow-me/rainbowkit/wallets';
// Wagmi
import { http, createConfig, Config } from 'wagmi';
import { gnosis } from 'wagmi/chains';
// Hooks
import { useEmail } from '@/hooks/useEmail';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID || '';

import createWeb3AuthInstances from '@/lib/constants/web3AuthConnectorInstance';

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const transports = {
  [gnosis.id]: http(),
};

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [
        metaMaskWallet,
        rainbowWallet,
        frameWallet,
        rabbyWallet,
        ledgerWallet,
        walletConnectWallet,
        phantomWallet,
        coinbaseWallet,
        coin98Wallet,
        trustWallet,
        uniswapWallet,
        argentWallet,
        bitgetWallet,
        bifrostWallet,
        bitskiWallet,
        braveWallet,
        coreWallet,
        dawnWallet,
        enkryptWallet,
        foxWallet,
        frontierWallet,
        imTokenWallet,
        injectedWallet,
        mewWallet,
        okxWallet,
        omniWallet,
        oneKeyWallet,
        safeWallet,
        safeheronWallet,
        tahoWallet,
        talismanWallet,
        tokenaryWallet,
        tokenPocketWallet,
        xdefiWallet,
        zerionWallet,
      ],
    },
  ],
  {
    appName: 'SmartPocket',
    projectId,
  }
);

const initialCustomConnectors = createWeb3AuthInstances(
  [gnosis],
  ['google', 'apple', 'twitter', 'discord', 'email_passwordless'],
  ''
);

const initialConfig = createConfig({
  chains: [gnosis],
  transports,
  connectors: [...initialCustomConnectors, ...connectors],
  ssr: true,
});

export default function useWagmiConfig(): Config {
  const { email } = useEmail();

  const [config, setConfig] = useState<Config>(initialConfig);

  useEffect(() => {
    if (email && emailRegex.test(email)) {
      const customConnectors = createWeb3AuthInstances(
        [gnosis],
        ['google', 'apple', 'twitter', 'discord', 'email_passwordless'],
        email // Pass the email dynamically
      );

      const updatedConfig = createConfig({
        chains: [gnosis],
        transports,
        connectors: [...customConnectors, ...connectors],
        ssr: true,
      });

      setConfig(updatedConfig);
    }
  }, [email]); // Re-run this effect when `email` changes

  return config;
}
