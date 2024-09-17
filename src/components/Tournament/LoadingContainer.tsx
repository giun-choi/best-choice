import { useEffect } from 'react'
import { LoadingContainerProps } from './types'
import { ClimbingBoxLoader } from 'react-spinners'
import { BLACK } from '../../constants/colors'

const LoadingContainer = ({
  match,
  finalWinnerDataURL,
  loading,
  setLoading,
  children
}: LoadingContainerProps) => {
  useEffect(() => {
    if (match) {
      const timer = setTimeout(() => setLoading(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [match?.playerA.id, match?.playerB.id, finalWinnerDataURL])

  if (!match) {
    return <ClimbingBoxLoader color={BLACK} />
  }
  if (loading) {
    return <ClimbingBoxLoader color={BLACK} />
  }
  return children
}

export default LoadingContainer
