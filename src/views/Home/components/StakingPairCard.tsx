import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton } from '@pancakeswap/uikit'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`

const StakingPairCard = () => {
  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="contrast" size="lg" paddingBottom="10px">
          Staking Pairs
        </Heading>
        
        <Flex >
          <img style={{"paddingRight":"10px", "height":"55px"}} src="/images/new/img4.png" alt="1"/>
          <img style={{"paddingRight":"10px", "height":"55px"}} src="/images/new/img6.png" alt="2"/>
          <img style={{"paddingRight":"10px", "height":"55px"}} src="/images/new/chronic_yield.png" alt="3"/>
        </Flex>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default StakingPairCard
