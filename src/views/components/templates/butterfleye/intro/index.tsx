import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
// Utils
import { media } from 'styled-bootstrap-grid';
import { rhythm } from '@style/typography';
// Components
import PageInfo from '@molecule/PageInfo';
import PageDivider from '@atom/divider/Page';
import ImageWrap from '@atom/wrap/Image';
import SectionWrap from '@atom/wrap/project/Section';
import SectionTitleRow from '@atom/wrap/project/SectionTitleRow';

const WrapRoot = styled(SectionWrap)`
  font-size: ${rhythm(1 / 3)};
  ${media.md`
    font-size: ${rhythm(1 / 2)};
  `};
`;

const BodyRow = styled(Row)`
  margin-bottom: ${rhythm(2)};
  ${media.md`
    margin-bottom: ${rhythm(4)};
  `};
  p {
    span {
      ${media.md`
        display: block;
      `};
    }
  }
`;

const IntroSection = () => {
  const infoProps = {
    info: {
      title: 'Butterfleye',
      label: 'Personal project_2018',
      description: 'It is motivated from ‘Butterfly’s beauty.',
    },
    color: {
      project: 'soundSpot',
      value: '$denim',
    },
  };
  return (
    <>
      <ImageWrap fullscreen>
        <img src={`${process.env.FILE_SERVER}/3-3.jpg`} />
      </ImageWrap>
      <WrapRoot>
        <SectionTitleRow>
          <Col col>
            <PageInfo {...infoProps} />
          </Col>
        </SectionTitleRow>
        <BodyRow>
          <Col col>
            <p>
              <span>
                Like a butterfly has an own color and form, Also, We have an own
                beauty and color.
              </span>
              <span>
                There is common thing between people’s psychology of want to
                express their personality through daily fashion and butterfly’s
                wing.
              </span>
              <span>
                So, Through this element, I designed butterfleye and it makes us
                to show our own beauty and color efficiently.
              </span>
            </p>
            <PageDivider />
            <p>
              <span>
                자신만의 아름다운 형(形)과 색(色)을 가진 나비와 같이 우리 또한
                자신만의 고유한 아름다움과 매력을 지니고 있습니다.
              </span>
              <span>
                이처럼 개인의 개성을 표현하고자하는 사람들의 심리와 나비의
                날개가 가진 미(美)에는 공통적인 요소가 존재합니다.
              </span>
              <span>
                자연의 이치와 같은 이러한 요소를 안경에 담아내어 자신만의
                아름다움을 더욱 돋보이게 하고자 하였습니다.
              </span>
            </p>
          </Col>
        </BodyRow>
      </WrapRoot>
    </>
  );
};

export default IntroSection;
