// components
import { Container, Row, Col, ImgRow, BgImgRow } from './style';
import SectionTitleRow from '@atom/wrap/project/SectionTitleRow';
import SectiontTitleText from '@atom/text/title/Section';
import ColTitle from '@atom/text/title/Col';

const ProblemSection = () => {
  return (
    <>
      <ImgRow>
        <img src={`${process.env.FILE_SERVER}/info.png`} alt="" />
      </ImgRow>
      <Container>
        <SectionTitleRow>
          <Col col>
            <SectiontTitleText>[2] Problem</SectiontTitleText>
          </Col>
        </SectionTitleRow>
        <Row>
          <Col col>
            <ColTitle>(1)</ColTitle>
            <p>
              올바른 자세 유지를 위한 관련 제품이 시장 내에 상용화 되어있으나,
              대부분 의자와 결합 시 기존 의자 형태에 어울리지 않거나 특정 의자
              구조에는 설치가 제한되는 등의 단점이 있다.
            </p>
          </Col>
        </Row>
      </Container>
      <BgImgRow>
        <Container>
          <Row>
            <Col col>
              <img
                src={`${process.env.FILE_SERVER}/problem-1.png`}
                srcSet={`${process.env.FILE_SERVER}/problem-1@2x.png 2x, ${process.env.FILE_SERVER}/problem-1@3x.png 3x`}
              />
            </Col>
          </Row>
        </Container>
      </BgImgRow>
      <Container>
        <Row>
          <Col col>
            <ColTitle>(2)</ColTitle>
            <p>
              기존 제품은 올바른 앉은 자세를 단기적으로 유도할 수 있지만, 책상
              앞에서의 활동 시간이 길어질수록 사용자의 자세는 점점 흐트러지며
              자신의 잘못된 자세를 인지하지 못한채 나쁜 자세를 지속하게 된다.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProblemSection;
