import styled from '@emotion/styled'
import { WHITE } from './constants/colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${WHITE};

  @media (max-width: 1199px) {
    height: ${window.innerHeight};
  }
`

export const PhotoUploadLabel = styled.label`
  display: inline-block;
  width: 30vw;
  height: 30vw;
  max-width: 50vh;
  max-height: 50vh;
  background: url(${require('svgs/photo_upload.svg')}) no-repeat;
  border: none;
  cursor: pointer;
  background-color: ${WHITE};
`

export const MatchImg = styled.img<{ isLargerWidthThanHeight: boolean }>`
  width: ${({ isLargerWidthThanHeight }) =>
    isLargerWidthThanHeight ? '37vw' : '70vw'};
  height: ${({ isLargerWidthThanHeight }) =>
    isLargerWidthThanHeight ? '70vh' : '37vh'};
  object-fit: contain;
  border: none;
  background-color: ${WHITE};
  cursor: pointer;
`
