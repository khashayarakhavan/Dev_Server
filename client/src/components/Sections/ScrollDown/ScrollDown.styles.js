//Basics
import { Link } from "react-router-dom";
//Libraries
import styled from "styled-components";
//Mixins
import { mix_containers, mix_flex } from "../../../design/mixins.styles";
//Responsive
import { respond } from "../../../design/responsive";
//Design
import colors from "../../../design/colors";
import sizes from "../../../design/sizes";
import shadows from "../../../design/shadows.styles";
import fonts from "../../../design/fonts.styles";
import margins from "../../../design/margins.styles";
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";


export const ScrollDownCTA = styled(ScrollLink)`
  grid-column: center-start/ center-end;
  ${"" /* justify-self: flex-start; */}
  align-self: flex-start;

  grid-row: 3 / span 1 !important;
  display: flex;
  margin-top: clamp(2rem, 6.66666vw, 6.66666vw);
  ${"" /* width: 100%; */}
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${respond.pc.min`
  margin-top: 0.9765625vw;
  `}
`;
export const ArrowContainer = styled(ScrollLink)`
  margin-top: -2rem;
  cursor: pointer;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${"" /* height: 150px; */}
  :hover > svg path {
    stroke: ${colors.accent.ochreFire};
    stroke: ${colors.accent.darkest};
    stroke: ${colors.accent.lightest};
  }
`;

export const Arrow = styled.svg`
  height: 80px;
  width: 45px;
  transform: scale(0.6);
  ${respond.mobile.small`
  transform: scale(0.7);
  `}
  ${respond.mobile.medium`
  transform: scale(0.75);
  `}
  ${respond.mobile.max`
  transform: scale(1);
  `}

  ${respond.tablet.large`
  transform: scale(1.5) !important;
  `}
  ${respond.pc.min`
  transform: scale(1);
  `}
  ${respond.pc.medium`
  transform: scale(1.3);
  `}
  
  ${respond.pc.large`
  transform: scale(1.5);
  `}
  ${respond.pc.max`
  transform: scale(2.5);
  `}
  
  
  
  path {
    stroke: #ffffff;
   
    stroke: ${colors.accent.lightest};
    stroke: ${colors.accent.ochreFire};
    transition: stroke 0.45s;
    fill: transparent;

    stroke-width: 4px;
    animation: arrowDown 2s infinite;
  }
  path.a1 {
    animation-delay: -0.5s;
  }

  @keyframes arrowDown /*Safari and Chrome*/ {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    80% {
      opacity: 1;
      transform: translateY(50px);
    }
    100% {
      opacity: 0;
      transform: translateY(50px);
    }
  }
`;
