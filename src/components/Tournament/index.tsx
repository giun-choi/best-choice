import { useState } from 'react'
import { TournamentProps } from './types'
import LoadingContainer from './LoadingContainer'
import Match from './Match'

const Tournament = (props: TournamentProps) => {
  const [loading, setLoading] = useState(false)
  const { chooseWinner, round, ...others } = props

  return (
    <LoadingContainer {...others} loading={loading} setLoading={setLoading}>
      <Match {...props} setLoading={setLoading} />
    </LoadingContainer>
  )
}

export default Tournament
