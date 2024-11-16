import React, { useState } from 'react';
// Importing Viem
import { formatUnits } from 'viem';
// Importing Hooks
import { useAccount } from 'wagmi';
import { useWalletData } from '@/hooks/useWalletData';
import { useWallet } from '@/hooks/useWallet';
// Importing Components
import { BalanceDisplay } from '@/components/BalanceDisplay';
import { ActionButtons } from '@/components/ActionButtons';
import { TransactionsList } from '@/components/TransactionsList';
import BalanceDisplayLoading from '@/components/BalanceDisplay/loading';
import ActionButtonsLoading from '@/components/ActionButtons/loading';
import TransactionsListLoading from '@/components/TransactionsList/loading';
import SwitchWalletModal from '@/components/SwitchWalletModal';
// Importing Icons
import { Plus, ArrowRightLeft, Coins, RefreshCw } from 'lucide-react';
// Importing Constants
import { GNOSIS_CHAIN_ID } from '@/lib/constants';

export default function Home() {
  const { isConnected } = useAccount();
  const { selectedWallet } = useWallet();

  const [isSwitchModalOpen, setIsSwitchModalOpen] = useState(false);

  const { tokenBalances, transactions, isLoading, isError } = useWalletData({
    address: selectedWallet?.address || '',
    chainIds: GNOSIS_CHAIN_ID,
  });

  const xDaiToken = tokenBalances?.balances.find(
    (token) => token.symbol.toLowerCase() === 'xdai'
  );
  const xDaiBalance = xDaiToken
    ? parseFloat(formatUnits(BigInt(xDaiToken.amount), xDaiToken.decimals))
    : 0;

  if (!isConnected)
    return (
      <div className="text-center p-8 text-xl">Please connect your wallet</div>
    );

  if (isLoading) {
    return (
      <div className="max-w-md mx-auto w-full flex flex-col space-y-6 p-4">
        <BalanceDisplayLoading />
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
    { icon: <Plus size={24} />, label: 'Add' },
    { icon: <ArrowRightLeft size={24} />, label: 'Move' },
    { icon: <Coins size={24} />, label: 'Tokens' },
    {
      icon: <RefreshCw size={24} />,
      label: 'Switch',
      onClick: () => setIsSwitchModalOpen(true),
    },
  ];

  return (
    <div className="max-w-md mx-auto w-full flex flex-col space-y-6 p-4">
      <BalanceDisplay balance={xDaiBalance} title="xDai Balance" />
      <ActionButtons actions={actionButtons} />
      <TransactionsList
        transactions={transactions?.transactions || []}
        showAllLink="/transactions"
      />
      <SwitchWalletModal
        isOpen={isSwitchModalOpen}
        onClose={() => setIsSwitchModalOpen(false)}
      />
    </div>
  );
}
