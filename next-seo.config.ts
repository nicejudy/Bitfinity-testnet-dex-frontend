import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | BitX',
  defaultTitle: 'BitX',
  description:
    'Discover BitX, the leading DEX on Bitfinity Network with the best rewarding in DeFi.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@',
    site: '@',
  },
  openGraph: {
    title: 'BitX - A next evolution DeFi exchange on Bitfinity Network',
    description:
      'The most popular AMM on Bitfinity Network! Earn BITX through yield farming, then stake it in Pools to earn more tokens!',
    images: [{ url: 'https://bitx.finance/logo.png' }],
  },
}
