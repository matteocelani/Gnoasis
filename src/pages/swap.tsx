import React, { Fragment, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { CowSwapWidgetParams, TradeType } from '@cowprotocol/widget-react';
// Importing Components
import Meta from '@/components/Meta';
import LoadingCowSwapWidget from '@/components/LoadingCowSwapWidget';
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
  const [swaps, setSwaps] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      console.log(122222211, resolvedTheme || theme);
      setCurrentTheme((resolvedTheme || theme) as 'light' | 'dark');
    }
  }, [theme, resolvedTheme, mounted]);

  useEffect(() => {
    if (isConnected && address) {
      const fetchSwaps = async () => {
        try {
          const response = await fetch(
            `https://api.cow.fi/xdai/api/v1/account/${address}/orders`
          );
          if (!response.ok) {
            throw new Error(`Failed to fetch swaps: ${response.statusText}`);
          }
          const data = await response.json();
          setSwaps(data);
        } catch (err: any) {
          console.error(err);
        }
      };

      fetchSwaps();
    }
  }, [address, isConnected]);

  if (!isConnected)
    return (
      <div className="text-center p-8 text-xl">Please connect your wallet</div>
    );

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

  const formattedSwaps =
    swaps?.map((s) => ({
      id: s.uid,
      tokenIn: s.buyToken,
      tokenOut: s.sellToken,
      amountIn: s.amountIn,
      amountOut: s.amountIn,
      date: s.creationDate,
    })) || [];

  return (
    <Fragment>
      <Meta />
      <div className="w-full flex flex-col items-center">
        <h3 className="text-2xl text-center mt-4 mb-4">Swap</h3>
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
        {formattedSwaps ? (
          <div className="w-full">
            <SwapsList swaps={formattedSwaps} showAllLink="/transactions" />
          </div>
        ) : (
          <div className="w-full mt-8">No swaps found</div>
        )}
      </div>
    </Fragment>
  );
}
