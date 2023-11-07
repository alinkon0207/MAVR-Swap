import tokens from './tokens'
import farms from './farms'
import { Ifo, Token } from './types'

const cakeBnbLpToken: Token = {
  symbol: farms[1].lpSymbol,
  address: farms[1].lpAddresses,
  decimals: 18,
}

const ifos: Ifo[] = [
  {
    id: 'test-token',
    address: '0xF67A54142083430399A1a82073AA091826cb6231',
    isActive: true,
    name: 'TOKENNAME',
    poolBasic: {
      saleAmount: '300,000 newb',
      raiseAmount: '$120,000',
      cakeToBurn: '$60,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '700,000 newb',
      raiseAmount: '$210,000',
      cakeToBurn: '$105,000',
      distributionRatio: 0.7,
    },
    currency: cakeBnbLpToken,
    token: tokens.xbpt,
    releaseBlockNumber: 153000000,
    campaignId: '511110000',
    articleUrl: '#',
    tokenOfferingPrice: 0.5,
    version: 2,
  }
]

export default ifos
