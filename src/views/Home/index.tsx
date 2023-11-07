import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap/uikit'

import Page from 'components/Layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
// import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import TwitterCard from 'views/Home/components/TwitterCard'
import WinCard from 'views/Home/components/WinCard'
import { useTranslation } from 'contexts/Localization'
import StakingPairCard from './components/StakingPairCard'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  
  const { t } = useTranslation()
  return (
    <Page>
      <Hero>
        <Heading>
          <Text fontSize='70px' color="#11ff00">{t('MAVERICK')}</Text>
        </Heading>
      </Hero>
      <div>
        <Cards>
          <div>
            <CakeStats />
            {/* <TwitterCard /> */}
            <TotalValueLockedCard />
          </div>
          <div>
            <FarmStakingCard />
            
          </div>
        </Cards>
        <CTACards>
          {/* <EarnAPRCard /> */}
          {/* <WinCard /> */}
          {/* <StakingPairCard /> */}
        </CTACards>
      </div>
    </Page>
  )
}

export default Home
