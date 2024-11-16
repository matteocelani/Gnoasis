import { formatEther } from 'viem';

export function formatBalance(balance: bigint): string {
  return parseFloat(formatEther(balance)).toFixed(4);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
