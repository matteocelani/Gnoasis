import { Card } from '@/components/ui/card';

type BalanceDisplayProps = {
  balance: number;
  title: string;
};

export function BalanceDisplay({ balance, title }: BalanceDisplayProps) {
  const formattedBalance = balance.toFixed(2);

  return (
    <Card className="w-full bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 flex flex-col justify-center items-center rounded-3xl shadow-lg">
      <div className="text-sm opacity-80">{title}</div>
      <div className="text-5xl font-bold mt-2">{formattedBalance}</div>
    </Card>
  );
}
