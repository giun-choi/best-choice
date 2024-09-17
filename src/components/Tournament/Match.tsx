import { MatchImg } from '../../styleds'
import styled from '@emotion/styled'
import { BLACK } from '../../constants/colors'
import { useWindowSize } from '../../hooks'
import { MatchProps } from './types'
import { useEffect, useState } from 'react'

const Container = styled.div<{ isLargerWidthThanHeight: boolean }>`
  display: flex;
  flex-direction: ${({ isLargerWidthThanHeight }) =>
    isLargerWidthThanHeight ? 'row' : 'column'};
  align-items: center;
  gap: 10px;
`

const Span = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${BLACK};
`

const Match = ({
  match,
  chooseWinner,
  finalWinnerDataURL,
  setLoading
}: MatchProps) => {
  const { width, height } = useWindowSize()
  const [isLargerWidthThanHeight, setIsLargerWidthThanHeight] = useState(
    width > height
  )
  const { playerA, playerB } = match

  useEffect(() => {
    setIsLargerWidthThanHeight(width > height)
  }, [width, height])

  if (finalWinnerDataURL) {
    return (
      <MatchImg
        isLargerWidthThanHeight={isLargerWidthThanHeight}
        src={finalWinnerDataURL}
      />
    )
  }

  return (
    <Container isLargerWidthThanHeight={isLargerWidthThanHeight}>
      <MatchImg
        isLargerWidthThanHeight={isLargerWidthThanHeight}
        src={playerA.dataURL}
        onClick={() => {
          chooseWinner(playerA.id)
          setLoading(true)
        }}
      />
      <Span>VS</Span>
      <MatchImg
        isLargerWidthThanHeight={isLargerWidthThanHeight}
        src={playerB.dataURL}
        onClick={() => {
          chooseWinner(playerB.id)
          setLoading(true)
        }}
      />
    </Container>
  )
}

export default Match
