import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
// Components

export const Section = styled.div`
  background-image: url(${process.env.FILE_SERVER}/kakaotalk_photo_2019-05-25-13-58-27.jpeg);
  background-size: cover;
  min-height: 100vh;
`;

export const InnerSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 120px;
  padding-bottom: 120px;
  ${media.sm`
    padding-top: 100px;
    padding-bottom: 200px;
  `};

  > a {
    width: 100%;
    ${media.sm`
      width: auto;
    `};
  }
`;
