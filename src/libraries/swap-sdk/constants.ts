import { ChainId } from 'config/chains'
import { Percent } from 'libraries/swap-sdk-core'
import { ERC20Token } from './entities/token'

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

export const FACTORY_ADDRESS = '0xcb0539302092b9EF4b81ddb1CC348bf014644f51'

export const FACTORY_ADDRESS_MAP: Record<number, `0x${string}`> = {
  [ChainId.MAINNET]: FACTORY_ADDRESS,
  [ChainId.TESTNET]: FACTORY_ADDRESS,
}
export const INIT_CODE_HASH = '0x60084983ded8c7b7bc1858dd41de4f212cbc5767a4cb8bfcb1cd5900fd5e0ac6'

export const INIT_CODE_HASH_MAP: Record<number, `0x${string}`> = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.TESTNET]: INIT_CODE_HASH,
}

export const WETH9 = {
  [ChainId.MAINNET]: new ERC20Token(
    ChainId.MAINNET,
    '0x4B6bcCA9a8D707DaCA69485d14836779AeD947E5',
    18,
    'WBFT',
    'Wrapped BFT',
    'https://bitfinity.network'
  ),
  [ChainId.TESTNET]: new ERC20Token(
    ChainId.TESTNET,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
}

export const WNATIVE: Record<number, ERC20Token> = {
  [ChainId.MAINNET]: WETH9[ChainId.MAINNET],
  [ChainId.TESTNET]: WETH9[ChainId.TESTNET],
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.MAINNET]: { name: 'BTF', symbol: 'BTF', decimals: 18 },
  [ChainId.TESTNET]: { name: 'BTF', symbol: 'BTF', decimals: 18 },
}
