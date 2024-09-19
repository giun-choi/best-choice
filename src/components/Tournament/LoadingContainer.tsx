import { useEffect } from 'react'
import { LoadingContainerProps } from './types'
import { ClimbingBoxLoader } from 'react-spinners'
import { BLACK } from '../../constants/colors'
import styled from '@emotion/styled'

const RoundContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`

const Loading = ({ round }: { round: number }) => {
  return (
    <>
      <RoundContainer>
        <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          {round === 1 ? '결승' : round === 2 ? '준결승' : `${round}강`}
        </span>
      </RoundContainer>
      <ClimbingBoxLoader color={BLACK} />
    </>
  )
}

const LoadingContainer = ({
  match,
  finalWinnerDataURL,
  loading,
  setLoading,
  children,
  round
}: LoadingContainerProps) => {
  useEffect(() => {
    if (match) {
      const timer = setTimeout(() => setLoading(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [match?.playerA.id, match?.playerB.id, finalWinnerDataURL])

  if (!match) {
    return <Loading round={round} />
  }
  if (loading) {
    return <Loading round={round} />
  }
  return children
}

export default LoadingContainer
