import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'MAVR',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xD530f257F0DfF5E8EA10Fcc228B198c96E99B368', /* 0xee927B622f18C6a0859a78aBa6156a5afea09678 */
    },
    token: tokens.mavr,
    quoteToken: tokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'MAVR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xCbEdA3E05699522f7eF7aD08F8498365454EF339',
    },
    token: tokens.mavr,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'MAVR-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xD530f257F0DfF5E8EA10Fcc228B198c96E99B368',
    },
    token: tokens.mavr,
    quoteToken: tokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'wBNB',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', /* 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c */
    },
    token: tokens.wbnb,
    quoteToken: tokens.busd,
  },
  {
    pid: 5,
    lpSymbol: 'BUSD',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    token: tokens.busd,
    quoteToken: tokens.busd,
  },
  // {
  //   pid: 6,
  //   lpSymbol: 'IBPT-CAKE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x15f5Aa0D4CB303c93BEedbdaa80694Ed21482418',
  //   },
  //   token: tokens.ibull,
  //   quoteToken: tokens.cake,
  // },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    },
    quoteToken: tokens.wbnb,
    token: tokens.busd,
  },
]

export default farms
