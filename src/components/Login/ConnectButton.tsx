import React from 'react';
import { ConnectButton as RainbowConnect } from '@rainbow-me/rainbowkit';
import { Button } from '@/components/ui/button';

export default function ConnectButton() {
  return (
    <RainbowConnect.Custom>
      {({ account, chain, openConnectModal }) => {
        const connected = Boolean(account && chain);

        return (
          <Button
            onClick={openConnectModal}
            className="w-full bg-green-500 hover:bg-green-600 text-white"
            disabled={connected}
          >
            {connected ? 'Connected' : 'Connect Wallet'}
          </Button>
        );
      }}
    </RainbowConnect.Custom>
  );
}
