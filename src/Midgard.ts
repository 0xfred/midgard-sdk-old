import getMidgardBaseUrl from '@thorchain/asgardex-midgard';

import { DefaultApi } from './api';
import { Configuration } from './api/configuration';
import {
  NetworkType,
  Health,
  PoolDetail,
  PoolStatsDetail,
  PoolLegacyDetail,
  PoolStatus,
  StatsPeriod,
  HistoryQuery,
  DepthHistory,
  EarningsHistory,
  SwapHistory,
  LiquidityHistory,
  Node,
  Network,
  ActionsList,
  ActionListParams,
  MemberDetails,
  StatsData,
  Constants,
  InboundAddresses,
  Lastblock,
  Queue,
} from './types';

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
  getProxiedConstants: () => Promise<Constants>;
  getProxiedInboundAddresses: () => Promise<InboundAddresses>;
  getProxiedLastblock: () => Promise<Lastblock>;
  getProxiedQueue: () => Promise<Queue>;
}

class MidgardV2 implements MidgardSDKV2 {
  private baseUrl = '';
  private network: NetworkType;

  private readonly version = 'V2';

  constructor(network: NetworkType = 'testnet') {
    this.network = network;
  }

  /**
   * set midgard base url
   */
  private setBaseUrl = async (refresh = false) => {
    try {
      this.baseUrl = await getMidgardBaseUrl(this.network, refresh);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * get midgard base url
   */
  getMidgard = async (refresh = false) => {
    this.setBaseUrl(refresh);

    const apiConfig = new Configuration({ basePath: this.baseUrl });
    return new DefaultApi(apiConfig);
  };

  getVersion = (): string => {
    return this.version;
  };

  getBaseUrl = (): string => {
    return this.baseUrl;
  };

  async getHealth(): Promise<Health> {
    try {
      const midgard = await this.getMidgard();
      const { data } = await midgard.getHealth();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getPools(status?: PoolStatus): Promise<PoolDetail[]> {
    try {
      const midgard = await this.getMidgard();
      const { data } = await midgard.getPools(status);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getPoolDetail(asset: string): Promise<PoolDetail> {
    try {
      const midgard = await this.getMidgard();
      const { data } = await midgard.getPool(asset);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getPoolStats({
    asset,
    period,
  }: {
    asset: string;
    period: StatsPeriod;
  }): Promise<PoolStatsDetail> {
    try {
      const midgard = await this.getMidgard();
      const { data } = await midgard.getPoolStats(asset, period);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getPoolStatsV1(asset: string): Promise<PoolLegacyDetail> {
    try {
      const midgard = await this.getMidgard();
      const { data } = await midgard.getPoolStatsLegacy(asset);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getDepthHistory({
    pool,
    query = {},
  }: {
    pool: string;
    query?: HistoryQuery;
  }): Promise<DepthHistory> {
    try {
      const { interval, count, from, to } = query;
      const midgard = await this.getMidgard();
      const { data } = await midgard.getDepthHistory(
        pool,
        interval,
        count,
        to,
        from,
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getEarningsHistory(query: HistoryQuery): Promise<EarningsHistory> {
    try {
      const { interval, count, from, to } = query;

      const midgard = await this.getMidgard();
      const { data } = await midgard.getEarningsHistory(
        interval,
        count,
        to,
        from,
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getSwapHistory({
    pool,
    query = {},
  }: {
    pool?: string;
    query?: HistoryQuery;
  }): Promise<SwapHistory> {
    try {
      const { interval, count, from, to } = query;
      const midgard = await this.getMidgard();
      const { data } = await midgard.getSwapHistory(
        pool,
        interval,
        count,
        to,
        from,
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getLiquidityHistory({
    pool,
    query = {},
  }: {
    pool?: string;
    query?: HistoryQuery;
  }): Promise<LiquidityHistory> {
    try {
      const { interval, count, from, to } = query;
      const midgard = await this.getMidgard();
      const { data } = await midgard.getLiquidityHistory(
        pool,
        interval,
        count,
        to,
        from,
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getNodes(): Promise<Node[]> {
    try {
      const midgard = await this.getMidgard();
      const { data } = await midgard.getNodes();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getNetworkData(): Promise<Network> {
    try {
      const midgard = await this.getMidgard();
      const { data } = await midgard.getNetworkData();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getActions(params: ActionListParams): Promise<ActionsList> {
    try {
      const { limit, offset, address, txId, asset, type } = params;

      const midgard = await this.getMidgard();
      const { data } = await midgard.getActions(
        limit,
        offset,
        address,
        txId,
        asset,
        type,
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getMembersAddresses(): Promise<string[]> {
    try {
      const midgard = await this.getMidgard();
      const { data } = await midgard.getMembersAdresses();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getMemberDetail(address: string): Promise<MemberDetails> {
    try {
      const midgard = await this.getMidgard();
      const { data } = await midgard.getMemberDetail(address);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getStats(): Promise<StatsData> {
    try {
      const midgard = await this.getMidgard();
      const { data } = await midgard.getStats();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getProxiedConstants(): Promise<Constants> {
    try {
      const midgard = await this.getMidgard();
      const { data } = await midgard.getProxiedConstants();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getProxiedInboundAddresses(): Promise<InboundAddresses> {
    try {
      const midgard = await this.getMidgard();
      const { data } = await midgard.getProxiedInboundAddresses();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getProxiedLastblock(): Promise<Lastblock> {
    try {
      const midgard = await this.getMidgard();
      const { data } = await midgard.getProxiedLastblock();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getProxiedQueue(): Promise<Queue> {
    try {
      const midgard = await this.getMidgard();
      const { data } = await midgard.getProxiedQueue();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export { MidgardV2 };
