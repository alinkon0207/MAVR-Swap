import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { getCakeAddress } from 'utils/addressHelpers'
import { useTranslation } from 'contexts/Localization'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const mavrPriceBusd = usePriceCakeBusd()
  const mcap = mavrPriceBusd.times(cakeSupply)
  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {t('MAVR Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{t('Total Token Supply')}</Text>
          {cakeSupply && <CardValue color="#00ffff "  fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total MAVR Burned')}</Text>
          <CardValue color="#00ffff "  fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('MAVR Price')}</Text>
          <CardValue color="#00ffff "  fontSize="14px" decimals={6} value={mavrPriceBusd.toNumber()} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('Market Cap')}</Text>
          <CardValue color="#00ffff "  fontSize="14px" decimals={6} value={mcap.toNumber()} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
