import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ImgStatus, Match } from './types'
import { getDataURL } from './utill'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number
    height: number
  }>({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export const useTournament = () => {
  const [fileMap, setFileMap] = useState(new Map<string, File>())
  const [matchFileList, setMatchFileList] = useState<ImgStatus[]>([])
  const [match, setMatch] = useState<Match | null>(null)
  const [matchCount, setMatchCount] = useState<number | null>(null)
  const [finalWinnerDataURL, setFinalWinnerDataURL] = useState<string | null>(
    null
  )

  const MATCHING_COUNT = 2

  const hasImgFiles = fileMap.size > 0
  const round = matchFileList.length
    ? Math.ceil(matchFileList.length / 2)
    : null

  const initMatch = async (matchCount: number) => {
    if (!matchCount || !matchFileList.length) {
      return
    }

    if (matchFileList.length < matchCount) {
      setMatchFileList((prev) => prev.filter(({ isWinner }) => isWinner))
      setMatchCount(MATCHING_COUNT)
      return
    }

    const matchFiles = matchFileList.filter(
      (_, idx) => matchCount - MATCHING_COUNT <= idx && idx < matchCount
    )

    if (matchFiles.length === 2) {
      const matchFileA = matchFiles[0]
      const matchFileB = matchFiles[1]

      setMatch({
        playerA: {
          ...matchFileA,
          dataURL: await getDataURL(fileMap.get(matchFileA.id))
        },
        playerB: {
          ...matchFileB,
          dataURL: await getDataURL(fileMap.get(matchFileB.id))
        }
      })
    }
  }

  const initFileList = (imgFileList: File[]) => {
    const imgFileMap = imgFileList.reduce((map, imgFile) => {
      map.set(uuidv4(), imgFile)
      return map
    }, new Map<string, File>())

    setFileMap(imgFileMap)
    setMatchFileList(
      [...imgFileMap.keys()].map<ImgStatus>((uuid) => ({
        id: uuid,
        isWinner: true
      }))
    )
    setMatchCount(MATCHING_COUNT)
  }

  const chooseWinner = (id: string) => {
    if (match) {
      const { playerA, playerB } = match
      const loserId =
        playerA.id === id ? playerB.id : playerB.id === id ? playerA.id : null

      setMatchFileList((prev) =>
        prev.map((player) =>
          player.id === loserId ? { ...player, isWinner: false } : player
        )
      )
      setMatchCount((prev) => prev + MATCHING_COUNT)
    }
  }

  const initFinalWinnerDataURL = async () => {
    if (matchFileList.length === 1) {
      const finalWinnerId = matchFileList[0].id
      setFinalWinnerDataURL(await getDataURL(fileMap.get(finalWinnerId)))
    }
  }

  const reset = () => {
    setFileMap(new Map<string, File>())
    setMatchFileList([])
    setMatch(null)
    setMatchCount(null)
    setFinalWinnerDataURL(null)
  }

  useEffect(() => {
    initMatch(matchCount)
  }, [matchCount])

  useEffect(() => {
    initFinalWinnerDataURL()
  }, [matchFileList.length])

  return {
    hasImgFiles,
    initFileList,
    match,
    chooseWinner,
    finalWinnerDataURL,
    round,
    reset
  }
}
