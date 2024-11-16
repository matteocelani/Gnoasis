// Token balance type
export type TokenBalance = {
  chain: string;
  chain_id: number;
  address: string;
  amount: string;
  symbol: string;
  decimals: number;
};

// Response type for token balances
export type TokenBalancesResponse = {
  request_time: string;
  response_time: string;
  wallet_address: string;
  balances: TokenBalance[];
};

// Transaction type
export type Transaction = {
  address: string;
  chain: string;
  chain_id: number;
  block_hash: string;
  block_number: number;
  block_time: string;
  data: string;
  from: string;
  gas_price: string;
  hash: string;
  index: number;
  logs: any[];
  nonce: string;
  success: boolean;
  to: string;
  transaction_type: string;
  value: string;
};

// Response type for transactions
export type TransactionsResponse = {
  request_time: string;
  response_time: string;
  wallet_address: string;
  transactions: Transaction[];
};

export type Swap = {
  id: string;
  tokenIn: string;
  tokenOut: string;
  amountIn: string;
  amountOut: string;
  date: string;
};

export type SwapResponse = {
  uid: string;
  buyToken: string;
  sellToken: string;
  amountIn: string;
  amountOut: string;
  creationDate: string;
};
