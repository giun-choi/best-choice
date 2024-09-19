import { ReactNode } from 'react'
import { Match } from '../../types'

export interface TournamentProps {
  match: Match | null
  round: number | null
  chooseWinner: (id: string) => void
  finalWinnerDataURL: string | null
}

export type LoadingContainerProps = Omit<TournamentProps, 'chooseWinner'> & {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  children?: ReactNode
}

export type MatchProps = Omit<TournamentProps, 'match' | 'round'> & {
  match: Match
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isLargerWidthThanHeight: boolean
}
