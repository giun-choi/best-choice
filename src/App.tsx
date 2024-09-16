import { useState } from 'react'
import { Container } from './styleds'
import PhotoUploadBtn from './components/PhotoUploadBtn'
import Tournament from './components/Tournament'

const App = () => {
  const [fileList, setFileList] = useState<File[]>([])

  return (
    <Container>
      {!fileList.length ? (
        <PhotoUploadBtn
          onChange={(imgFileList) => {
            setFileList(imgFileList)
          }}
        />
      ) : (
        <Tournament imgFileList={fileList} />
      )}
    </Container>
  )
}

export default App
