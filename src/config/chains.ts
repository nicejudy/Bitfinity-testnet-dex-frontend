import memoize from 'lodash/memoize'
import { Address } from 'viem'

import { Chain } from 'wagmi/chains'

export const bitfinity = {
  blockExplorers: {
    default: {
      apiUrl: "https://explorer.mainnet.bitfinity.network/api",
      name: "Bitfinity Explorer",
      url: "https://explorer.mainnet.bitfinity.network",
    },
  },
  contracts: {
    multicall3: {
      address: "" as Address,
      blockCreated: 0,
    },
  },
  fees: undefined,
  formatters: undefined,
  id: 355110,
  name: "Bitfinity Mainnet",
  nativeCurrency: {
    name: "BTF",
    symbol: "BTF",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [
        "https://mainnet.bitfinity.network",
      ]
    }
  },
  serializers: undefined,
}

export const bitfinity_testnet = {
  blockExplorers: {
    default: {
      apiUrl: "https://explorer.testnet.bitfinity.network/api",
      name: "Bitfinity Testnet Explorer",
      url: "https://explorer.testnet.bitfinity.network",
    },
  },
  contracts: {
    multicall3: {
      address: "" as Address,
      blockCreated: 0,
    },
  },
  fees: undefined,
  formatters: undefined,
  id: 355113,
  name: "Bitfinity Testnet",
  nativeCurrency: {
    name: "BTF",
    symbol: "BTF",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [
        "https://testnet.bitfinity.network",
      ]
    }
  },
  serializers: undefined,
}

export enum ChainId {
  MAINNET = 355110,
  TESTNET = 355113,
}

export const CHAIN_QUERY_NAME: Record<ChainId, string> = {
  [ChainId.MAINNET]: 'mainnet',
  [ChainId.TESTNET]: 'testnet',
}

const CHAIN_QUERY_NAME_TO_ID = Object.entries(CHAIN_QUERY_NAME).reduce((acc, [chainId, chainName]) => {
  return {
    [chainName.toLowerCase()]: chainId as unknown as ChainId,
    ...acc,
  }
}, {} as Record<string, ChainId>)

export const CHAINS: [Chain, ...Chain[]] = [
  bitfinity,
  // bitfinity_testnet
]

export const PUBLIC_NODES: Record<ChainId, string[] | readonly string[]> = {
  [ChainId.MAINNET]: [
    ...bitfinity.rpcUrls.default.http,
  ],
  [ChainId.TESTNET]: [
    ...bitfinity_testnet.rpcUrls.default.http,
  ],
}

export const getChainId = memoize((chainName: string) => {
  if (!chainName) return undefined
  return CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] ? +CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] : undefined
})