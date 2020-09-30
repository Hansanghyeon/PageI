import styled, { css } from 'styled-components';
import {
  media,
  Col as _Col,
  Row as _Row,
  Container as _Container,
} from 'styled-bootstrap-grid';

import * as _SectiontTitleText from '@atom/text/title/Section';
import { rhythm } from '@style/typography';

export const SectiontTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-bottom: ${rhythm(1)};
`;

const Dark_SectiontTitleText = css`
  color: ${({ theme }) => theme.project.modular.$darkTitle};
`;
type sProps = {
  dark?: boolean;
};
export const SectiontTitleText = styled(_SectiontTitleText.default)<sProps>`
  color: ${({ theme }) => theme.project.modular.$main};
  letter-spacing: 0.2em;
  font-size: ${rhythm(1)};
  line-height: 1.4;
  font-weight: 400;
  ${({ dark }) => dark && Dark_SectiontTitleText}
`;

export const Empty = styled.div`
  padding-bottom: ${rhythm(1.5)};
  width: 100%;
  ${media.md`
    padding-bottom: ${rhythm(3)};
  `}
`;

export const Title = {
  main: styled.div`
    color: ${({ theme }) => theme.project.modular.$main};
    font-size: 1.3em;
    margin-bottom: ${rhythm(1)};
    ${media.md`
      font-size: 1.5em;
      margin-bottom: ${rhythm(1.5)};
      `};
    .point {
      font-size: inherit;
      color: ${({ theme }) => theme.project.modular.$point};
    }
  `,
  post: styled.div`
    color: ${({ theme }) => theme.project.modular.$main};
    font-size: 1.3em;
  `,
  point: styled.div`
    color: ${({ theme }) => theme.project.modular.$point};
    font-size: 1.8em;
    margin-bottom: ${rhythm(1.5)};
  `,
  tail: styled.div`
    color: ${({ theme }) => theme.project.modular.$tail};
    font-size: 48px;
    line-height: 1.2em;
  `,
};

export const Text = {
  small: styled.div`
    font-size: 0.9em;
    margin-bottom: 0.3em;
  `,
  round: styled.span`
    background-color: ${({ theme }) => theme.project.modular.$point};
    color: ${({ theme }) => theme.project.modular.$orderColor};
    border-radius: 999px;
    width: 17px;
    height: 17px;
    margin-right: 4px;
    position: relative;
    i {
      position: absolute;
      left: 50%;
      top: 50%;
      font-style: normal;
      transform: translate(-40%, -55%);
    }
  `,
  point: styled.span`
    color: ${({ theme }) => theme.project.modular.$point};
  `,
  tail: styled.div`
    color: ${({ theme }) => theme.project.modular.$tail};
  `,
};

export const Span = styled.span``;
const __Col = styled(_Col)`
  ${media.lg`
    ${Span} {
      display: block;
    }
  `}
`;
export const Col = {
  default: styled(__Col)``,
  SmallGrid: styled(__Col)`
    margin-bottom: ${rhythm(1.5)};
    img {
      margin-bottom: 0;
    }
  `,
  between: styled(__Col)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    ${media.lg`
      text-align: right;
    `}
  `,
};
const RowStyled = styled(_Row)``;
const Row = (props: any) => <RowStyled {...props}>{props.children}</RowStyled>;
Row.bg = styled(_Row)`
  background-color: ${({ theme }) => theme.project.modular.$darkBg};
  color: ${({ theme }) => theme.project.modular.$darkColor};
  ${Title.main}, ${Title.post} {
    color: ${({ theme }) => theme.project.modular.$darkTitle};
  }
  img {
    height: auto;
  }
`;
export { Row };
export const Type = styled.span``;

export const Container = {
  default: styled(_Container)``,
  dark: styled(_Container)`
    background-color: ${({ theme }) => theme.project.modular.$darkBg2};
    color: ${({ theme }) => theme.project.modular.$darkColor};
    img {
      max-width: 900px;
      width: 80%;
      margin-bottom: ${rhythm(4)};
      border-radius: 4px;
    }
  `,
};

export const ListItem = {
  default: styled.div`
    display: flex;
    align-items: center;
    line-height: 1;
  `,
};

export const Img = styled.img`
  width: 100% !important;
  max-width: 100% !important;
  margin-bottom: 0 !important;
  border-radius: 0;
`;

export const ImageWrap = styled.div`
  font-size: 0 !important;
  line-height: 0;
`;
