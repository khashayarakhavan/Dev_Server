//Libraries
import styled, {css} from "styled-components";
//Mixins
import mixins from '../../../design/mixins.styles';
//Designs
import fonts from '../../../design/fonts.styles';
import colors from '../../../design/colors';
import sizes from '../../../design/sizes';
import {bubbleGum, bubbleGumScale, hoverOff, ScaleY} from '../../../design/motions.styles';
import {respond} from '../../../design/responsive';
import shadows from '../../../design/shadows.styles';
import events from '../../../design/events.styles';
import {background_change} from '../../../design/motions.styles';
import Lottie from "react-lottie";
//Assets
import {AnimationCreateRobot} from '../../../design/animations.styles';
// import heartSVG from '../../../assets/SVG/heart.svg';
import HeartSVG from '../../../assets/SVG/heart.svg';
import { ReactComponent as MyIcon } from "../../../assets/SVG/heart.svg";



//Code

export const HeroHeaderLeft = styled.div`
  grid-row: 2 / span 1;
  grid-column: center-start / center-end;
  position: relative;
  margin-top: clamp(60px, 20vw, 20vw);
  max-width: 100%;
  z-index: 100;

  text-rendering: optimizeLegibility;
  overflow-wrap: break-word;

  display: grid;
  grid-template-rows: min-content min-content minmax(min-content, 1fr);

  ${respond.tablet.standard`
  margin-top: 0;
   grid-column: center-start / center-end !important;
  `} 
  
  ${respond.pc.standard`
    grid-column: center-start / col-end 4;
    height: 60vh;
    height: 34.375vw;
  `}
`;







export const HeroHeaderRight = styled.div`
  ${'' /* background: ${({popUpOpen}) => popUpOpen ? "red" : "blue"} !important; */}
  ${'' /* transition: background 1s; */}
  ${'' /* background: blue ; */}
  grid-column: center-start / center-end;
  grid-row: 4 / span 1;
  height: 50vh;
  height: min-content;
  height: minmax(50vh, min-content);
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  overflow: hidden !important;
  ${"" /* background: red; */}

  & > * {
    justify-self: flex-start;
    align-self: flex-start;
    overflow: visible !important ;
  }
  svg {
    overflow: visible !important;
  }

  ${respond.tablet.large`
    grid-column: center-start / center-end !important;
  `}
  ${respond.pc.min`
    grid-row: 2 / span 1;
    grid-column: col-start 5 / center-end;
    
    height: 50vh;
    height: 60vh;
    height: 34.375vw;
    padding-bottom: 5vh;   
    ${"" /* margin-top: -5vh; */}
  `}
`;

export const Heading = styled.div`
  position: relative;
  display: block;
  width: 100%;
  overflow-wrap: normal;
  word-break: keep-all;

  color: ${colors.secondary.darkest};
  ${fonts.mixins.heroHeader}
  font-size: 12vw;
  line-height: 1;
  font-style: normal;
  text-rendering: optimizeLegibility;
  letter-spacing: 0px;

  padding-top: clamp(30px, 10vw, 10vw);

  ${respond.pc.standard`
    font-size: clamp(3.9rem, 3.80859375vw, 3.80859375vw);
    line-height: clamp(60px, 5.8593vw, 5.8593vw);  
    line-height: 1;  
    padding-top: clamp(1rem, 5.859375vw, 5.859375vw);
  `}
`;

export const TEXT = styled.span`
  display: block;
  width: 100%;
 
  color: ${colors.neutrals.darkest};
  ${fonts.mixins.text};

  font-family: "Poppins", sans-serif;
  font-size: 7.23vw;
  line-height: clamp(30px, 10vw, 10vw0);
  font-weight: 200;
  font-style: normal;
  letter-spacing: 0px;
  overflow-wrap: break-word;
  word-break: break-word;
  text-rendering: optimizeLegibility;
  
  padding-left: clamp(3px, 0.01vw, 0.01vw); 

  ${respond.pc.standard`
    font-size: 2vw;
    line-height: 1.9;  
   
    padding-left: clamp(3px,0.3vw, 0.3vw);
   
    ${'' /* line-height: clamp(30px, 2.9296vw, 2.9296vw);   */}
  `}

  .love {
    margin-top: 3rem;
  }
`;


export const HeroHeaderLottie = styled(Lottie)`
  background-color: lightgreen;
`;
export const LottieContainer = styled.div`
  height: 40vw;
  height: min-content;
  height: 70vw;
  height: 96vw;
  width: 100%;
  
  ${respond.mobile.max`
    height: 80vw;
  `}
  ${respond.tablet.large`
    height: 70vw !important;
  `}
  ${respond.pc.min`
    height: 32.5vw; 
  `}
`;

