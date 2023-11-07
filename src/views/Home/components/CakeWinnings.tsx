import React from 'react'
// import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'

import { Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'

import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'
import { useTranslation } from 'contexts/Localization'
import { usePriceCakeBusd } from 'state/farms/hooks'

const Block = styled.div`
  margin-bottom: 24px;
`

const CakeWinnings = () => {
  // const { t } = useTranslation()
  // const { account } = useWeb3React()
  // // const { claimAmount } = useTotalClaim()
  // const cakeAmount = getBalanceNumber(claimAmount)
  // const cakePriceBusd = usePriceCakeBusd()
  // const claimAmountBusd = new BigNumber(cakeAmount).multipliedBy(cakePriceBusd).toNumber()

  // if (!account) {
  //   return (
  //     <Text color="textDisabled" style={{ lineHeight: '76px' }}>
  //       {TranslateString(298, 'Locked')}
  //     </Text>
  //   )
  // }

  // return (
  //   <Block>
  //     <CardValue value={cakeAmount} lineHeight="1.5" />
  //     {!cakePriceBusd.eq(0) && <CardBusdValue value={claimAmountBusd} decimals={2} />}
  //   </Block>
  // )
  return <></>
}

export default CakeWinnings
