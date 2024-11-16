import React from 'react';
import { Wallet } from 'lucide-react';
import { SmartWallet } from '@/lib/types/context';
import { formatBalance } from '@/lib/utils/mathUtils';
import { getShortAddress } from '@/lib/utils/addressUtils';

type WalletItemProps = {
  wallet: SmartWallet;
  onSelect: (wallet: SmartWallet) => void;
};

export default function WalletItem({ wallet, onSelect }: WalletItemProps) {
  return (
    <button
      onClick={() => onSelect(wallet)}
      className="w-full p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex items-center justify-between group mb-2"
    >
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
          <Wallet className="w-5 h-5 text-blue-500 dark:text-blue-400" />
        </div>
        <div className="text-left">
          <p className="font-medium text-gray-800 dark:text-gray-200">
            {getShortAddress(wallet.address)}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Gnosis Chain
          </p>
        </div>
      </div>
      <p className="font-bold text-green-600 dark:text-green-400">
        {formatBalance(wallet.balance)} xDAI
      </p>
    </button>
  );
}
