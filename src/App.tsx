import { Container, MatchImg } from './styleds'
import { useTournament } from './hooks'
import PhotoUploadBtn from './components/PhotoUploadBtn'
import Tournament from './components/Tournament'
import ResetBtn from './components/ResetBtn'

const App = () => {
  const {
    hasImgFiles,
    initFileList,
    match,
    chooseWinner,
    finalWinnerDataURL,
    round,
    reset
  } = useTournament()

  return (
    <Container>
      {hasImgFiles
        ? (
          <>
            <Tournament
              match={match}
              round={round}
              chooseWinner={chooseWinner}
              finalWinnerDataURL={finalWinnerDataURL}
            />
            <ResetBtn reset={reset} />
          </>
        )
        : (
          <PhotoUploadBtn onChange={initFileList} />
        )}
    </Container>
  )
}

export default App
