import { ChainId } from 'config/chains'
import { Address } from 'viem'

export const MULTICALL_ADDRESS: { [key in ChainId]?: Address } = {
  [ChainId.MAINNET]: '0xbFfE39cDD04f0183e0493c1Deb6E275c5cf84AdF',
  [ChainId.TESTNET]: '0xbFfE39cDD04f0183e0493c1Deb6E275c5cf84AdF',
}

export const MULTICALL3_ADDRESS = '0xcA11bde05977b3631167028862bE2a173976CA11'

export const MULTICALL3_ADDRESSES: {
  [key in ChainId]?: Address
} = {
  [ChainId.MAINNET]: MULTICALL3_ADDRESS,
  [ChainId.TESTNET]: MULTICALL3_ADDRESS,
}
