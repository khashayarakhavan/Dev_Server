//Libraries
import styled, { css } from "styled-components";
import {rgba} from 'polished';
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";
//Design
import colors from './colors';
import shadows from './shadows.styles';
//Responsive
import {respond} from './responsive';




//Code
export const ScreenContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  ${'' /* height: 100vh; */}
  background-color: ${colors.accent.ochrePale} !important;
`;

const openStyles = css`
  transform: translateX(100px) scale(0.95);
  border-radius: 10vw;
`;

export const Content = styled.div`
  width: 100%;
  border-radius: 0px;
  overflow: hidden;
  background: #210f40;
  transform: translateX(0) scale(1);
  transition: 0.45s ${(p) => p.open && openStyles};
  background-color: ${colors.accent.ochrePale} !important;
`;



export const VegeloperContainer = styled(Element)`
  & > .active {
    background: red !important;
  }
  width: 100%;

  background: #210f40;

  transition: all 0.45s;

  position: relative;
  display: grid;
  background-size: cover;
  background: linear-gradient(
    -180deg,
    rgb(242, 243, 247),
    rgb(242, 223, 247),
    rgb(234, 241, 249),
    rgb(242, 223, 247),
    rgb(242, 223, 237),
    rgb(234, 241, 249)
  );
  background: ${colors.neutrals.light};

  grid-template-rows:
    [first-line] repeat(10, [row-start] min-content [row-end])
    [last-line];



  grid-template-columns:
    [cover-start leftSide-start] 1vw [leftSide-end full-start] 1vw [center-start] repeat(
      8,
      [col-start] minmax(min-content, 1fr) [col-end]
    )
    [center-end] 1vw [full-end rightSide-start]
    1vw
    [rightSide-end cover-end];

  ${respond.mobile.max`
    grid-template-columns: [cover-start leftSide-start] 1vw [leftSide-end full-start] 9vw [center-start] repeat(
      8,
      [col-start] minmax(min-content, 1fr) [col-end]
    ) [center-end] 9vw [full-end rightSide-start]
    1vw
    [rightSide-end cover-end];
  `}

  ${respond.pc.min`
    grid-template-columns: [cover-start leftSide-start] minmax(1vw, 1fr) [leftSide-end full-start] 9vw [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end]) [center-end] 9vw [full-end rightSide-start]
     minmax(1vw, 1fr)
      [rightSide-end cover-end];
  `}
`;
