import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap/uikit'
import { useTotalValue } from 'state/farms/hooks'
// import { useGetStats } from 'hooks/api'
import { useTranslation } from 'contexts/Localization'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  margin-top:20px;
  
`

const CustomCardBody = styled(CardBody)`
  min-height:120px;
`;

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const tvl = useTotalValue()
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledTotalValueLockedCard>
      <CustomCardBody>
        <Heading size="lg" mb="24px">
          {t('Total Value Locked (TVL)')}
        </Heading>
        {tvl ? (
          <>
            <Heading size="xl">${tvl.toFixed(2)}</Heading>
            <Text color="textSubtle">{t('Across all LPs')}</Text>
          </>
        ) : (
          <Skeleton height={66} />
        )}
      </CustomCardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
