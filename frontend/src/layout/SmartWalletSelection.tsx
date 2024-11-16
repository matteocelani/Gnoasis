import React, { useState } from 'react';
// Importing Hooks
import { useAccount } from 'wagmi';
import { useWallet } from '@/hooks/useWallet';
import { useAccounts } from '@/hooks/useAccounts';
// Importing Utils
import { formatBalance } from '@/lib/utils/mathUtils';
import { getShortAddress } from '@/lib/utils/addressUtils';
// Importing Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
// Importing Icons
import { Wallet, Plus, Search } from 'lucide-react';
// Importing Types
import { SmartWallet } from '@/lib/types/context';
// Importing Constants
import { GNOSIS_CHAIN_ID } from '@/lib/constants';

export default function SmartWalletSelection() {
  const { setSelectedWallet } = useWallet();
  const { address } = useAccount();
  const { useGetAccounts } = useAccounts(address || '');

  const { data: safeAccounts, isLoading, error } = useGetAccounts();

  const [searchTerm, setSearchTerm] = useState('');

  function handleSelectWallet(wallet: SmartWallet) {
    console.log('Selected Wallet:', wallet);
    setSelectedWallet(wallet);
  }

  async function handleCreateNewWallet() {
    console.log('Create a new wallet');
    // Create a new wallet
  }

  const gnosisWallets = safeAccounts?.[GNOSIS_CHAIN_ID] || [];

  const filteredWallets = gnosisWallets
    .map((address) => ({
      address,
      chainId: GNOSIS_CHAIN_ID,
      balance: BigInt(0),
    }))
    .filter((wallet) =>
      wallet.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (isLoading) {
    return <div>Loading your Safe wallets on Gnosis Chain...</div>;
  }

  if (error) {
    return <div>Error loading Safe wallets: {error.message}</div>;
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {filteredWallets.length !== 0 && (
        <h2 className="text-xl font-semibold mb-4 text-center">
          Select or Deploy Smart Wallet on Gnosis Chain
        </h2>
      )}

      {filteredWallets.length > 0 && (
        <>
          <div className="mb-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search wallets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <ScrollArea className="h-[400px] rounded-md border p-4">
            {filteredWallets.map((wallet) => (
              <button
                key={wallet.address}
                onClick={() => handleSelectWallet(wallet)}
                className="w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <Wallet className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium">
                      {getShortAddress(wallet.address)}
                    </p>
                    <p className="text-sm text-gray-500">Gnosis Chain</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">
                    {formatBalance(wallet.balance)} xDAI
                  </p>
                </div>
              </button>
            ))}
          </ScrollArea>
        </>
      )}

      <Button
        onClick={handleCreateNewWallet}
        className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white"
      >
        <Plus className="w-5 h-5" /> Deploy New Smart Wallet
      </Button>
    </div>
  );
}
