import { SwapSide } from './constants';

export type Address = string;
export type NumberAsString = string;

export type Adapters = {
  [exchangeKey: string]: { adapter: Address; index: number }[];
};

export type OptimalRoute = {
  percent: number;
  swaps: OptimalSwap[];
};

export type OptimalSwap = {
  srcToken: Address;
  srcDecimals: number;
  destToken: Address;
  destDecimals: number;
  swapExchanges: OptimalSwapExchange<any>[];
};

export type OptimalSwapExchange<T> = {
  exchange: string;
  srcAmount: NumberAsString;
  destAmount: NumberAsString;
  percent: number;
  data?: T;
  poolAddresses?: Array<Address>;
};

export type OptionalRate = {
  exchange: string;
  srcAmount: NumberAsString;
  destAmount: NumberAsString;
  unit?: NumberAsString;
  data?: any;
};

export type OptimalRate = {
  blockNumber: number;
  network: number;
  srcToken: Address;
  srcDecimals: number;
  srcAmount: NumberAsString;
  srcUSD: NumberAsString;
  destToken: Address;
  destDecimals: number;
  destAmount: NumberAsString;
  destUSD: NumberAsString;
  bestRoute: OptimalRoute[];
  gasCostUSD: NumberAsString;
  gasCost: NumberAsString;
  others?: OptionalRate[];
  side: SwapSide;
  contractMethod: string;
  tokenTransferProxy: Address;
  contractAddress: Address;
  maxImpact?: number;
  maxUSDImpact?: number;
  maxImpactReached?: boolean;
  partner?: string;
  partnerFee: number;
  hmac: string;
};
