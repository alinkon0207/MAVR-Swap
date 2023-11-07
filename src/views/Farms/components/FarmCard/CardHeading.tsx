import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Skeleton } from '@pancakeswap/uikit'
import { NofeeTag } from 'components/Tags'
import { Token } from 'config/constants/types'
import { TokenPairImage, TokenImage } from 'components/TokenImage'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  token: Token
  quoteToken: Token
  isTokenOnly?: boolean
  depositFee?: string
  withdrawFee?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({ lpLabel, multiplier, isCommunityFarm, token, quoteToken, isTokenOnly, depositFee, withdrawFee }) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      {
        isTokenOnly ? <TokenImage token={token} width={64} height={64} /> : 
        <TokenPairImage variant="inverted" primaryToken={token} secondaryToken={quoteToken} width={64} height={64} />
      }  
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{lpLabel.split(' ')[0]}</Heading>
        <Flex justifyContent="center">
          {withdrawFee === '0%' && withdrawFee ==='0%' ? <NofeeTag /> : null }
          {multiplier ? (
            <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
          ) : (
            <Skeleton ml="4px" width={42} height={28} />
          )}
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
