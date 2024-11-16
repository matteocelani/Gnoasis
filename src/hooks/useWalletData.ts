// Importing Hooks
import { useQueries } from '@tanstack/react-query';
// Importing Utils
import { fetcher } from '@/lib/utils/fetcher';
// Importing Types
import { TokenBalancesResponse, TransactionsResponse } from '@/lib/types/api';

const API_BASE_URL = 'https://api.dune.com/api/echo/v1';
const DUNE_API_KEY = process.env.NEXT_PUBLIC_DUNE_API_KEY;

interface UseWalletDataProps {
  address: string;
  chainIds?: string;
  excludeSpamTokens?: boolean;
  limit?: number;
}

export function useWalletData({
  address,
  chainIds = '100',
  excludeSpamTokens = true,
  limit = 200,
}: UseWalletDataProps) {
  const queries = useQueries({
    queries: [
      {
        queryKey: [
          'tokenBalances',
          address,
          chainIds,
          excludeSpamTokens,
          limit,
        ],
        queryFn: async (): Promise<TokenBalancesResponse> => {
          return fetcher.thirdParty(`${API_BASE_URL}/balances/evm/${address}`, {
            params: {
              chain_ids: chainIds,
              exclude_spam_tokens: excludeSpamTokens,
              limit,
            },
            headers: {
              'X-Dune-Api-Key': DUNE_API_KEY,
            },
          });
        },
      },
      {
        queryKey: ['transactions', address, chainIds, limit],
        queryFn: async (): Promise<TransactionsResponse> => {
          return fetcher.thirdParty(
            `${API_BASE_URL}/transactions/evm/${address}`,
            {
              params: {
                chain_ids: chainIds,
                limit,
              },
              headers: {
                'X-Dune-Api-Key': DUNE_API_KEY,
              },
            }
          );
        },
      },
    ],
  });

  const [tokenBalancesQuery, transactionsQuery] = queries;

  return {
    tokenBalances: tokenBalancesQuery.data,
    isLoadingTokenBalances: tokenBalancesQuery.isLoading,
    tokenBalancesError: tokenBalancesQuery.error,
    transactions: transactionsQuery.data,
    isLoadingTransactions: transactionsQuery.isLoading,
    transactionsError: transactionsQuery.error,
    isLoading: tokenBalancesQuery.isLoading || transactionsQuery.isLoading,
    isError: !!tokenBalancesQuery.error || !!transactionsQuery.error,
  };
}
