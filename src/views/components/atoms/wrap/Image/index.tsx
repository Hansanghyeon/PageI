import styled, { css } from 'styled-components';

export interface ImageWrapType {
  bgColor?: string;
  fullscreen?: boolean;
}

const nonFullscreen = css`
  img {
    width: 100%;
    margin-bottom: 0;
  }
`;

const onFullscreen = css`
  height: 100vh;
  min-height: 56%;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ImageWrap = styled.div<ImageWrapType>`
  text-align: center;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#dbdbdb')};
  font-size: 0;
  line-height: 0;
  ${({ fullscreen }) => (fullscreen ? onFullscreen : nonFullscreen)};
`;

export default ImageWrap;
