import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { formatDate } from '@/lib/utils/dateUtils';
import { getShortAddress } from '@/lib/utils/addressUtils';
import { ArrowRight } from 'lucide-react';
import { Swap } from '@/lib/types/api';

type SwapsListProps = {
  swaps: Swap[];
};

export function SwapsList({ swaps }: SwapsListProps) {
  const hasSwaps = swaps.length > 0;

  return (
    <Card className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Recent Swaps
        </h4>
      </CardHeader>
      <CardContent className="p-0">
        {hasSwaps ? (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {swaps.slice(0, 5).map((swap) => (
              <li
                key={swap.id}
                className="flex justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex flex-col  items-start text-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {getShortAddress(swap.tokenIn)}
                    </span>
                    <ArrowRight className="text-gray-400" size={16} />
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {getShortAddress(swap.tokenOut)}
                    </span>
                  </div>

                  <span className="text-gray-500 dark:text-gray-400">
                    {formatDate(swap.date)}
                  </span>
                </div>
                <a
                  href={`https://explorer.cow.fi/gc/orders/${swap.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>{getShortAddress(swap.id)}</span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500 dark:text-gray-400">
            <p className="text-lg font-medium">No Recent Swaps</p>
            <p className="text-sm mt-1">Your swaps will appear here</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
