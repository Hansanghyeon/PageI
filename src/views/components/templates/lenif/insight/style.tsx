import styled from 'styled-components';
import { Container as _Container, Row, Col } from 'styled-bootstrap-grid';

const Container = styled(_Container)`
  margin-bottom: 60px;
`;

export const ImgRow = styled.div`
  max-width: 1240px;
  margin: auto;
  margin-bottom: 80px;
  img {
    width: 100%;
  }
`;

export const BgImgRow = styled.div`
  padding: 54px 0;
  background-color: #f4f4f4;
  margin-bottom: 60px;

  ${Container}:last-child {
    margin-bottom: 0;
  }
`;

export { Container, Row, Col };
