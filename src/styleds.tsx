import styled from '@emotion/styled'
import { BLACK, WHITE } from './constants/colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${WHITE};
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
    isLargerWidthThanHeight ? '40vw' : '90vw'};
  height: ${({ isLargerWidthThanHeight }) =>
    isLargerWidthThanHeight ? '90vh' : '40vh'};
  object-fit: contain;
  border: none;
  background-color: ${WHITE};
  cursor: pointer;
`
