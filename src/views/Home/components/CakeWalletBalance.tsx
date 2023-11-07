import React from 'react'
import { Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { BigNumber } from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { usePriceCakeBusd } from 'state/farms/hooks'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const CakeWalletBalance = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const cakeBalance = useTokenBalance(getCakeAddress())
  const cakeUserBalance = cakeBalance.balance ? getBalanceNumber(cakeBalance.balance) : 0
  const cakePriceBusd = usePriceCakeBusd()
  const busdBalance = cakePriceBusd.times(cakeUserBalance)

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '54px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={cakeUserBalance} decimals={4} fontSize="24px" lineHeight="36px" />
      {!cakePriceBusd.eq(0) ? <CardBusdValue value={busdBalance.toNumber()} /> : <br />}
    </>
  )
}

export default CakeWalletBalance
