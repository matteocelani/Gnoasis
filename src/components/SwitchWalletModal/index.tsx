import React, { useState } from 'react';

// Importing Components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import WalletItem from '@/components/WalletItem';
import SearchInput from '@/components/SearchInput';
import DeployButton from '@/components/DeployButton';
import LoadingWallet from '@/components/LoadingWallet';
import { ScrollArea } from '@/components/ui/scroll-area';

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

// Importing Types
import { SmartWallet } from '@/lib/types/context';

// Importing Constants
import { GNOSIS_CHAIN_ID } from '@/lib/constants';

type SwitchWalletModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SwitchWalletModal({
  isOpen,
  onClose,
}: SwitchWalletModalProps) {
  // Hooks
  const { setSelectedWallet } = useWallet();
  const { address } = useAccount();
  const { useGetAccounts } = useAccounts(address || '');
  const { data: safeAccounts, isLoading, error, refetch } = useGetAccounts();
  const client = useClient();
  const { data: connectorClient } = useConnectorClient();

  // State
  const [searchTerm, setSearchTerm] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployError, setDeployError] = useState<string | null>(null);

  // Filtered wallets
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

  // Handlers
  function handleSelectWallet(wallet: SmartWallet) {
    setSelectedWallet(wallet);
    onClose();
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
      onClose();
    } catch (err) {
      console.error('Error creating smart account:', err);
      setDeployError('Failed to create smart account. Please try again.');
    } finally {
      setIsDeploying(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-72 xs:w-96 p-4 shadow-md rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            Switch or Create Smart Wallet
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {isLoading ? (
            <div className="space-y-4">
              <LoadingWallet />
              <LoadingWallet />
              <LoadingWallet />
            </div>
          ) : error ? (
            <div className="text-destructive text-center">
              Error loading Safe wallets: {error.message}
            </div>
          ) : (
            <>
              {filteredWallets.length > 4 && (
                <SearchInput
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              )}
              <ScrollArea className="h-[240px] rounded-md border p-4">
                {filteredWallets.length > 0 ? (
                  filteredWallets.map((wallet) => (
                    <WalletItem
                      key={wallet.address}
                      wallet={wallet}
                      onSelect={handleSelectWallet}
                    />
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-4">
                    No wallets found. Deploy a new one!
                  </p>
                )}
              </ScrollArea>
              <DeployButton
                onClick={handleCreateNewWallet}
                isDeploying={isDeploying}
              />
              {deployError && (
                <p className="text-destructive text-sm text-center mt-2">
                  {deployError}
                </p>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
