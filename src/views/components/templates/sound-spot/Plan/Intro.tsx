import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
// Components
import PageInfo from '@molecule/PageInfo';
import { rhythm } from '@style/typography';
import PageDivider from '@atom/divider/Page';
import ImageWrap from '@atom/wrap/Image';

const PageInfoRow = styled(Row)``;
const WrapRoot = styled(Container)`
  /* section base style */
  font-size: 18px;
  color: ${({ theme }) => theme.color.styleguid['$blue-grey-two']};
  padding-top: ${rhythm(5.5)};
  padding-bottom: ${rhythm(5.5)};
  ${Row} {
    margin-bottom: ${rhythm(5)};
    &:last-child {
      margin-bottom: 0;
    }
  }
  ${Col} {
    p:last-child {
      margin-bottom: 0;
    }
  }
  ${PageInfoRow} {
    margin-bottom: ${rhythm(4)};
  }
`;

const PlanIntroSection = () => (
  <>
    <ImageWrap>
      <img src="https://source.unsplash.com/collection/9641990/1600x900" />
    </ImageWrap>
    <WrapRoot>
      <PageInfoRow>
        <Col col>
          <PageInfo />
        </Col>
      </PageInfoRow>
      <Row>
        <Col col>
          <p>
            With various kind of visual contents, TV has been essential domestic
            appliances in our home. But, At the same time, There are some
            problems when we are watching TV. So, Through This project, We
            suggest solution about problems occur during watching TV by
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
      </Row>
      <Row>
        <Col col>
          <p>Designed by Kihyeon Kim / Seungmin Kwon / Hyomin Lee</p>
        </Col>
      </Row>
    </WrapRoot>
  </>
);

export default PlanIntroSection;
