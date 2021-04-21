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
import fonts from '../../../design/fonts.styles';
import margins from '../../../design/margins.styles';
import { PrussianBlue_To_Orange } from '../../../design/effects.styles';
//Assets
import { ReactComponent as VegeloperLogo } from "../../../assets/SVG/Vegeloper.svg";
import { ReactComponent as WebWeaverLine } from "../../../assets/SVG/WebWeaver-Line.svg";
import {VegeloperContainer} from '../../../pages/vegeloperPage/vegeloper.styles';
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";


export const SectionYoutube = styled(VegeloperContainer)`
 
  grid-column: cover-start / cover-end;

  position: relative;

  margin-bottom: 5rem;

  display: grid;
  justify-content: center;
  align-content: center;
`;
// export const SectionYoutube = styled(VegeloperContainer)`
//   grid-column: cover-start / cover-end;
  
//   position: relative;

//   margin-bottom: 5rem;

//   display: grid;
//   justify-content: center;
//   align-content: center;
// `;


export const YTContainer = styled.div`
  grid-column: full-start / full-end;
  ${respond.tablet.standard`
     grid-column: center-start / center-end;
  `}
  ${respond.pc.standard`
     grid-column: center-start / center-end;
  `}

  position: relative;

  margin-right: 1rem;
  margin-left: 1rem;

  //Design GiantCard
  border-radius: 4vw;
  
  background: white;
`;

export const YT = styled.div`
  width: 100%;
  height: 50vh;
  height: 70vw;

  ${respond.mobile.landscape`
   height: 60vw;
  `}

  ${respond.tablet.standard`
    height: 60vw;
  `}
  ${respond.pc.standard`
    height: 50vw;
  `}

  background: transparent;
  border-radius: 4vw;
  overflow: hidden;

  .player {
    width: 100%;
    height: 100%;
  }
`;

export const YouTubeContainer = styled.div`
  grid-column: center-start / center-end;

  align-self: center;
  justify-self: center;

  position: relative;

  width: 100%;

  padding-bottom: 75%; //16 x 9
  padding-bottom: 56.25%; //16 x 9

  display: flex;
  justify-content: center;

  border-radius: 4vw;
  overflow: hidden;

  ${shadows.mixins.neumorphic.extra};

  .player {
    position: absolute;
    width: 100%;
    height: 100%;
    
  }
`;