import React from 'react';
import { Card } from '@/components/ui/card';

export default function LoadingCowSwapWidget() {
  return (
    <Card className="w-full max-w-[600px] h-[640px] flex flex-col animate-pulse">
      <div className="rounded-t-lg flex flex-row items-center justify-between p-4 h-16">
        <div className="flex-1" />
        <div className="flex-grow-0 flex justify-center">
          <div className="h-8 w-32 rounded-lg bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4 flex-grow">
        <div className="h-28 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto" />
        <div className="h-28 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="p-4 mt-auto">
        <div className="h-12 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
      </div>
    </Card>
  );
}
