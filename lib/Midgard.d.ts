import { DefaultApi } from './api';
import { NetworkType, Health, PoolDetail, PoolStatsDetail, PoolLegacyDetail, PoolStatus, StatsPeriod, HistoryQuery, DepthHistory, EarningsHistory, SwapHistory, LiquidityHistory, Node, Network, ActionsList, ActionListParams, MemberDetails, StatsData, Constants, InboundAddressesItem, Lastblock, Queue, PoolAddress } from './types';
export interface MidgardSDKV2 {
    getVersion: () => string;
    getBaseUrl: () => string;
    getHealth: () => Promise<Health>;
    getPools: (status?: PoolStatus) => Promise<PoolDetail[]>;
    getPoolDetail: (asset: string) => Promise<PoolDetail>;
    getPoolStats: (param: {
        asset: string;
        period: StatsPeriod;
    }) => Promise<PoolStatsDetail>;
    getPoolStatsV1: (asset: string) => Promise<PoolLegacyDetail>;
    getDepthHistory: (param: {
        pool: string;
        query?: HistoryQuery;
    }) => Promise<DepthHistory>;
    getEarningsHistory: (query: HistoryQuery) => Promise<EarningsHistory>;
    getSwapHistory: (param: {
        pool?: string;
        query?: HistoryQuery;
    }) => Promise<SwapHistory>;
    getLiquidityHistory: (param: {
        pool?: string;
        query?: HistoryQuery;
    }) => Promise<LiquidityHistory>;
    getNodes: () => Promise<Node[]>;
    getNetworkData: () => Promise<Network>;
    getActions: (params: ActionListParams) => Promise<ActionsList>;
    getMembersAddresses: () => Promise<string[]>;
    getMemberDetail: (address: string) => Promise<MemberDetails>;
    getStats: () => Promise<StatsData>;
    getConstants: () => Promise<Constants>;
    getInboundAddresses: () => Promise<InboundAddressesItem[]>;
    getInboundAddressByChain: (chain: string) => Promise<PoolAddress>;
    getLastblock: () => Promise<Lastblock>;
    getQueue: () => Promise<Queue>;
}
declare class MidgardV2 implements MidgardSDKV2 {
    private baseUrl;
    private network;
    private readonly version;
    constructor(network?: NetworkType);
    /**
     * set midgard base url
     */
    private setBaseUrl;
    /**
     * get midgard base url
     */
    getMidgard: (noCache?: boolean) => Promise<DefaultApi>;
    getVersion: () => string;
    getBaseUrl: () => string;
    getHealth(): Promise<Health>;
    getPools(status?: PoolStatus): Promise<PoolDetail[]>;
    getPoolDetail(asset: string): Promise<PoolDetail>;
    getPoolStats({ asset, period, }: {
        asset: string;
        period: StatsPeriod;
    }): Promise<PoolStatsDetail>;
    getPoolStatsV1(asset: string): Promise<PoolLegacyDetail>;
    getDepthHistory({ pool, query, }: {
        pool: string;
        query?: HistoryQuery;
    }): Promise<DepthHistory>;
    getEarningsHistory(query: HistoryQuery): Promise<EarningsHistory>;
    getSwapHistory({ pool, query, }: {
        pool?: string;
        query?: HistoryQuery;
    }): Promise<SwapHistory>;
    getLiquidityHistory({ pool, query, }: {
        pool?: string;
        query?: HistoryQuery;
    }): Promise<LiquidityHistory>;
    getNodes(): Promise<Node[]>;
    getNetworkData(): Promise<Network>;
    getActions(params: ActionListParams): Promise<ActionsList>;
    getMembersAddresses(): Promise<string[]>;
    getMemberDetail(address: string): Promise<MemberDetails>;
    getStats(): Promise<StatsData>;
    getConstants(): Promise<Constants>;
    getInboundAddresses(): Promise<InboundAddressesItem[]>;
    getInboundAddressByChain(chain: string): Promise<PoolAddress>;
    getLastblock(): Promise<Lastblock>;
    getQueue(): Promise<Queue>;
}
export { MidgardV2 };
