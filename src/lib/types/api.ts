export type TokenBalance = {
  chain: string;
  chain_id: number;
  address: string;
  amount: string;
  symbol: string;
  decimals: number;
  price_usd?: number;
  value_usd?: number;
};

export type TokenBalancesResponse = {
  request_time: string;
  response_time: string;
  wallet_address: string;
  balances: TokenBalance[];
  next_offset?: string;
  errors?: Array<{
    message: string;
  }>;
};

export type Transaction = {
  chain: string;
  chain_id: number;
  from_address: string;
  to_address: string;
  transaction_hash: string;
  block_number: number;
  block_timestamp: string;
  transaction_index: number;
  value: string;
  gas_price?: string;
  gas_used?: string;
  input_data?: string;
  method_id?: string;
  method_name?: string;
};

export type TransactionsResponse = {
  request_time: string;
  response_time: string;
  wallet_address: string;
  transactions: Transaction[];
  next_offset?: string;
  errors?: Array<{
    message: string;
  }>;
};
