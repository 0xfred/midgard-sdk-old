"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MidgardV2 = void 0;
const asgardex_midgard_1 = __importDefault(require("@thorchain/asgardex-midgard"));
const api_1 = require("./api");
const configuration_1 = require("./api/configuration");
const config_1 = require("./config");
class MidgardV2 {
    constructor(network = 'testnet') {
        this.baseUrl = '';
        this.version = 'V2';
        /**
         * set midgard base url
         */
        this.setBaseUrl = (noCache = false) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.network === 'testnet') {
                    this.baseUrl = config_1.MIDGARD_TESTNET_URL;
                }
                else {
                    this.baseUrl = yield asgardex_midgard_1.default(this.network, noCache);
                }
            }
            catch (error) {
                throw error;
            }
        });
        /**
         * get midgard base url
         */
        this.getMidgard = (noCache = false) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.setBaseUrl(noCache);
                const apiConfig = new configuration_1.Configuration({ basePath: this.baseUrl });
                return new api_1.DefaultApi(apiConfig);
            }
            catch (error) {
                throw error;
            }
        });
        this.getVersion = () => {
            return this.version;
        };
        this.getBaseUrl = () => {
            return this.baseUrl;
        };
        this.network = network;
        this.setBaseUrl();
    }
    getHealth() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getHealth();
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getPools(status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getPools(status);
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getPoolDetail(asset) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getPool(asset);
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getPoolStats({ asset, period, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getPoolStats(asset, period);
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getPoolStatsV1(asset) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getPoolStatsLegacy(asset);
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getDepthHistory({ pool, query = {}, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { interval, count, from, to } = query;
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getDepthHistory(pool, interval, count, to, from);
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getEarningsHistory(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { interval, count, from, to } = query;
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getEarningsHistory(interval, count, to, from);
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getSwapHistory({ pool, query = {}, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { interval, count, from, to } = query;
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getSwapHistory(pool, interval, count, to, from);
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getLiquidityHistory({ pool, query = {}, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { interval, count, from, to } = query;
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getLiquidityHistory(pool, interval, count, to, from);
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getNodes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getNodes();
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getNetworkData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getNetworkData();
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getActions(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { limit, offset, address, txId, asset, type } = params;
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getActions(limit, offset, address, txId, asset, type);
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getMembersAddresses() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getMembersAdresses();
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getMemberDetail(address) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getMemberDetail(address);
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getStats() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getStats();
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getConstants() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getProxiedConstants();
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getInboundAddresses() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getProxiedInboundAddresses();
                return data;
            }
            catch (error) {
                // try again
                try {
                    const midgard = yield this.getMidgard(true);
                    const { data } = yield midgard.getProxiedInboundAddresses();
                    return data;
                }
                catch (error) {
                    return Promise.reject(error);
                }
            }
        });
    }
    getInboundAddressByChain(chain) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const inboundData = yield this.getInboundAddresses();
                const addresses = inboundData || [];
                const chainAddress = addresses.find((item) => item.chain === chain);
                if (chainAddress) {
                    return chainAddress.address;
                }
                else {
                    throw new Error('pool address not found');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getLastblock() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getProxiedLastblock();
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getQueue() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const midgard = yield this.getMidgard();
                const { data } = yield midgard.getProxiedQueue();
                return data;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.MidgardV2 = MidgardV2;
//# sourceMappingURL=Midgard.js.map