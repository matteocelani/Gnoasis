import { useState, useEffect } from 'react';
import Safe from '@safe-global/protocol-kit';
import { useConnectorClient } from 'wagmi';
import { useWallet } from '@/hooks/useWallet';

export function useSafe() {
  const [safe, setSafe] = useState<Safe | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const { data: connectorClient } = useConnectorClient();
  const { selectedWallet } = useWallet();

  useEffect(() => {
    async function initSafe() {
      if (!connectorClient || !selectedWallet) {
        setSafe(null);
        return;
      }

      try {
        const safeInstance = await Safe.init({
          // @ts-expect-error - Viem type not return a Eip1193Provider
          provider: connectorClient,
          signer: connectorClient.account.address,
          safeAddress: selectedWallet.address,
        });

        const connectedSafe = await safeInstance.connect({
          safeAddress: selectedWallet.address,
        });

        setSafe(connectedSafe);
        setError(null);
      } catch (err) {
        console.error('Error initializing Safe:', err);
        setSafe(null);
        setError(
          err instanceof Error ? err : new Error('Unknown error occurred')
        );
      }
    }

    initSafe();
  }, [connectorClient, selectedWallet]);

  return { safe, error };
}
