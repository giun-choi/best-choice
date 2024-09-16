import { useEffect, useState } from 'react'
import { getDataURL } from '../utill'
import { MatchImg } from '../styleds'
import styled from '@emotion/styled'
import { WHITE } from '../constants/colors'
import { useWindowSize } from '../hooks'

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
  color: ${WHITE};
`

interface TournamentProps {
  imgFileList: File[]
}

const Tournament = ({ imgFileList }: TournamentProps) => {
  const { width, height } = useWindowSize()
  const [dataURL, setDataURL] = useState<string | null>(null)
  const isLargerWidthThanHeight = width > height

  const initDataURL = async () => {
    if (imgFileList.length) {
      setDataURL(await getDataURL(imgFileList[0]))
    }
  }

  useEffect(() => {
    initDataURL()
  }, [imgFileList.length])

  return (
    <Container isLargerWidthThanHeight={isLargerWidthThanHeight}>
      <MatchImg
        isLargerWidthThanHeight={isLargerWidthThanHeight}
        src={dataURL}
      />
      <Span>VS</Span>
      <MatchImg
        isLargerWidthThanHeight={isLargerWidthThanHeight}
        src={dataURL}
      />
    </Container>
  )
}

export default Tournament
