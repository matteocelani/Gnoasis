import React, { useState } from 'react';
// Importing Hooks
import { useWallet } from '@/hooks/useWallet';
import { useAccounts } from '@/hooks/useAccounts';
import { useAccount, useClient, useConnectorClient } from 'wagmi';
// Importing Utils
import { http } from 'viem';
import { gnosis } from 'viem/chains';
import { createPimlicoClient } from 'permissionless/clients/pimlico';
import { entryPoint07Address } from 'viem/account-abstraction';
import { toSafeSmartAccount } from 'permissionless/accounts';
import { createSmartAccountClient } from 'permissionless';
// Importing Components
import WalletItem from '@/components/WalletItem';
import SearchInput from '@/components/SearchInput';
import DeployButton from '@/components/DeployButton';
import LoadingWallet from '@/components/LoadingWallet';
import { ScrollArea } from '@/components/ui/scroll-area';
// Importing Types
import { SmartWallet } from '@/lib/types/context';
// Importing Constants
import { GNOSIS_CHAIN_ID } from '@/lib/constants';

export default function SmartWalletSelection() {
  const { setSelectedWallet } = useWallet();
  const { address } = useAccount();
  const client = useClient();
  const { data: connectorClient } = useConnectorClient();

  const { useGetAccounts } = useAccounts(address || '');
  const { data: safeAccounts, isLoading, error, refetch } = useGetAccounts();

  const [searchTerm, setSearchTerm] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployError, setDeployError] = useState<string | null>(null);

  const gnosisWallets = safeAccounts?.[GNOSIS_CHAIN_ID] || [];
  const filteredWallets = gnosisWallets
    .map(
      (address): SmartWallet => ({
        address,
        chainId: GNOSIS_CHAIN_ID,
        balance: BigInt(0),
      })
    )
    .filter((wallet) =>
      wallet.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

  function handleSelectWallet(wallet: SmartWallet) {
    setSelectedWallet(wallet);
  }

  async function handleCreateNewWallet() {
    if (!address || !connectorClient) {
      setDeployError('Wallet not connected');
      return;
    }

    setIsDeploying(true);
    setDeployError(null);

    try {
      const pimlicoApiKey = process.env.NEXT_PUBLIC_PIMLICO_KEY;
      if (!pimlicoApiKey) {
        throw new Error('Pimlico API key not found');
      }

      const paymasterClient = createPimlicoClient({
        transport: http(
          `https://api.pimlico.io/v2/100/rpc?apikey=${pimlicoApiKey}`
        ),
        entryPoint: {
          address: entryPoint07Address,
          version: '0.7',
        },
      });

      if (!client) {
        throw new Error('Client not found');
      }

      const safeAccount = await toSafeSmartAccount({
        client: client,
        entryPoint: {
          address: entryPoint07Address,
          version: '0.7',
        },
        // @ts-expect-error - Viem types not compatible with Permissionless types
        owners: [connectorClient],
        saltNonce: BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)),
        version: '1.4.1',
      });

      const smartAccountClient = createSmartAccountClient({
        account: safeAccount,
        chain: gnosis,
        paymaster: paymasterClient,
        bundlerTransport: http(
          `https://api.pimlico.io/v2/100/rpc?apikey=${pimlicoApiKey}`
        ),
        userOperation: {
          estimateFeesPerGas: async () =>
            (await paymasterClient.getUserOperationGasPrice()).fast,
        },
      });

      // Deploy the smart account by sending a transaction
      await smartAccountClient.sendTransaction({
        to: safeAccount.address,
        value: BigInt(0),
        data: '0x',
      });

      await refetch();

      setSelectedWallet({
        address: safeAccount.address,
        chainId: GNOSIS_CHAIN_ID,
        balance: BigInt(0),
      });
    } catch (err) {
      console.error('Error creating smart account:', err);
      setDeployError('Failed to create smart account. Please try again.');
    } finally {
      setIsDeploying(false);
    }
  }

  if (isLoading) {
    return (
      <div className="w-full max-w-md mx-auto p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
          Loading Smart Wallets
        </h2>
        <LoadingWallet />
        <LoadingWallet />
        <LoadingWallet />
      </div>
    );
  }

  if (error) {
    return <div>Error loading Safe wallets: {error.message}</div>;
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6 bg-background rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center">Smart Wallet Manager</h2>

      {filteredWallets.length > 4 && (
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )}

      <ScrollArea className="max-h-96 rounded-md border">
        {filteredWallets.length > 0 ? (
          filteredWallets.map((wallet) => (
            <WalletItem
              key={wallet.address}
              wallet={wallet}
              onSelect={handleSelectWallet}
            />
          ))
        ) : (
          <p className="text-center text-muted-foreground p-4">
            No wallets found. Deploy a new one!
          </p>
        )}
      </ScrollArea>

      <DeployButton onClick={handleCreateNewWallet} isDeploying={isDeploying} />

      {deployError && (
        <p className="text-destructive text-sm text-center">{deployError}</p>
      )}
    </div>
  );
}
