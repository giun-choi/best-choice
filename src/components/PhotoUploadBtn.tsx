import { useState } from 'react'
import { PhotoUploadLabel } from '../styleds'
import { RED } from '../constants/colors'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

interface PhotoUploadBtnProps {
  onChange: (imgFileList: File[]) => void
}

const PhotoUploadBtn = ({ onChange }: PhotoUploadBtnProps) => {
  const [isMoreThanTwoFileList, setIsMoreThanTwoFileList] = useState(false)

  return (
    <Container>
      <div>
        <PhotoUploadLabel htmlFor="photo-upload" />
        <input
          id="photo-upload"
          type="file"
          multiple
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => {
            const fileList = [...e.target.files]

            if (!(fileList.length > 1)) {
              setIsMoreThanTwoFileList(true)
              return
            }
            onChange([...e.target.files])
          }}
        />
      </div>
      {isMoreThanTwoFileList ? (
        <p style={{ color: RED, fontWeight: 'bold' }}>
          최소 2개 이상의 사진을 골라주세요.
        </p>
      ) : null}
    </Container>
  )
}

export default PhotoUploadBtn
