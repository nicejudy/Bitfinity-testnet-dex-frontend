import { ChainId } from 'config/chains'

export default {
  masterChef: {
    [ChainId.MAINNET]: '0x1e7F25Af19DD9c3229d43041867c2924af6dd304',
  },
  multiCall: {
    [ChainId.MAINNET]: '0x14b40314862d0D6BDA9dA2a2452666fb297515D4',
  },
  multisender: {
    [ChainId.MAINNET]: '0x1e7F25Af19DD9c3229d43041867c2924af6dd304'
  },
  locker: {
    [ChainId.MAINNET]: '0x1e7F25Af19DD9c3229d43041867c2924af6dd304',
  },
  launchpadFactory: {
    [ChainId.MAINNET]: '0x1e7F25Af19DD9c3229d43041867c2924af6dd304',
  },
  contribution: {
    [ChainId.MAINNET]: '0x1e7F25Af19DD9c3229d43041867c2924af6dd304',
  },
  smartRouter: {
    [ChainId.MAINNET]: '0x1e7F25Af19DD9c3229d43041867c2924af6dd304',
  },
  treasury: {
    [ChainId.MAINNET]: '0x1e7F25Af19DD9c3229d43041867c2924af6dd304',
  },
  presale: {
    [ChainId.MAINNET]: '0x9B2c951d50AafccD613aC7Cb317be753fD5a9215',
  },
} as const satisfies Record<string, Record<number, `0x${string}`>>
