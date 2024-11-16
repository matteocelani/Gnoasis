import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { formatDate } from '@/lib/utils/dateUtils';
import {
  AlertCircle,
  ArrowRight,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

type Swap = {
  id: string;
  tokenIn: string;
  tokenOut: string;
  amountIn: bigint;
  amountOut: bigint;
  date: string;
};

type SwapsListProps = {
  swaps: Swap[];
  showAllLink?: string;
};

export function SwapsList({ swaps, showAllLink }: SwapsListProps) {
  const hasSwaps = swaps.length > 0;

  return (
    <Card className="shadow-md rounded-xl overflow-hidden">
      <CardHeader>
        <h4 className="text-lg font-semibold">Recent Swaps</h4>
      </CardHeader>
      <CardContent className="space-y-4">
        {hasSwaps ? (
          swaps.slice(0, 5).map((swap) => (
            <div
              key={swap.id}
              className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <div>
                <div className="flex items-center space-x-2">
                  <div className="font-medium">{swap.tokenIn.slice(0, 5)}</div>
                  <ArrowRight />
                  <div className="font-medium">{swap.tokenOut.slice(0, 5)}</div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>{formatDate(swap.date)}</span>
                  <Link
                    href={`https://explorer.cow.fi/gc/orders/${swap.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>View</span>
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
              <div className="font-semibold">{swap.amountIn}</div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-2 text-gray-500">
            <AlertCircle size={48} className="mb-2" />
            <p className="text-lg font-medium">No Recent Swaps</p>
            <p className="text-sm">Your swaps will appear here</p>
          </div>
        )}
      </CardContent>
      {hasSwaps && showAllLink && (
        <CardFooter>
          <Link
            href={showAllLink}
            className="flex items-center justify-between w-full text-sm text-blue-500 hover:text-blue-600 transition-colors duration-200"
          >
            <span>See All Swaps</span>
            <ChevronRight size={20} />
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
