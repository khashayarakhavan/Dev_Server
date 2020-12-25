//Libraries
import styled, { css } from "styled-components";
import {rgba} from 'polished';
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";
//Design
import colors from "../../../design/colors";
import shadows from "../../../design/shadows.styles";
//Responsive
import { respond } from "../../../design/responsive";



export const VegeloperContainer = styled(Element)`
  & > .active {
    background: red !important;
  }
  width: 100%;
  ${"" /* padding: 2rem 1.5rem; */}
  ${"" /* border-radius: 40px; */}
  background: #210f40;
  ${"" /* transform: translateX(0) scale(1); */}
  ${"" /* ${(p) => p.open && openStyles}; */}
  transition: all 0.45s;
  ${"" /* ${(p) => p.open && openStyles}; */}
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

  ${"" /* grid-auto-rows: min-content; */}

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
