import { midgardApiUrl } from '../config';
import { MidgardV2 } from '../Midgard';

describe('Midgard', () => {
  it('should be constructed with network', () => {
    const chaosnetMidgardSDK = new MidgardV2();
    const testnetMidgardSDK = new MidgardV2('testnet');

    expect(chaosnetMidgardSDK.getBaseUrl()).toBe(midgardApiUrl.chaosnet);
    expect(testnetMidgardSDK.getBaseUrl()).toBe(midgardApiUrl.testnet);
  });
});
