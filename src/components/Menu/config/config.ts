import { MenuItemsType } from 'widgets/Menu'
import { DropdownMenuItems } from 'components/DropdownMenu'
import {
  EarnFillIcon,
  EarnIcon,
  MultisenderIcon,
  TradeIcon
} from '../../Svg'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  isDark: boolean,
  chainId?: number,
) => ConfigMenuItemsType[] = (isDark, chainId) =>
  [
    // {
    //   label: 'Swap',
    //   icon: TradeIcon,
    //   fillIcon: TradeIcon,
    //   href: '/swap',
    //   showItemsOnMobile: true,
    //   items: [].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: 'Liquidity',
    //   icon: TradeIcon,
    //   fillIcon: TradeIcon,
    //   href: '/liquidity',
    //   showItemsOnMobile: true,
    //   items: [].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: 'Farms',
    //   href: '/farms',
    //   icon: EarnIcon,
    //   fillIcon: EarnFillIcon,
    //   image: '/images/decorations/pe2.png',
    //   showItemsOnMobile: false,
    //   items: [].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: 'Pools',
    //   href: '/pools',
    //   icon: EarnIcon,
    //   fillIcon: EarnFillIcon,
    //   image: '/images/decorations/pe2.png',
    //   showItemsOnMobile: false,
    //   items: [].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: 'Leverage',
    //   href: '/sales',
    //   icon: EarnIcon,
    //   fillIcon: EarnFillIcon,
    //   image: '/images/decorations/pe2.png',
    //   items: [
    //     {
    //       label: 'Vaults',
    //       href: '/vaults',
    //     },
    //     {
    //       label: 'Leverage Trading',
    //       href: '/xtrade',
    //     },
    //   ].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: 'Bonds',
    //   href: '/bonds',
    //   icon: EarnIcon,
    //   fillIcon: EarnFillIcon,
    //   image: '/images/decorations/pe2.png',
    //   showItemsOnMobile: false,
    //   items: [].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: 'Sales',
    //   href: '/sales',
    //   icon: EarnIcon,
    //   fillIcon: EarnFillIcon,
    //   image: '/images/decorations/pe2.png',
    //   items: [].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: 'Tools',
    //   href: '/token',
    //   icon: MultisenderIcon,
    //   fillIcon: MultisenderIcon,
    //   image: '/images/decorations/pe2.png',
    //   items: [
    //     {
    //       label: 'Token Creator',
    //       href: '/token',
    //     },
    //     {
    //       label: 'Token Multi-sender',
    //       href: '/multisend',
    //     },
    //     {
    //       label: 'Token Locker',
    //       href: '/lock',
    //     },
    //   ].map((item) => addMenuItemSupported(item, chainId)),
    // },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config