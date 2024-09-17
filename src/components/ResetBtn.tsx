import styled from '@emotion/styled'
import { BLACK, WHITE } from '../constants/colors'

const ResetLabel = styled.label`
  width: 10vw;
  height: 10vw;
  max-width: 10vh;
  max-height: 10vh;
  background: url(${require('svgs/reset.svg')}) no-repeat;
  border: none;
  cursor: pointer;
  background-color: ${WHITE};
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  margin: 10px;
`

interface ResetBtnProps {
  reset: () => void
}

const ResetBtn = ({ reset }: ResetBtnProps) => {
  return (
    <>
      <button
        id="reset"
        type="button"
        style={{ display: 'none' }}
        onClick={() => {
          reset()
        }}
      />
      <ResetLabel htmlFor="reset" />
    </>
  )
}

export default ResetBtn
