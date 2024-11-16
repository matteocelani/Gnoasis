import { Card } from '@/components/ui/card';

export default function CardLoading() {
  return (
    <div className="relative w-full aspect-[1.58/1]">
      <Card className="absolute w-full h-full bg-gradient-to-br from-green-400 to-green-600 dark:from-green-600 dark:to-green-800 text-white p-6 flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg animate-pulse">
        <div className="w-24 h-6 bg-white bg-opacity-20 rounded"></div>
        <div className="text-right">
          <div className="w-16 h-4 bg-white bg-opacity-20 rounded mb-2 ml-auto"></div>
          <div className="w-32 h-8 bg-white bg-opacity-20 rounded ml-auto"></div>
          <div className="w-24 h-6 bg-white bg-opacity-20 rounded mt-2 ml-auto"></div>
        </div>
      </Card>
    </div>
  );
}
