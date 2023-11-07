import React, { useEffect, useCallback } from 'react'
import orderBy from 'lodash/orderBy'
import { useWeb3React } from '@web3-react/core'
import nfts from 'config/constants/nfts'
import { useAppDispatch } from 'state'
import { fetchWalletNfts } from 'state/collectibles'
import { useGetCollectibles } from 'state/collectibles/hooks'
import NftCard from './NftCard'
import NftGrid from './NftGrid'
import EasterNftCard from './NftCard/EasterNftCard'
import LotteryNftCard from './NftCard/LotteryNftCard'

/**
 * A map of bunnyIds to special campaigns (NFT distribution)
 * Each NftCard is responsible for checking it's own claim status
 *
 */
const nftComponents = {
  'easter-storm': EasterNftCard,
  'easter-flipper': EasterNftCard,
  'easter-caker': EasterNftCard,
  lottie: LotteryNftCard,
  lucky: LotteryNftCard,
  baller: LotteryNftCard,
}

const NftList = () => {
  const { tokenIds } = useGetCollectibles()
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()

  const handleRefresh = useCallback(() => {
    dispatch(fetchWalletNfts(account))
  }, [dispatch, account])

  useEffect(() => {
    handleRefresh()
  }, [account, handleRefresh])

  return (
    <NftGrid>
      {orderBy(nfts, 'sortOrder').map((nft) => {
        const Card = nftComponents[nft.identifier] || NftCard

        return (
          <div key={nft.name}>
            <Card nft={nft} tokenIds={tokenIds[nft.identifier]} refresh={handleRefresh} />
          </div>
        )
      })}
    </NftGrid>
  )
}

export default NftList
