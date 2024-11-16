import { formatEther } from 'viem';

export function formatBalance(balance: bigint): string {
  return parseFloat(formatEther(balance)).toFixed(4);
}
