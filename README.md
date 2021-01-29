# Midgard SDK V2

[![License](https://img.shields.io/npm/l/make-coverage-badge.svg)](https://opensource.org/licenses/MIT)
![ts](https://flat.badgen.net/badge/Built%20With/TypeScript/blue)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Midgard API Documentation: [testnet.midgard.thorchain.info/v2/doc](https://testnet.midgard.thorchain.info/v2/doc).

## Installation

```sh
yarn add @thorchain/midgard-sdk-v2
```

## Usage

```sh

import Midgard from '@thorchain/midgard-sdk-v2'

// choose network
const midgard = new Midgard(); // set chaosnet as default
const midgard = new Midgard('testnet'); // for testnet

// get health
const pools = midgard.getHealth()

// get pools
const pools = midgard.getPools()
const pools = midgard.getPools(status)

// get pool detail
const pools = midgard.getPoolDetail(asset)

// get pool stats
const pools = midgard.getPoolStats({ asset, period })

// get pool stats v1 (will be deprecated)
const pools = midgard.getPoolStatsV1(asset)

// get depth history
const pools = midgard.getDepthHistory({ pool, query: { interval, count, from, to} })

// get earning history
const pools = midgard.getEarningsHistory({ interval, count, from, to })

// get swap history
const pools = midgard.getSwapHistory({ pool, query: { interval, count, from, to} })

// get liquidity history
const pools = midgard.getLiquidityHistory({ pool, query: { interval, count, from, to} })

// get nodes
const pools = midgard.getNodes()

// get network data
const pools = midgard.getNetworkData()

// get actions list
const pools = midgard.getActions(params: ActionListParams)

// get members addresses
const pools = midgard.getMembersAddresses()

// get member detail
const pools = midgard.getMemberDetail(address)

// get stats
const pools = midgard.getStats()

// get constants
const pools = midgard.getProxiedConstants()

// get inbound addresses
const pools = midgard.getProxiedInboundAddresses()

// get lastblock
const pools = midgard.getProxiedLastblock()

// get queue
const pools = midgard.getProxiedQueue()


```
