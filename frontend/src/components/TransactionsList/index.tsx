import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { AlertCircle, ChevronRight } from 'lucide-react';
import Link from 'next/link';

type Transaction = {
  id: string;
  merchant: string;
  amount: string;
  date: string;
};

type TransactionsListProps = {
  transactions: Transaction[];
  showAllLink?: string;
};

export function TransactionsList({
  transactions,
  showAllLink,
}: TransactionsListProps) {
  const hasTransactions = transactions.length > 0;

  return (
    <Card className="shadow-md rounded-xl overflow-hidden">
      <CardHeader>
        <h4 className="text-lg font-semibold">Recent Transactions</h4>
      </CardHeader>
      <CardContent className="space-y-4">
        {hasTransactions ? (
          transactions.slice(0, 5).map((transaction) => (
            <div
              key={transaction.id}
              className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <div>
                <div className="font-medium">{transaction.merchant}</div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
              <div className="font-semibold">{transaction.amount}</div>
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
