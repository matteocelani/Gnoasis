import React from 'react';
// Importing Next.js components
import Link from 'next/link';
// Importing UI components
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
// Importing Icons
import { AlertCircle, ChevronRight } from 'lucide-react';
// Importing Utilities
import { getShortAddress } from '@/lib/utils/addressUtils';
import { formatDate } from '@/lib/utils/dateUtils';
// Importing Type
import { Transaction } from '@/lib/types/api';

type TransactionsListProps = {
  transactions: Transaction[];
  showAllLink?: string;
};

export function TransactionsList({
  transactions,
  showAllLink,
}: TransactionsListProps) {
  const hasTransactions = transactions.length > 0;

  // Generate Gnosis Scan URL for a transaction
  const getGnosisScanUrl = (hash: string) => {
    return `https://gnosisscan.io/tx/${hash}`;
  };

  // Determine transaction type based on transaction data
  const getTransactionType = (transaction: Transaction) => {
    return transaction.transaction_type;
  };

  // Format transaction value from Wei to ETH
  const formatValue = (value: string) => {
    // Convert hex string to BigInt
    const valueInWei = BigInt(value);
    // Convert Wei to ETH (1 ETH = 10^18 Wei)
    const valueInEth = Number(valueInWei) / 1e18;
    // Format the number with 4 decimal places
    return valueInEth.toFixed(4) + ' ETH';
  };

  return (
    <Card className="shadow-md rounded-xl overflow-hidden">
      <CardHeader>
        <h4 className="text-lg font-semibold">Recent Transactions</h4>
      </CardHeader>
      <CardContent className="space-y-4">
        {hasTransactions ? (
          transactions.slice(0, 5).map((transaction) => (
            <div
              key={transaction.hash}
              className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="flex flex-col">
                <div className="font-medium">
                  {getTransactionType(transaction)}
                </div>
                <div className="text-sm text-gray-500">
                  {formatDate(transaction.block_time)}
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-sm font-semibold text-gray-700">
                  {formatValue(transaction.value)}
                </div>
                <a
                  href={getGnosisScanUrl(transaction.hash)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:text-blue-600 flex items-center"
                >
                  {getShortAddress(transaction.hash)}
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-gray-500">
            <AlertCircle size={48} className="mb-2" />
            <p className="text-lg font-medium">No Recent Transactions</p>
            <p className="text-sm">Your transactions will appear here</p>
          </div>
        )}
      </CardContent>
      {hasTransactions && showAllLink && (
        <CardFooter>
          <Link
            href={showAllLink}
            className="flex items-center justify-between w-full text-sm text-blue-500 hover:text-blue-600 transition-colors duration-200"
          >
            <span>See All Transactions</span>
            <ChevronRight size={20} />
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
