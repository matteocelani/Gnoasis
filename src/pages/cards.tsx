import React, { useState } from 'react';
// Importing Viem
import { formatUnits } from 'viem';
// Importing Hooks
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import { useWallet } from '@/hooks/useWallet';
// Importing components
import { useWalletData } from '@/hooks/useWalletData';
import { ActionButtons } from '@/components/ActionButtons';
import { TransactionsList } from '@/components/TransactionsList';
import { Card } from '@/components/ui/card';
import CardLoading from '@/components/CreditCard';
import ActionButtonsLoading from '@/components/ActionButtons/loading';
import TransactionsListLoading from '@/components/TransactionsList/loading';
// Importing Icons
import { Eye, EyeOff, Lock, Unlock, Settings } from 'lucide-react';
// Importing Constant
import { GNOSIS_CHAIN_ID } from '@/lib/constants';

// Fake Gnosis Card data
const cardData = {
  expiryDate: '12/25',
  cvv: '123',
};

export default function Cards() {
  const { selectedWallet } = useWallet();
  const router = useRouter();
  const { isConnected } = useAccount();

  const [showDetails, setShowDetails] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);
  const { tokenBalances, transactions, isLoading, isError } = useWalletData({
    address: selectedWallet?.address || '',
    chainIds: GNOSIS_CHAIN_ID,
  });

  const xDaiToken = tokenBalances?.balances.find(
    (token) => token.symbol.toLowerCase() === 'xdai'
  );
  const xDaiBalance = xDaiToken
    ? parseFloat(
        formatUnits(BigInt(xDaiToken.amount), xDaiToken.decimals)
      ).toFixed(2)
    : '0.00';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error('Errore durante la copia:', err);
    });
  };

  if (!isConnected)
    return (
      <div className="text-center p-8 text-xl">Please connect your wallet</div>
    );
  if (isLoading) {
    return (
      <div className="max-w-md mx-auto w-full flex flex-col space-y-6 p-4">
        <CardLoading />
        <ActionButtonsLoading />
        <TransactionsListLoading />
      </div>
    );
  }
  if (isError)
    return (
      <div className="text-center p-8 text-xl text-red-500">
        Error loading data
      </div>
    );

  const actionButtons = [
    {
      icon: showDetails ? <EyeOff size={24} /> : <Eye size={24} />,
      label: showDetails ? 'Hide' : 'Show',
      onClick: () => setShowDetails(!showDetails),
      isActive: showDetails,
      activeClassName: 'bg-warning dark:bg-warning text-black dark:text-black',
    },
    {
      icon: isFrozen ? <Lock size={24} /> : <Unlock size={24} />,
      label: isFrozen ? 'Unfreeze' : 'Freeze',
      onClick: () => setIsFrozen(!isFrozen),
      isActive: isFrozen,
      activeClassName: 'bg-info dark:bg-info text-white dark:text-white',
    },
    {
      icon: <Settings size={24} />,
      label: 'Settings',
      onClick: () => router.push('/settings'),
    },
  ];

  return (
    <div className="max-w-md mx-auto w-full flex flex-col space-y-6 p-4">
      <div className="relative w-full aspect-[1.58/1]">
        <Card className="absolute w-full h-full bg-gradient-to-br from-green-400 to-green-600 dark:from-green-600 dark:to-green-800 text-white p-6 flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg">
          <div className="text-lg font-bold">Gnosis Card</div>
          <div className="text-right">
            <div className="text-sm opacity-80">xDai Balance</div>
            <div className="text-3xl font-bold">{xDaiBalance}</div>
            <div className="mt-2 text-lg">
              ••••{' '}
              {selectedWallet?.address.substring(
                selectedWallet?.address.length - 4
              )}
            </div>
          </div>
          {/* Overlay for card details */}
          <div
            className={`absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center transition-opacity duration-300 ${showDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="text-center">
              <div className="mb-4">
                <div className="text-sm opacity-80">Card Number</div>
                <div
                  className="text-sm tracking-tight"
                  onClick={() => copyToClipboard(selectedWallet?.address || '')}
                >
                  {selectedWallet?.address}
                </div>
              </div>
              <div className="flex justify-center space-x-8">
                <div>
                  <div className="text-sm opacity-80">Expiry Date</div>
                  <div>{cardData.expiryDate}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80">CVV</div>
                  <div>{cardData.cvv}</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <ActionButtons actions={actionButtons} />
      <TransactionsList
        transactions={transactions?.transactions || []}
        showAllLink="/transaction"
      />
    </div>
  );
}
