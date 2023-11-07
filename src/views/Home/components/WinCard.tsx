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

const WinCard = () => {
  const lotteryPrize = 5

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="contrast" size="sm" paddingBottom="10px">
          Listed On
        </Heading>
        
        <Flex >
          <img style={{"paddingRight":"10px"}} src="/images/new/img2.png" alt="1"/>
          <img style={{"paddingRight":"10px"}} src="/images/new/img3.png" alt="2"/>
          <img style={{"paddingRight":"10px"}} src="/images/new/img5.png" alt="3"/>
        </Flex>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default WinCard
