export const TESTNET_MIDGARD_API_URL = 'https://testnet.midgard.thorchain.info';
export const CHAOSNET_MIDGARD_API_URL =
  'https://chaosnet.midgard.thorchain.info';

export type MidgardApiUrl = {
  testnet: string;
  chaosnet: string;
};

export const midgardApiUrl: MidgardApiUrl = {
  testnet: TESTNET_MIDGARD_API_URL,
  chaosnet: CHAOSNET_MIDGARD_API_URL,
};
