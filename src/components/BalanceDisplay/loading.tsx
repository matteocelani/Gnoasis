import { Card } from '@/components/ui/card';

export default function BalanceDisplayLoading() {
  return (
    <Card className="w-full bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 flex flex-col justify-center items-center rounded-3xl shadow-lg">
      <div className="w-24 h-4 bg-white bg-opacity-20 rounded animate-pulse"></div>
      <div className="w-40 h-10 mt-2 bg-white bg-opacity-20 rounded animate-pulse"></div>
    </Card>
  );
}
