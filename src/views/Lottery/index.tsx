import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, Flex, Heading, Skeleton } from '@pancakeswap/uikit'
import { LotteryStatus } from 'config/constants/types'
import PageSection from 'components/PageSection'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { useFetchLottery, useLottery } from 'state/lottery/hooks'
import {
  TITLE_BG,
  GET_TICKETS_BG,
  FINISHED_ROUNDS_BG,
  FINISHED_ROUNDS_BG_DARK,
  CHECK_PRIZES_BG,
} from './pageSectionStyles'
import useGetNextLotteryEvent from './hooks/useGetNextLotteryEvent'
import useStatusTransitions from './hooks/useStatusTransitions'
import Hero from './components/Hero'
import NextDrawCard from './components/NextDrawCard'
import Countdown from './components/Countdown'
import HistoryTabMenu from './components/HistoryTabMenu'
import YourHistoryCard from './components/YourHistoryCard'
import AllHistoryCard from './components/AllHistoryCard'
import CheckPrizesSection from './components/CheckPrizesSection'
import HowToPlay from './components/HowToPlay'
import useShowMoreUserHistory from './hooks/useShowMoreUserRounds'

const LotteryPage = styled.div`
  min-height: calc(100vh - 64px);
  height: 100vh;
`

const Lottery = () => {
  useFetchLottery()
  useStatusTransitions()
  const { t } = useTranslation()
  const { isDark, theme } = useTheme()
  const {
    currentRound: { status, endTime },
  } = useLottery()

  console.log('debug lot endtime', endTime)
  const [historyTabMenuIndex, setHistoryTabMenuIndex] = useState(0)
  const endTimeAsInt = parseInt(endTime, 10)
  const { nextEventTime, postCountdownText, preCountdownText } = useGetNextLotteryEvent(endTimeAsInt, LotteryStatus.OPEN)
  const { numUserRoundsRequested, handleShowMoreUserRounds } = useShowMoreUserHistory()

  return (
    <LotteryPage>
      <PageSection index={1} hasCurvedDivider={false} background="transparent">
        <Hero />
      </PageSection>
      <PageSection
        containerProps={{ style: { marginTop: '-30px' } }}
        concaveDivider
        clipFill={{ light: '#7645D9' }}
        dividerPosition="top"
        index={2}
        hasCurvedDivider={false}
        background="transparent"
      >
        <Flex alignItems="center" justifyContent="center" flexDirection="column" pt="24px">
          {status === LotteryStatus.OPEN && (
            <Heading scale="xl" color="#ffffff" mb="24px" textAlign="center">
              {t('Get your tickets now!')}
            </Heading>
          )}
          <Flex alignItems="center" justifyContent="center" mb="48px">
            {nextEventTime && (postCountdownText || preCountdownText) ? (
              <Countdown
                nextEventTime={nextEventTime}
                postCountdownText={postCountdownText}
                preCountdownText={preCountdownText}
              />
            ) : (
              <Skeleton height="41px" width="250px" />
            )}
          </Flex>
          <NextDrawCard />
        </Flex>
      </PageSection>
      <PageSection hasCurvedDivider={false} index={2} background="transparent">
        <CheckPrizesSection />
      </PageSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        hasCurvedDivider={false}
        index={2}
        background="transparent"
      >
        <Flex width="100%" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading mb="24px" scale="xl">
            {t('Finished Rounds')}
          </Heading>
          <Box mb="24px">
            <HistoryTabMenu
              activeIndex={historyTabMenuIndex}
              setActiveIndex={(index) => setHistoryTabMenuIndex(index)}
            />
          </Box>
          {historyTabMenuIndex === 0 ? (
            <AllHistoryCard />
          ) : (
            <YourHistoryCard
              handleShowMoreClick={handleShowMoreUserRounds}
              numUserRoundsRequested={numUserRoundsRequested}
            />
          )}
        </Flex>
      </PageSection>
      <PageSection
        dividerPosition="top"
        dividerFill={{ light: theme.colors.background }}
        clipFill={{ light: '#9A9FD0', dark: '#66578D' }}
        index={2}
        hasCurvedDivider={false}
        background="transparent"
      >
        <HowToPlay />
      </PageSection>
    </LotteryPage>
  )
}

export default Lottery
