//Libraries
import styled, {css} from "styled-components";
//Design
import fonts from 'design/fonts.styles';
import colors from 'design/colors';
import {respond} from 'design/responsive';
import {VegeloperContainer} from 'design/containers.styles';

//Code

const zeroMarginStyles = css`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
`;

export const SectionHeading = styled(VegeloperContainer)`
  ${(p) => p.zeroMargin && zeroMarginStyles};

  grid-column: cover-start / cover-end;
  position: relative;
  display: grid;
  height: minmax(250px, auto);
  justify-content: center;
  align-content: center;

  background: transparent !important;

  margin-top: 5vw;
  margin-bottom: 5vw;
  overflow: hidden;
  z-index: 10000;


  ${respond.pc.standard`
  grid-column: cover-start / cover-end;
  `}

  //Rotated Background
  &::after {
    content: "";

    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2500' height='4000' preserveAspectRatio='none' viewBox='0 0 2500 4000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask12466%26quot%3b)' fill='none'%3e%3crect width='1092' height='1092' clip-path='url(%26quot%3b%23SvgjsClipPath12467%26quot%3b)' x='130.02' y='904.04' fill='url(%23SvgjsPattern12468)' transform='rotate(132.18%2c 676.02%2c 1450.04)'%3e%3c/rect%3e%3crect width='787.2' height='787.2' clip-path='url(%26quot%3b%23SvgjsClipPath12469%26quot%3b)' x='180.64' y='2473.43' fill='url(%23SvgjsPattern12470)' transform='rotate(36.38%2c 574.24%2c 2867.03)'%3e%3c/rect%3e%3cpath d='M1226.43 2272.45 L1046.34 1871.92L948.4675961762541 2260.102403823746z' fill='rgba(235%2c 94%2c 40%2c 1)'%3e%3c/path%3e%3crect width='1091.12' height='1091.12' clip-path='url(%26quot%3b%23SvgjsClipPath12471%26quot%3b)' x='861.38' y='-237.43' fill='url(%23SvgjsPattern12472)' transform='rotate(78.02%2c 1406.94%2c 308.13)'%3e%3c/rect%3e%3crect width='648' height='648' clip-path='url(%26quot%3b%23SvgjsClipPath12473%26quot%3b)' x='592.25' y='749.75' fill='url(%23SvgjsPattern12474)' transform='rotate(38.4%2c 916.25%2c 1073.75)'%3e%3c/rect%3e%3ccircle r='208.33333333333334' cx='203.61' cy='3918.5' fill='rgba(20%2c 51%2c 81%2c 1)'%3e%3c/circle%3e%3cpath d='M1783.86 757.94L1776.48 768.4 1764.65 763.5 1757.27 773.97 1745.43 769.06 1738.05 779.53 1726.22 774.63M1781.63 750.25L1774.25 760.72 1762.42 755.82 1755.04 766.28 1743.21 761.38 1735.83 771.85 1724 766.94' stroke='rgba(253%2c 165%2c 15%2c 1)' stroke-width='2.99'%3e%3c/path%3e%3crect width='180' height='180' clip-path='url(%26quot%3b%23SvgjsClipPath12475%26quot%3b)' x='1786.32' y='-47.51' fill='url(%23SvgjsPattern12476)' transform='rotate(22.51%2c 1876.32%2c 42.49)'%3e%3c/rect%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask12466'%3e%3crect width='2500' height='4000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern12468'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(253%2c 165%2c 15%2c 1)' fill='none' stroke-width='1.63'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath12467'%3e%3ccircle r='273' cx='676.02' cy='1450.04'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='12.3' height='12.3' patternUnits='userSpaceOnUse' id='SvgjsPattern12470'%3e%3cpath d='M6.15 1L6.15 11.3M1 6.15L11.3 6.15' stroke='rgba(235%2c 94%2c 40%2c 1)' fill='none' stroke-width='2.81'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath12469'%3e%3ccircle r='196.8' cx='574.24' cy='2867.03'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='1091.12' height='11.86' patternUnits='userSpaceOnUse' id='SvgjsPattern12472'%3e%3crect width='1091.12' height='5.93' x='0' y='0' fill='rgba(235%2c 94%2c 40%2c 1)'%3e%3c/rect%3e%3crect width='1091.12' height='5.93' x='0' y='5.93' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath12471'%3e%3ccircle r='272.78' cx='1406.94' cy='308.13'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='648' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern12474'%3e%3crect width='648' height='3' x='0' y='0' fill='rgba(20%2c 51%2c 81%2c 1)'%3e%3c/rect%3e%3crect width='648' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath12473'%3e%3ccircle r='162' cx='916.25' cy='1073.75'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern12476'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(20%2c 51%2c 81%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath12475'%3e%3ccircle r='45' cx='1876.32' cy='42.49'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    background-position: -90% -90%;
    background-position: -70% -70%;
    background-position: -10% -10%;
    ${"" /* background-position: center; */}

    ${
      "" /* -webkit-transform: rotate(30deg);
    -moz-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    -o-transform: rotate(30deg); */
    }
    transform: translateX(0%) rotate(30deg) scale(1.7);
    ${"" /* transform: skewY(20deg); */}
    background-repeat: no-repeat;
    background-repeat: repeat;
    opacity: 0.2;
    background-size: 100% 280%;
    background-size: cover;
    background-size: contain;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

export const HeadingContainer = styled.div`
  grid-column: center-start / center-end;
  ${"" /* height: 40vh; */}
  ${"" /*  */}
background: transparent !important;
  position: relative;
${'' /* 
  margin-right: 2rem;
  margin-left: 2rem; */}

  ${'' /* display: grid;
  justify-content: center;
  align-content: center; */}

  //Design GiantCard
  ${"" /* background: white; */}
  ${"" /* border-radius: 40px; */}
`;

export const Heading = styled.div`
  position: relative;
  width: 100%;
  
  text-align: center;

  padding-top: clamp(30px, 10vw, 10vw);
  padding-bottom: clamp(30px, 10vw, 10vw);

  ${respond.pc.standard`
  padding: 3rem 5rem 1rem;
  ;`}

  h1 {
    ${fonts.mixins.heroHeader}
    font-size: 12vw;
    font-size: 10vw;
    line-height: 1;
    letter-spacing: 0px;
    text-rendering: optimizeLegibility;
    font-style: normal;
    color: ${colors.secondary.darkest};

    ${respond.pc.min`
    font-size: clamp(3.9rem, 3.9vw, 3.9vw);
    overflow-wrap: normal;
    word-break: break-word;
    line-height: 1;  
    text-align: center;
    `}
  }

  h4 {
    ${fonts.mixins.text};

    color: ${colors.neutrals.darkest};
    letter-spacing: 0px;
    font-style: normal;

    text-rendering: optimizeLegibility;
    line-height: clamp(30px, 10vw, 10vw);
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-size: 7.23vw;
    font-size: 6.23vw;

    ${respond.pc.min`
    font-size: 2vw;
    text-align: center;
    line-height: clamp(30px, 2.9296vw, 2.9296vw);  
  `}
  }
`;