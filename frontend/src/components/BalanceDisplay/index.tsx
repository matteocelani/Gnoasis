import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils/mathUtils';

type BalanceDisplayProps = {
  balance: number;
  title: string;
};

export function BalanceDisplay({ balance, title }: BalanceDisplayProps) {
  return (
    <Card className="w-full bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 flex flex-col justify-center items-center rounded-3xl shadow-lg">
      <div className="text-sm opacity-80">{title}</div>
      <div className="text-5xl font-bold mt-2">{formatCurrency(balance)}</div>
    </Card>
  );
}
