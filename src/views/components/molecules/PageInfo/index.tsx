import React, { useRef } from 'react';
import styled from 'styled-components';
// components
import PageTitleText from '@atom/text/title/Page';
import PageDescriptionText from '@atom/text/description/Page';
import PageLabelText from '@atom/text/label/Page';

const Wrap = styled.div`
  display: inline-block;
`;
const WrapInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  grid-column-gap: 8px;
  grid-row-gap: 32px;
`;
const TitleWrap = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  align-self: end;
`;
const DescriptionWrap = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`;
const LabelWrap = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  justify-self: end;
  align-self: end;
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
