export type ImgStatus = { id: string; isWinner: boolean }

export type PlayerImg = ImgStatus & {
  dataURL: string
}

export interface Match {
  playerA: PlayerImg
  playerB: PlayerImg
}
