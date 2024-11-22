import { ChainId } from 'config/chains'

export default {
  masterChef: {
    [ChainId.MAINNET]: '0x1e7F25Af19DD9c3229d43041867c2924af6dd304',
  },
  multiCall: {
    [ChainId.MAINNET]: '0xcA11bde05977b3631167028862bE2a173976CA11',
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
} as const satisfies Record<string, Record<number, `0x${string}`>>
