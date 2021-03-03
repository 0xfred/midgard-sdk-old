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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MidgardV2 = void 0;
var asgardex_midgard_1 = __importDefault(require("@thorchain/asgardex-midgard"));
var api_1 = require("./api");
var configuration_1 = require("./api/configuration");
var config_1 = require("./config");
var MidgardV2 = /** @class */ (function () {
    function MidgardV2(network) {
        var _this = this;
        if (network === void 0) { network = 'testnet'; }
        this.baseUrl = '';
        this.version = 'V2';
        /**
         * set midgard base url
         */
        this.setBaseUrl = function (noCache) {
            if (noCache === void 0) { noCache = false; }
            return __awaiter(_this, void 0, void 0, function () {
                var _a, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 4, , 5]);
                            if (!(this.network === 'testnet')) return [3 /*break*/, 1];
                            this.baseUrl = config_1.MIDGARD_TESTNET_URL;
                            return [3 /*break*/, 3];
                        case 1:
                            _a = this;
                            return [4 /*yield*/, asgardex_midgard_1.default(this.network, noCache)];
                        case 2:
                            _a.baseUrl = _b.sent();
                            _b.label = 3;
                        case 3: return [3 /*break*/, 5];
                        case 4:
                            error_1 = _b.sent();
                            throw error_1;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * get midgard base url
         */
        this.getMidgard = function (noCache) {
            if (noCache === void 0) { noCache = false; }
            return __awaiter(_this, void 0, void 0, function () {
                var apiConfig, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.setBaseUrl(noCache)];
                        case 1:
                            _a.sent();
                            apiConfig = new configuration_1.Configuration({ basePath: this.baseUrl });
                            return [2 /*return*/, new api_1.DefaultApi(apiConfig)];
                        case 2:
                            error_2 = _a.sent();
                            throw error_2;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        this.getVersion = function () {
            return _this.version;
        };
        this.getBaseUrl = function () {
            return _this.baseUrl;
        };
        this.network = network;
        this.setBaseUrl();
    }
    MidgardV2.prototype.getHealth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var midgard, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getHealth()];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_3)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getPools = function (status) {
        return __awaiter(this, void 0, void 0, function () {
            var midgard, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getPools(status)];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_4 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_4)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getPoolDetail = function (asset) {
        return __awaiter(this, void 0, void 0, function () {
            var midgard, data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getPool(asset)];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_5 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_5)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getPoolStats = function (_a) {
        var asset = _a.asset, period = _a.period;
        return __awaiter(this, void 0, void 0, function () {
            var midgard, data, error_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _b.sent();
                        return [4 /*yield*/, midgard.getPoolStats(asset, period)];
                    case 2:
                        data = (_b.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_6 = _b.sent();
                        return [2 /*return*/, Promise.reject(error_6)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getPoolStatsV1 = function (asset) {
        return __awaiter(this, void 0, void 0, function () {
            var midgard, data, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getPoolStatsLegacy(asset)];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_7 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_7)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getDepthHistory = function (_a) {
        var pool = _a.pool, _b = _a.query, query = _b === void 0 ? {} : _b;
        return __awaiter(this, void 0, void 0, function () {
            var interval, count, from, to, midgard, data, error_8;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        interval = query.interval, count = query.count, from = query.from, to = query.to;
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _c.sent();
                        return [4 /*yield*/, midgard.getDepthHistory(pool, interval, count, to, from)];
                    case 2:
                        data = (_c.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_8 = _c.sent();
                        return [2 /*return*/, Promise.reject(error_8)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getEarningsHistory = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var interval, count, from, to, midgard, data, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        interval = query.interval, count = query.count, from = query.from, to = query.to;
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getEarningsHistory(interval, count, to, from)];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_9 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_9)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getSwapHistory = function (_a) {
        var pool = _a.pool, _b = _a.query, query = _b === void 0 ? {} : _b;
        return __awaiter(this, void 0, void 0, function () {
            var interval, count, from, to, midgard, data, error_10;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        interval = query.interval, count = query.count, from = query.from, to = query.to;
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _c.sent();
                        return [4 /*yield*/, midgard.getSwapHistory(pool, interval, count, to, from)];
                    case 2:
                        data = (_c.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_10 = _c.sent();
                        return [2 /*return*/, Promise.reject(error_10)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getLiquidityHistory = function (_a) {
        var pool = _a.pool, _b = _a.query, query = _b === void 0 ? {} : _b;
        return __awaiter(this, void 0, void 0, function () {
            var interval, count, from, to, midgard, data, error_11;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        interval = query.interval, count = query.count, from = query.from, to = query.to;
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _c.sent();
                        return [4 /*yield*/, midgard.getLiquidityHistory(pool, interval, count, to, from)];
                    case 2:
                        data = (_c.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_11 = _c.sent();
                        return [2 /*return*/, Promise.reject(error_11)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getNodes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var midgard, data, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getNodes()];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_12 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_12)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getNetworkData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var midgard, data, error_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getNetworkData()];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_13 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_13)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getActions = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var limit, offset, address, txId, asset, type, midgard, data, error_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        limit = params.limit, offset = params.offset, address = params.address, txId = params.txId, asset = params.asset, type = params.type;
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getActions(limit, offset, address, txId, asset, type)];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_14 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_14)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getMembersAddresses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var midgard, data, error_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getMembersAdresses()];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_15 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_15)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getMemberDetail = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var midgard, data, error_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getMemberDetail(address)];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_16 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_16)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getStats = function () {
        return __awaiter(this, void 0, void 0, function () {
            var midgard, data, error_17;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getStats()];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_17 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_17)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getConstants = function () {
        return __awaiter(this, void 0, void 0, function () {
            var midgard, data, error_18;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getProxiedConstants()];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_18 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_18)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getInboundAddresses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var midgard, data, error_19, midgard, data, error_20;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 9]);
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getProxiedInboundAddresses()];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_19 = _a.sent();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 7, , 8]);
                        return [4 /*yield*/, this.getMidgard(true)];
                    case 5:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getProxiedInboundAddresses()];
                    case 6:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 7:
                        error_20 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_20)];
                    case 8: return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getInboundAddressByChain = function (chain) {
        return __awaiter(this, void 0, void 0, function () {
            var inboundData, addresses, chainAddress, error_21;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getInboundAddresses()];
                    case 1:
                        inboundData = _a.sent();
                        addresses = inboundData || [];
                        chainAddress = addresses.find(function (item) { return item.chain === chain; });
                        if (chainAddress) {
                            return [2 /*return*/, chainAddress.address];
                        }
                        else {
                            throw new Error('pool address not found');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_21 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_21)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getLastblock = function () {
        return __awaiter(this, void 0, void 0, function () {
            var midgard, data, error_22;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getProxiedLastblock()];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_22 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_22)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MidgardV2.prototype.getQueue = function () {
        return __awaiter(this, void 0, void 0, function () {
            var midgard, data, error_23;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getMidgard()];
                    case 1:
                        midgard = _a.sent();
                        return [4 /*yield*/, midgard.getProxiedQueue()];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        error_23 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_23)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return MidgardV2;
}());
exports.MidgardV2 = MidgardV2;
//# sourceMappingURL=Midgard.js.map