import React, { Fragment, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { CowSwapWidgetParams, TradeType } from '@cowprotocol/widget-react';
// Importing Components
import Meta from '@/components/Meta';
import LoadingCowSwapWidget from '@/components/LoadingCowSwapWidget';
// Importing Constants
import { GNOSIS_CHAIN_ID } from '@/lib/constants';

const CowSwapWidget = dynamic(
  () => import('@cowprotocol/widget-react').then((mod) => mod.CowSwapWidget),
  {
    ssr: false,
    loading: () => <LoadingCowSwapWidget />,
  }
);

export default function Swap() {
  const { theme, resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      console.log(122222211, resolvedTheme || theme);
      setCurrentTheme((resolvedTheme || theme) as 'light' | 'dark');
    }
  }, [theme, resolvedTheme, mounted]);

  const params: CowSwapWidgetParams = {
    appCode: 'SmartPocket',
    width: '100%',
    height: '640px',
    chainId: GNOSIS_CHAIN_ID,
    tokenLists: [
      'https://files.cow.fi/tokens/CoinGecko.json',
      'https://files.cow.fi/tokens/CowSwap.json',
    ],
    tradeType: TradeType.SWAP,
    sell: { asset: '' },
    buy: { asset: '' },
    enabledTradeTypes: [TradeType.SWAP, TradeType.LIMIT, TradeType.ADVANCED],
    theme: currentTheme,
    standaloneMode: false,
    disableToastMessages: true,
    disableProgressBar: false,
    hideBridgeInfo: false,
    hideOrdersTable: false,
  };

  if (!mounted) return <LoadingCowSwapWidget />;

  return (
    <Fragment>
      <Meta />
      <div className="w-full flex flex-col items-center">
        <h3 className="text-2xl text-center mt-4 mb-8">Swap</h3>
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <CowSwapWidget
            params={params}
            provider={
              typeof window !== 'undefined'
                ? (window as any).ethereum
                : undefined
            }
          />
        </div>
      </div>
    </Fragment>
  );
}
