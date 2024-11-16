import React from 'react';
// Importing Hooks
import { useAccount } from 'wagmi';
import { useWalletData } from '@/hooks/useWalletData';
// Importing Components
import { BalanceDisplay } from '@/components/BalanceDisplay';
import { ActionButtons } from '@/components/ActionButtons';
import { TransactionsList } from '@/components/TransactionsList';
import BalanceDisplayLoading from '@/components/BalanceDisplay/loading';
import ActionButtonsLoading from '@/components/ActionButtons/loading';
import TransactionsListLoading from '@/components/TransactionsList/loading';
// Importing Icons
import { Plus, ArrowRightLeft, FileText, MoreHorizontal } from 'lucide-react';
// Importing Constants
import { GNOSIS_CHAIN_ID } from '@/lib/constants';

export default function Home() {
  const { address, isConnected } = useAccount();
  const { tokenBalances, transactions, isLoading, isError } = useWalletData({
    address: address || '',
    chainIds: GNOSIS_CHAIN_ID,
  });

  const totalBalance =
    tokenBalances?.balances.reduce(
      (total, token) => total + (token.value_usd || 0),
      0
    ) || 0;

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
    { icon: <FileText size={24} />, label: 'Details' },
    { icon: <MoreHorizontal size={24} />, label: 'More' },
  ];

  return (
    <div className="max-w-md mx-auto w-full flex flex-col space-y-6 p-4">
      <BalanceDisplay balance={totalBalance} title="Total Balance" />
      <ActionButtons actions={actionButtons} />
      <TransactionsList
        transactions={transactions?.transactions || []}
        showAllLink="/transactions"
      />
    </div>
  );
}
