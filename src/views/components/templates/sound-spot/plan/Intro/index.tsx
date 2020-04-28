import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
// Utils
import { respondTo } from '@style/_respondTo';
import { rhythm } from '@style/typography';
// Components
import PageInfo from '@molecule/PageInfo';
import PageDivider from '@atom/divider/Page';
import ImageWrap from '@atom/wrap/Image';
import SectionWrap from '@atom/wrap/project/Section';
import SectionTitleRow from '@atom/wrap/project/SectionTitleRow';

const WrapRoot = styled(SectionWrap)`
  font-size: ${rhythm(1 / 3)};
  ${respondTo.md`
    font-size: ${rhythm(1 / 2)};
  `};
`;

const BodyRow = styled(Row)`
  margin-bottom: ${rhythm(2)};
  ${respondTo.md`
    margin-bottom: ${rhythm(4)};
  `};
`;

const PlanIntroSection = () => {
  const infoProps = {
    info: {
      title: 'Sound spot',
      label: '_2020 Team project',
      description: 'Sound signage film directional speaker',
    },
    color: {
      project: 'soundSpot',
      value: '$denim',
    },
  };
  return (
    <>
      <ImageWrap>
        <Container>
          <img src="https://wp.kihyeon.page/wp-content/uploads/project/sound-spot/프론트-뷰_최종본-min.png" />
        </Container>
      </ImageWrap>
      <WrapRoot>
        <SectionTitleRow>
          <Col col>
            <PageInfo {...infoProps} />
          </Col>
        </SectionTitleRow>
        <BodyRow>
          <Col col={12} lg={9}>
            <p>
              With various kind of visual contents, TV has been essential
              domestic appliances in our home. But, At the same time, There are
              some problems when we are watching TV. So, Through This project,
              We suggest solution about problems occur during watching TV by
              utilizing sound signage speaker technology.
            </p>
            <PageDivider />
            <p>
              시청각 컨텐츠가 대중화면서, TV는 가정 내 필수 가전이 됨과 동시에
              그에따른 다양한 불편함 또한 발생해왔습니다. 본 프로젝트는 Sound
              signage 스피커의 기술을 활용해 TV시청 시 발생하는 문제점을
              효율적으로 해결하고자 진행되었습니다.
            </p>
          </Col>
        </BodyRow>
        <Row>
          <Col col={12} lg={9}>
            <p>Designed by Kihyeon Kim / Seungmin Kwon / Hyomin Lee</p>
          </Col>
        </Row>
      </WrapRoot>
    </>
  );
};

export default PlanIntroSection;
