import { useEffect, useState } from 'react'
import { TournamentProps } from './types'
import LoadingContainer from './LoadingContainer'
import Match from './Match'
import { useWindowSize } from '../../hooks'

const Tournament = (props: TournamentProps) => {
  const { chooseWinner, round, ...others } = props

  const { width, height } = useWindowSize()
  const [loading, setLoading] = useState(true)
  const [isLargerWidthThanHeight, setIsLargerWidthThanHeight] = useState(
    width > height
  )

  useEffect(() => {
    setIsLargerWidthThanHeight(width > height)
  }, [width, height])

  return (
    <LoadingContainer
      {...others}
      round={round}
      loading={loading}
      setLoading={setLoading}
    >
      <Match
        {...others}
        isLargerWidthThanHeight={isLargerWidthThanHeight}
        chooseWinner={chooseWinner}
        setLoading={setLoading}
      />
    </LoadingContainer>
  )
}

export default Tournament