// export const ScrollDownCTA = styled.section`
//   ${'' /* grid-column: center-start/ center-end; */}
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
// `;
// export const ArrowContainer = styled.div`
//   margin-top: -2rem;
//   display: flex;
//   position: relative;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   ${'' /* height: 150px; */}
// `;

// export const Arrow = styled.svg`
//    height: 80px;
//   width: 40px;

//   path {
//     stroke: #ffffff;
//     stroke: ${colors.accent.lightest};
//     fill: transparent;
    
//     stroke-width: 4px;
//     animation: arrowDown 2s infinite; 
//   }
//   path.a1 {
//     animation-delay: -0.5s;
//   }

//   @keyframes arrowDown /*Safari and Chrome*/ {
//     0% {
//       opacity: 0;
//       transform: translateY(10px);
//     }
//     80% {
//       opacity: 1;
//       transform: translateY(50px);
//     }
//     100% {
//       opacity: 0;
//       transform: translateY(50px);
//     }
//   }
// `;


export const Behind = styled.span`
  z-index: 5 !important;
  position: relative;
  ${"" /* position: fixed; */}
  ${"" /* z-index: 100 !important; */}
  ${"" /* color: pink; */}
`;
export const Front = styled.span`
  z-index: 15 !important;
  position: relative;
  ${"" /* position: fixed; */}
  ${"" /* z-index: 100 !important; */}
  ${"" /* color: pink; */}
`;

export const Skill_1 = styled.span`
  ${events.mixins.onHover.palePink};
  ${mixins.flex.inlineCenter};
  ${'' /* flex: 0 0 30%; */}
  ${'' /* flex: 0 0 20%; //before */}
  animation: ${background_change(colors.palePink)} 3s 2s infinite;
  ${'' /* width: 60px;
  height: 50px; */}

  &:hover {
    background-color: ${colors.palePink};
  }
`;

export const Skill_2 = styled.span`
  ${events.mixins.onHover.palePink};
  ${mixins.flex.inlineCenter};
  ${'' /* flex: 0 0 30%; 
  flex: 0 0 25%; // before */}
  animation: ${background_change(colors.paleYellow)} 3s 3.5s infinite;
  &:hover {
    background-color: ${colors.paleYellow};
  }
  ${"" /* width: 60px;
  height: 50px; */}
  ${"" /* &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10px;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  } */}
`;

export const Skill_3 = styled.span`
  ${events.mixins.onHover.palePink};
  ${mixins.flex.inlineCenter};
  ${'' /* flex: 0 0 30%;
  flex: 0 0 19.75%; //before */}
  ${'' /* line-height: 10rem; */}
  
 
  
  animation: ${background_change(colors.paleBlue)} 3s 5s infinite;
  ${"" /* width: 60px;
  height: 50px; */}

  &:hover {
    background-color: ${colors.paleBlue};
  }
`;
export const SkillTotal = styled.div`
  display: flex;
  word-break: normal;
  justify-content: space-between;
  align-items: center;
  width: clamp(180px, 60vw, 60vw);
  width: 100%;
  width: 93%;
  ${'' /* flex-wrap: nowrap; */}
  ${'' /* overflow-wrap: normal; */}

  & > * {
    height: clamp(20px, 6.66666vw, 6.66666vw);
    height: 10vw;
    
    ${respond.pc.min`
      height: clamp(20px, 1.95312vw, 1.95312vw);
      height: clamp(40px, 3.90625vw, 3.90625vw);
    `}
    border-radius: clamp(5px, 1.66666vw, 1.66666vw);
  }

  ${respond.pc.min`
     width: clamp(180px, 17.578vw, 17.578vw);
     width: clamp(281px, 27.44140625vw, 27.44140625vw);
  `}
`;




export const BackgroundFigure = styled.div`
  transition: all 0.5s;
  ${"" /* animation: ${hoverOff} 1s infinite linear; */}
  animation: ${hoverOff} 1s infinite linear;
  animation: ${ScaleY} 1s infinite linear;
  animation: ${bubbleGumScale} 2.5s infinite linear;
  animation: ${bubbleGumScale} 4.5s infinite linear;
  position: absolute;
  width: 100%;
  height: clamp(5.6rem, 18.333vw, 18.333vw);
  ${respond.pc.min`
    height: clamp(56px, 5.4687vw, 5.4687vw);
    
  `}
  z-index: -1;
  background-color: ${colors.accent.ochrePale};
  background-color: ${colors.accent.lightest};
  border-top-right-radius: 130%;
  border-bottom-right-radius: 150%;
  border-top-left-radius: 180%;
  border-bottom-left-radius: 140%;
`;

