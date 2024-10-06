import { MatchImg } from '../../styleds'
import styled from '@emotion/styled'
import { MatchProps } from './types'
import { BLACK } from '../../constants/colors'

const Container = styled.div<{ isLargerWidthThanHeight?: boolean }>`
  display: flex;
  flex-direction: ${({ isLargerWidthThanHeight }) =>
    isLargerWidthThanHeight ? 'row' : 'column'};
  align-items: center;
  gap: ${({ isLargerWidthThanHeight }) =>
    isLargerWidthThanHeight ? '2vw' : '2vh'};
`

export const Span = styled.span<{ isLargerWidthThanHeight: boolean }>`
  font-size: ${({ isLargerWidthThanHeight }) =>
    isLargerWidthThanHeight ? '4vw' : '4vh'};
  font-weight: bold;
  color: ${BLACK};
`

const Match = ({
  match,
  chooseWinner,
  finalWinnerDataURL,
  setLoading,
  isLargerWidthThanHeight
}: MatchProps) => {
  const { playerA, playerB } = match

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
