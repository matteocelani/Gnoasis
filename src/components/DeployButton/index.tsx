import React from 'react';
import { Plus } from 'lucide-react';

type DeployButtonProps = {
  onClick: () => void;
  isDeploying: boolean;
};

export default function DeployButton({
  onClick,
  isDeploying,
}: DeployButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isDeploying}
      className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 dark:disabled:bg-blue-800 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
    >
      {isDeploying ? (
        <span className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Deploying...
        </span>
      ) : (
        <>
          <Plus className="w-5 h-5 mr-2" /> Deploy New Smart Wallet
        </>
      )}
    </button>
  );
}
