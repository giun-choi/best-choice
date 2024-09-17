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
    reset
  } = useTournament()

  return (
    <Container>
      {hasImgFiles ? (
        <Tournament
          match={match}
          chooseWinner={chooseWinner}
          finalWinnerDataURL={finalWinnerDataURL}
        />
      ) : (
        <PhotoUploadBtn onChange={initFileList} />
      )}
      <ResetBtn reset={reset} />
    </Container>
  )
}

export default App
