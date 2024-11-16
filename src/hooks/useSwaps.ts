import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';
// Importing Type
import { Swap, SwapResponse } from '@/lib/types/api';

const BASE_URL = 'https://api.cow.fi/xdai/api/v1';
const FIVE_MINUTES = 5 * 60 * 1000;

export function useSwaps(address: string | undefined) {
  const defaultQueryOptions = {
    staleTime: FIVE_MINUTES,
    gcTime: FIVE_MINUTES,
    retry: 3,
  };

  const fetchSwaps = async (): Promise<Swap[]> => {
    if (!address) {
      return [];
    }
    const response = await axios.get<SwapResponse[]>(
      `${BASE_URL}/account/${address}/orders`
    );
    return response.data.map((s) => ({
      id: s.uid,
      tokenIn: s.buyToken,
      tokenOut: s.sellToken,
      amountIn: s.amountIn,
      amountOut: s.amountOut,
      date: s.creationDate,
    }));
  };

  const useGetSwaps = (options?: UseQueryOptions<Swap[], Error>) => {
    return useQuery<Swap[], Error>({
      queryKey: ['swaps', address],
      queryFn: fetchSwaps,
      enabled: !!address,
      ...defaultQueryOptions,
      ...options,
    });
  };

  return { useGetSwaps };
}
