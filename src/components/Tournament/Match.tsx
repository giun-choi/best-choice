import { MatchImg } from '../../styleds'
import styled from '@emotion/styled'
import { BLACK } from '../../constants/colors'
import { useWindowSize } from '../../hooks'
import { MatchProps } from './types'
import { useEffect, useState } from 'react'

const Container = styled.div<{ isLargerWidthThanHeight?: boolean }>`
  display: flex;
  flex-direction: ${({ isLargerWidthThanHeight }) =>
    isLargerWidthThanHeight ? 'row' : 'column'};
  align-items: center;
  gap: ${({ isLargerWidthThanHeight }) =>
    isLargerWidthThanHeight ? '3vw' : '3vh'};
`

const Span = styled.span<{ isLargerWidthThanHeight: boolean }>`
  font-size: ${({ isLargerWidthThanHeight }) =>
    isLargerWidthThanHeight ? '5vw' : '5vh'};
  font-weight: bold;
  color: ${BLACK};
`

const Match = ({
  match,
  round,
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
      <Container
        style={{ paddingBottom: !isLargerWidthThanHeight ? '15vh' : undefined }}
        isLargerWidthThanHeight={isLargerWidthThanHeight}
      >
        <h1
          style={{
            fontFamily: 'fantasy',
            fontSize: 'xxx-large'
          }}
        >
          Best Choice
        </h1>
        <MatchImg
          isLargerWidthThanHeight={isLargerWidthThanHeight}
          src={finalWinnerDataURL}
        />
      </Container>
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
      <Span isLargerWidthThanHeight={isLargerWidthThanHeight}>VS</Span>
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
