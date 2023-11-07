import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MAVERICK',
  description:
    'The most popular AMM on BSC by user count! Earn MAVR through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens on a platform you can trust.',
  image: 'http://mavr.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('MAVERICK')}`,
      }
    case '/competition':
      return {
        title: `${t('MAVERICK')}`,
      }
    case '/prediction':
      return {
        title: `${t('MAVERICK')}`,
      }
    case '/farms':
      return {
        title: `${t('MAVERICK')}`,
      }
    case '/pools':
      return {
        title: `${t('MAVERICK')}`,
      }
    case '/lottery':
      return {
        title: `${t('MAVERICK')}`,
      }
    case '/collectibles':
      return {
        title: `${t('MAVERICK')}`,
      }
    case '/ifo':
      return {
        title: `${t('MAVERICK')}`,
      }
    case '/teams':
      return {
        title: `${t('MAVERICK')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('MAVERICK')}`,
      }
    case '/profile':
      return {
        title: `${t('MAVERICK')}`,
      }
    default:
      return null
  }
}
