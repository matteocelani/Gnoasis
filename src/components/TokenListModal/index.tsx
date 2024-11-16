import React from 'react';
import { formatUnits } from 'viem';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TokenBalance } from '@/lib/types/api';

type TokenListModalProps = {
  isOpen: boolean;
  onClose: () => void;
  tokenBalances: TokenBalance[] | undefined;
};

export default function TokenListModal({
  isOpen,
  onClose,
  tokenBalances,
}: TokenListModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-72 xs:w-96 p-4 shadow-md rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            Tokens
          </DialogTitle>
        </DialogHeader>
        <div className="px-2 pb-6">
          <ScrollArea className="h-96 -mx-6 px-6">
            {tokenBalances?.map((token: TokenBalance) => (
              <div
                key={token.address}
                className="flex justify-between items-center py-4 border-b last:border-b-0"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">
                      {token.symbol[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{token.symbol}</p>
                    <p className="text-sm text-muted-foreground">
                      {token.address.slice(0, 6)}...{token.address.slice(-4)}
                    </p>
                  </div>
                </div>
                <p className="font-medium">
                  {parseFloat(
                    formatUnits(BigInt(token.amount), token.decimals)
                  ).toFixed(4)}
                </p>
              </div>
            ))}
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
