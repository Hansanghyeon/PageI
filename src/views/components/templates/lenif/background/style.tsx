import styled from 'styled-components';
import { Container as _Container, Row, Col } from 'styled-bootstrap-grid';

export const ImgRow = styled.div`
  max-width: 1240px;
  margin: auto;
  margin-bottom: 80px;
`;

const Container = styled(_Container)`
  margin-bottom: 60px;
`;

export { Container, Row, Col };
