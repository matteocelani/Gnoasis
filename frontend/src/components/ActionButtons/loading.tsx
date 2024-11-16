import { Button } from '@/components/ui/button';

export default function ActionButtonsLoading() {
  return (
    <div className="flex justify-center space-x-8">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="flex flex-col items-center">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-14 h-14 animate-pulse"
            disabled
          >
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          </Button>
          <div className="w-12 h-3 mt-2 bg-gray-300 rounded animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}
