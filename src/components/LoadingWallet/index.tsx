import React from 'react';

export default function LoadingWallet() {
  return (
    <div className="w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-lg animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
