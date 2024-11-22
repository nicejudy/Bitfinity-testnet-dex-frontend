import { ChainId } from 'config/chains'

import { mainnetTokens } from './constants/arb'

export const allTokens = {
  [ChainId.MAINNET]: mainnetTokens,
  [ChainId.TESTNET]: mainnetTokens,
}
