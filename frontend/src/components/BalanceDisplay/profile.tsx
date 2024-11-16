import { Card, CardContent } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils/mathUtils';

type BalanceCardProps = {
  balance: number;
};

export function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <Card className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
      <CardContent className="pt-6">
        <div className="text-center">
          <p className="text-sm opacity-80">Total Balance</p>
          <p className="text-3xl font-bold mt-1">{formatCurrency(balance)}</p>
        </div>
      </CardContent>
    </Card>
  );
}
