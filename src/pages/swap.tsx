import React, { Fragment, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { CowSwapWidgetParams, TradeType } from '@cowprotocol/widget-react';
// Importing Hooks
import { useTheme } from 'next-themes';
import { useSwaps } from '@/hooks/useSwaps';
// Importing Components
import Meta from '@/components/Meta';
import LoadingCowSwapWidget from '@/components/LoadingCowSwapWidget';
import TransactionsListLoading from '@/components/TransactionsList/loading';
// Importing Constants
import { GNOSIS_CHAIN_ID } from '@/lib/constants';
import { SwapsList } from '@/components/SwapsList';
import { useAccount } from 'wagmi';

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
  const { address, isConnected } = useAccount();
  const { useGetSwaps } = useSwaps(address);
  const { data: swaps, isLoading, error } = useGetSwaps();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setCurrentTheme((resolvedTheme || theme) as 'light' | 'dark');
    }
  }, [theme, resolvedTheme, mounted]);

  if (!isConnected)
    return (
      <div className="text-center p-8 text-xl">Please connect your wallet</div>
    );

  const params: CowSwapWidgetParams = {
    appCode: 'Gnoasis',
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

  if (!mounted) {
    return (
      <Fragment>
        <LoadingCowSwapWidget />
        <div className="mt-8">
          <TransactionsListLoading />
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Meta />
      <div className="w-full flex flex-col items-center">
        <h3 className="text-2xl text-center mt-4 mb-4">Swap</h3>
        <div style={{ width: '100%', maxWidth: '450px' }}>
          <CowSwapWidget
            params={params}
            provider={
              typeof window !== 'undefined'
                ? (window as any).ethereum
                : undefined
            }
          />
        </div>
        <div className="w-full mt-8">
          {isLoading ? (
            <TransactionsListLoading />
          ) : error ? (
            <div>Error loading swaps: {error.message}</div>
          ) : swaps && swaps.length > 0 ? (
            <SwapsList swaps={swaps} />
          ) : (
            <div>No swaps found</div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
