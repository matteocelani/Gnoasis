import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function TransactionsListLoading() {
  return (
    <Card className="shadow-md rounded-xl overflow-hidden">
      <CardHeader>
        <div className="w-40 h-6 bg-gray-300 rounded animate-pulse"></div>
      </CardHeader>
      <CardContent className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 bg-gray-100 rounded-lg animate-pulse"
          >
            <div>
              <div className="w-24 h-4 bg-gray-300 rounded"></div>
              <div className="w-16 h-3 mt-1 bg-gray-300 rounded"></div>
            </div>
            <div className="w-16 h-4 bg-gray-300 rounded"></div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
