import { PhotoUploadLabel } from '../styleds'

interface PhotoUploadBtnProps {
  onChange: (imgFileList: File[]) => void
}

const PhotoUploadBtn = ({ onChange }: PhotoUploadBtnProps) => {
  return (
    <>
      <PhotoUploadLabel htmlFor="photo-upload" />
      <input
        id="photo-upload"
        type="file"
        multiple
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => {
          onChange([...e.target.files])
        }}
      />
    </>
  )
}

export default PhotoUploadBtn
