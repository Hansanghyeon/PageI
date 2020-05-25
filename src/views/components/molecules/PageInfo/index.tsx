import React, { useRef } from 'react';
import styled from 'styled-components';
// Utils
import { media } from 'styled-bootstrap-grid';
import { rhythm } from '@style/typography';
// components
import PageTitleText from '@atom/text/title/Page';
import PageDescriptionText from '@atom/text/description/Page';
import PageLabelText from '@atom/text/label/Page';

const Wrap = styled.div`
  display: inline-block;
`;
const WrapInner = styled.div`
  ${media.md`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 8px;
    grid-row-gap: 32px;
  `}
`;
const TitleWrap = styled.div`
  margin-bottom: ${rhythm(1 / 2)};
  ${media.md`
    grid-area: 1 / 1 / 2 / 2;
    align-self: end;
    margin-bottom: 0;
  `};
`;
const DescriptionWrap = styled.div`
  ${media.md`
    grid-area: 2 / 1 / 3 / 3;
  `}
`;
const LabelWrap = styled.div`
  margin-bottom: ${rhythm(1 / 2)};
  ${media.md`
    grid-area: 1 / 2 / 2 / 3;
    justify-self: end;
    align-self: end;
    margin-bottom:0;
  `}
`;

type props = {
  info: {
    title: string;
    label: string;
    description: string;
  };
  color: {
    project: string;
    value: string;
  };
};

const PageInfo = ({ info, color }: props) => {
  const { title, label, description } = info;
  return (
    <Wrap>
      <WrapInner>
        <TitleWrap>
          <PageTitleText color={color}>{title}</PageTitleText>
        </TitleWrap>
        <LabelWrap>
          <PageLabelText color={color}>{label}</PageLabelText>
        </LabelWrap>
        <DescriptionWrap>
          <PageDescriptionText>{description}</PageDescriptionText>
        </DescriptionWrap>
      </WrapInner>
    </Wrap>
  );
};

export default PageInfo;
