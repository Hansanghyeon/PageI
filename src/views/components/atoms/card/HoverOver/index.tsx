import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { respondTo } from '@style/_respondTo';

const CardRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 24px;
  ${respondTo.sm`
    width: auto;
    margin-bottom: 0;
  `};
`;

const CardInfo = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transform: translateY(calc(100% - 87px));
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  text-align: left;

  .header {
    font-family: 'Playfair Display', serif;
  }
  p {
    opacity: 0;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    margin-top: 10px;
    margin-bottom: 0.3em;
    text-align: right;
  }

  * {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
  }
`;
const CardBg = styled.div<imgSrc>`
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: calc(100% + 40px);
  height: calc(100% + 40px);
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
  background-image: url(${({ imgSrc }) => imgSrc});
  transform: translateX(0px) translateY(0px);
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 480px;
  max-height: 320px;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  overflow: hidden;
  &:hover {
    background-color: #fff;
  }
  &.reset {
    transform: rotateY(0deg) rotateX(0deg) !important;
    transition: all 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
`;

const CardWrap = styled.div`
  --hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
  width: 90%;
  height: 180px;
  flex: none;
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  ${respondTo.sm`
    flex: 0 0 480;
    width: 480px;
    height: 320px;
  `};
  &:hover {
    ${CardInfo} {
      transform: translateY(0);
      transition: 0.6s var(--hoverEasing);
      &:after {
        transition: 5s var(--hoverEasing);
        opacity: 1;
        transform: translateY(0);
      }
      p {
        opacity: 1;
        transition: 0.6s var(--hoverEasing);
      }
    }
    ${CardBg} {
      opacity: 0.8;
      transition: 0.6s var(--hoverEasing), opacity 5s var(--hoverEasing);
      box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
`;

interface State {
  width: number;
  height: number;
  mouseX: number;
  mouseY: number;
  mouseLeaveDelay: ReturnType<typeof setTimeout>;
  cardStyleReset: boolean;
}
interface imgSrc {
  imgSrc: string;
}
export interface Props extends imgSrc {
  title: string;
  content: string;
}
const HoverOverCard = ({ imgSrc, title, content }: Props) => {
  const CardRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(0);
  const [cardStyleReset, setCardStyleReset] = useState(false);
  const useStates: State = {
    width,
    height,
    mouseX,
    mouseY,
    mouseLeaveDelay,
    cardStyleReset,
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { current }: any = CardRef;
    setMouseX(e.pageX - current.offsetLeft - useStates.width / 2);
    setMouseY(e.pageY - current.offsetTop - useStates.height / 2);
  };

  const handleMouseEnter = () => {
    clearTimeout(useStates.mouseLeaveDelay);
    setCardStyleReset(false);
  };

  const handleMouseLeave = () => {
    setMouseLeaveDelay(
      setTimeout(() => {
        setCardStyleReset(true);
      }, 1000),
    );
  };

  const cardBgTransform = () => {
    const rX = (mouseX / width) * 30;
    const rY = (mouseY / height) * -30;
    return { transform: `translateX(${rX}px) translateY(${rY}px)` };
  };
  const cardStyle = () => {
    const rX = (mouseX / width) * 40;
    const rY = (mouseY / height) * -40;
    return { transform: `rotateY(${rX}deg) rotateX(${rY}deg)` };
  };

  useEffect(() => {
    const CardEl: any = CardRef.current;
    setWidth(CardEl.offsetWidth);
    setHeight(CardEl.offsetHeight);
  }, [width, height, mouseX, mouseY, mouseLeaveDelay]);
  return (
    <CardRoot>
      <CardWrap
        ref={CardRef}
        onMouseMove={e => handleMouseMove(e)}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <Card style={cardStyle()} className={cardStyleReset ? 'reset' : ''}>
          <CardBg imgSrc={imgSrc} style={cardBgTransform()} />
          <CardInfo>
            <h1 className="header">{title}</h1>
            <p>{content}</p>
          </CardInfo>
        </Card>
      </CardWrap>
    </CardRoot>
  );
};

export default HoverOverCard;
