import React, { useRef } from 'react';
import styled from 'styled-components';
// Utils
import { respondTo } from '@style/_respondTo';
import { rhythm } from '@style/typography';
// components
import PageTitleText from '@atom/text/title/Page';
import PageDescriptionText from '@atom/text/description/Page';
import PageLabelText from '@atom/text/label/Page';

const Wrap = styled.div`
  display: inline-block;
`;
const WrapInner = styled.div`
  ${respondTo.md`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 8px;
    grid-row-gap: 32px;
  `}
`;
const TitleWrap = styled.div`
  margin-bottom: ${rhythm(1 / 2)};
  ${respondTo.md`
    grid-area: 1 / 1 / 2 / 2;
    align-self: end;
    margin-bottom: 0;
  `};
`;
const DescriptionWrap = styled.div`
  ${respondTo.md`
    grid-area: 2 / 1 / 3 / 3;
  `}
`;
const LabelWrap = styled.div`
  margin-bottom: ${rhythm(1 / 2)};
  ${respondTo.md`
    grid-area: 1 / 2 / 2 / 3;
    justify-self: end;
    align-self: end;
    margin-bottom:0;
  `}
`;

const PageInfo = () => (
  <Wrap>
    <WrapInner>
      <TitleWrap>
        <PageTitleText>Sound spot</PageTitleText>
      </TitleWrap>
      <LabelWrap>
        <PageLabelText>_2020 Team project</PageLabelText>
      </LabelWrap>
      <DescriptionWrap>
        <PageDescriptionText>
          Sound signage film directional speaker
        </PageDescriptionText>
      </DescriptionWrap>
    </WrapInner>
  </Wrap>
);

export default PageInfo;
