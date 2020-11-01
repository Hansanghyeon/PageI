// components
import { Container, Row, Col, ImgRow } from './style';
import SectionTitleRow from '@atom/wrap/project/SectionTitleRow';
import SectiontTitleText from '@atom/text/title/Section';
import ColTitle from '@atom/text/title/Col';

const BackgroundSection = () => {
  return (
    <>
      <ImgRow>
        <img src={`${process.env.FILE_SERVER}/info2.png`} alt="" />
      </ImgRow>
      <Container>
        <SectionTitleRow>
          <Col col>
            <SectiontTitleText>[1] Background</SectiontTitleText>
          </Col>
        </SectionTitleRow>
        <Row>
          <Col col>
            <ColTitle>' 잘못된 앉은 자세로 인한 신체적 문제 발생 ‘</ColTitle>
            <p>예) 거북목 증후군, 허리디스크, 골반 비대칭 등..</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BackgroundSection;
