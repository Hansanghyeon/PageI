import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import { HeroImgWrap, WrapRoot, BodyRow, IframeWrap } from './index.style';
// Components
import PageInfo from '@molecule/PageInfo';
import PageDivider from '@atom/divider/Page';
// import ImageWrap from '@atom/wrap/Image';
// import SectionWrap from '@atom/wrap/project/Section';
import SectionTitleRow from '@atom/wrap/project/SectionTitleRow';

const IntroSction = () => {
  const infoProps = {
    info: {
      title: 'MODULAR',
      label: 'Personal project_2019',
      description: 'SMART INDUSTRIAL SAFETY GOGGLE',
    },
    color: {
      project: 'modular',
      value: '$main',
    },
  };
  return (
    <>
      <HeroImgWrap>
        <Container>
          <Row>
            <Col col>
              <img src={`${process.env.FILE_SERVER}/modulegoggle.jpg`} />
            </Col>
          </Row>
        </Container>
      </HeroImgWrap>
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
                MODULAR is smart safety goggle for outside worker who working in
                construction site.
              </span>
              <span>
                Unlike smart factory what is the most fundamental trend in the
                industrial site,
              </span>
              <span>
                There are many issues what has to be improved in the outside
                working environment.
              </span>
              <span>
                So, Through this project, I'm suggesting the module type smart
                safety goggle named MODULAR.
              </span>
            </p>
            <PageDivider />
            <p>
              <span>
                MODULAR는 건설 그리고 설비와 같은 외부 산업 현장에서 종사하는
                야외 근로자를 위한
              </span>
              <span>
                모듈형 스마트 안전 고글입니다. 현 산업 현장의 가장 핵심적인
                트렌드 중 하나인 실내
              </span>
              <span>
                스마트 팩토리와는 달리, 실외 근로자의 근무 환경은 여전히 많은
                개선이 필요한 실정입니다.
              </span>
              <span>
                본 프로젝트를 통해, 야외 현장 근로자에게 보다 더 나은 근무
                효율과 작업 환경을 제공 할 수 있는 스마트 안전 고글을 제시하고자
                합니다.
              </span>
            </p>
          </Col>
        </BodyRow>
        <Row>
          <Col col>
            <IframeWrap>
              <iframe
                src="https://player.vimeo.com/video/379961908"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </IframeWrap>
          </Col>
        </Row>
      </WrapRoot>
    </>
  );
};

export default IntroSction;