export const Button = styled.div`
  position: relative;

  justify-self: flex-start;
  align-self: flex-start;
 
  margin-top: 6.666666vw;
  ${'' /* margin-bottom: clamp(30px, 3.33333vw, 3.33333vw); */}
  ${'' /* margin-left: clamp(50px, 16.666666vw, 16.666666vw); */}
  margin-left: clamp(3px, 1vw, 1vw);
  width: clamp(129.467px, 43.155666vw, 43.155666vw);
  height: clamp(5.6rem, 18.666vw, 18.666vw);

  ${'' /* transform: scale(1.2); */}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: none;
  background: transparent;
  
  transition: all 1s;

  text-rendering: optimizeSpeed;
  overflow-wrap: break-word;
  word-break: break-word;

  font-family: "Poppins", sans-serif;
  font-size: clamp(0.9rem, 3vw, 3vw);

  font-weight: 200;
  font-style: normal;
  letter-spacing: 0px;

  border-top-right-radius: 130%;
  border-bottom-right-radius: 150%;
  border-top-left-radius: 180%;
  border-bottom-left-radius: 140%;

  cursor: pointer;

  &:hover {
    & ${BackgroundFigure} {
      ${"" /* animation: ${bubbleGum} 2.5s infinite linear; */}
      animation: ${bubbleGumScale} 2.5s infinite linear;
      background-color: ${colors.secondary.darkest};
    }
  }

  &:active {
    & ${BackgroundFigure} {
      animation: ${bubbleGum} 2.5s infinite linear;
      animation: ${bubbleGumScale} 2.5s infinite linear;
      background-color: ${colors.secondary.darkest};
    }
    transform: scale(0.95) translateY(5px);

    ${respond.pc.min`
    transform: scale(1.1) translateY(5px);
    `}

    outline: none;
  }

  ${respond.mobile.max`
    ${'' /* margin-left: 3px;   
    margin-left: clamp(35px, 5.833333vw, 5.833333vw);    */}
  `}

  ${respond.pc.min`
  transform: scale(1.2);
  width: clamp(129.467px, 12.64326vw, 12.64326vw);
  height: clamp(5.6rem, 5.4687vw, 5.4687vw);
  ${"" /* padding-left: 0.5vw; */}
  font-size: clamp(1.56rem, 1.5234375vw, 1.5234375vw);
  font-size: clamp(0.9rem, 0.87890vw, 0.87890vw);

  margin-top: clamp(20px, 1.95312vw, 1.95312vw);
  margin-bottom: clamp(10px, 0.97656vw, 0.97656vw);
  margin-left: clamp(32px, 3.125vw, 3.125vw);
  margin-left: 15px;
  margin-left: 16px;
  margin-left: clamp(16px, 1.5625vw, 1.5625vw);
  `}


  p {
    padding-left: clamp(0.9rem, 3vw, 3vw);
    align-self: flex-start;
    background: transparent;
    ${respond.pc.min`
       padding-left: clamp(0.9rem, 0.87890vw, 0.87890vw);
    `}
  }

  span {
    font-family: "Rubik Mono One", Cambria, "Times New Roman", Times, sans-serif;
    font-weight: 400;
    color: ${colors.neutrals.light};
  }

  &,
  &:link,
  &:visited {
    color: ${colors.neutrals.lighter};
    text-transform: uppercase;
    text-decoration: none;
  }
  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10px;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

export const HeroHeaderContainer = styled.header`
  grid-column: center-start / center-end;
  height: 90vh;
  justify-items: start;
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr [col-end]);
`;


export const Heart = styled(HeartSVG)`
  width: 24px;
  height: 24px;
`;
export const SvgIcon = styled(MyIcon)`
  position: absolute;
  z-index: 10000000;
  width: clamp(1.8rem, 6vw, 6vw);
  height: clamp(1.8rem, 6vw, 6vw);
  ${respond.pc.min`
    width: clamp(1.8rem, 1.7578vw, 1.7578vw);
    height: clamp(1.8rem, 1.7578vw, 1.7578vw);
  `}
  ${"" /* right: clamp(0.9rem, 3vw, 3vw); */}
  top: clamp(1rem, 3.333vw, 3.333vw);
  right: clamp(0.7rem, 2.333333vw, 2.33333vw);
  ${respond.pc.min`
    top: clamp(1rem, 0.97656vw, 0.97656vw);
    right: clamp(0.5rem, 0.13671875vw, 0.13671875vw);
  `}
  fill: ${colors.neutrals.lightest};
`;

export const CustomSVG = styled.iframe`
  width: 7px;
  height: 7px;
  fill: ${colors.secondary.darkest};
  color: blue;
`;

export const NewSVG = styled.svg`
  width: 3px;
  height: 3px;
  fill: currentColor;
  fill: ${colors.secondary.darkest};
`;