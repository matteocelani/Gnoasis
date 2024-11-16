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
import { ProfileAvatar } from '@/components/ProfileAvatar';
// Importing Icons
import { Plus, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
// Importing Constants
import { GNOSIS_CHAIN_ID } from '@/lib/constants';

export default function Profile() {
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
        <ProfileAvatar address="" />
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
    { icon: <ArrowUpRight size={24} />, label: 'Send' },
    { icon: <ArrowDownLeft size={24} />, label: 'Receive' },
  ];

  const formattedTransactions =
    transactions?.transactions.map((t) => ({
      id: t.transaction_hash,
      merchant: t.method_name || 'Transaction',
      amount: t.value,
      date: new Date(t.block_timestamp).toLocaleDateString(),
    })) || [];

  return (
    <div className="max-w-md mx-auto w-full flex flex-col space-y-6 p-4">
      <ProfileAvatar address={address || ''} />
      <BalanceDisplay balance={totalBalance} title="Gnosis Chain Balance" />
      <ActionButtons actions={actionButtons} />
      <TransactionsList
        transactions={formattedTransactions}
        showAllLink="/profile/transactions"
      />
    </div>
  );
}
