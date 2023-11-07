import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.mavr,
    earningToken: tokens.cgold,
    contractAddress: {
      97: '',
      56: '0xef79BE5002F2daA197392d7A4137cb7eadE1afEe',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '5',
  },
]

export default pools
