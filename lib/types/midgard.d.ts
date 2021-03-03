import { InlineResponse200 as ActionsList } from '../api';
export * from '../api';
export type { ActionsList };
export declare type NetworkType = 'testnet' | 'chaosnet' | 'mainnet';
export declare type PoolStatus = 'available' | 'staged' | 'suspended';
export declare type StatsPeriod = '1h' | '24h' | '7d' | '30d' | '90d' | '365d' | 'all';
export declare type HistoryInterval = '5min' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
export declare type HistoryQuery = {
    interval?: HistoryInterval;
    count?: number;
    to?: number;
    from?: number;
};
export declare type ActionType = 'swap' | 'addLiquidity' | 'withdraw' | 'donate' | 'refund';
export declare type ActionListParams = {
    address?: string;
    txId?: string;
    asset?: string;
    type?: ActionType;
    limit: number;
    offset: number;
};
export declare type PoolAddress = string;
