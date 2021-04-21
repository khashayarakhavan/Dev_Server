//Libraries

import styled, { css } from "styled-components";
import {rgba} from 'polished';
import colors from '../../design/colors';
import shadows from '../../design/shadows.styles';

//Design
import {respond} from '../../design/responsive';
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";
// const openStyles = css`
//   ${'' /* transform: translateX(100px) scale(0.95); */}
//   border-radius: 10vw;
// `;

//Code
// const openStyles = css`
//   border-radius: 10vw;
//   ${"" /* border-radius: 10vw; */}
// `;
export const ScrollLinkCustom = styled(ScrollLink)`
  color: red;
`;

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


export const LeftSide = styled.div`
  grid-column: leftSide-start / leftSide-end;
  grid-row: first-line / last-line;
  background: linear-gradient(
    -180deg,
    rgb(242, 243, 247),
    rgb(242, 223, 247),
    rgb(234, 241, 249),
    rgb(242, 223, 237),
    rgb(242, 223, 227),
    rgb(234, 241, 249)
  );
`;

export const RightSide = styled.div`
  grid-column: rightSide-start / rightSide-end;
  grid-row: first-line / last-line;
  background: linear-gradient(
    -180deg,
    rgb(242, 243, 247),
    rgb(242, 223, 247),
    rgb(234, 241, 249),
    rgb(242, 223, 237),
    rgb(242, 223, 227),
    rgb(234, 241, 249)
  );
`;



export const ScrollContainerFlex = styled.div`
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    background-color: ${colors.secondary.lightest};
    background-color: #0ae;
    background-image: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      color-stop(0.5, rgba(255, 255, 255, 0.2)),
      color-stop(0.5, transparent),
      to(transparent)
    );
  }
  ${"" /* padding: 2rem 1rem; */}
  width: 100vw;
  height: 100px;
  height: min-content;
  grid-column: full-start/ full-end;
  grid-column: cover-start/ cover-end;
  font-size: 20px;

  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap; // Allow continuing into the white space.
  overflow: auto;
  ${"" /* justify-content: center; */}

  ${respond.pc.min`
  grid-column: full-start/ full-end;
  width: 100%;
  padding: 5rem 1rem; 
 
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  `}
`;

// export const ScrollItemFlex = styled.div`
//   border: 2px solid #b85b14;
//   background-color: #fc7307;
//   width: 120px;

//   flex: 0 0 auto;

// `;


export const ScrollCardContainer = styled.div`
  margin: 11.1111vw 5.555555vw;
  margin: 4rem 6rem 4rem 2rem;
  margin: 4rem 2rem 4rem 2rem;
  margin: 13.333333vw 6.6666666vw;
  

  ${respond.pc.min`
   margin: 4rem 2rem;
   margin: 3.90625vw 1.953125vw;
   margin: clamp(2rem,1.953125vw,1.953125vw);
  `}

  transition: all 0.4s;
  &:last-child {
    padding-right: clamp(5rem, 16.5555vw, 16.66666vw);

    ${respond.pc.min`
    padding-right: 0;
    `}
  }
  &:first-child {
    margin-left: clamp(5rem, 16.5555vw, 16.66666vw);

    & > * {
      background-color: ${colors.neutrals.lighter} !important;
    }

    ${respond.pc.min`
    margin: clamp(2rem,1.953125vw,1.953125vw);
    `}
  }
`;




export const ScrollCardItem = styled.div`
  ${"" /* transform: scale(0.9); */}
  white-space: normal;
  flex: 0 0 auto;
  display: flex;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  flex-direction: column;
  justify-items: flex-start;
  overflow-wrap: normal;
  word-wrap: normal;
  word-break: keep-all;
  width: 12rem;
  width: 33.33333vw;
  padding: 2rem 1rem 3rem;
  padding: 5.5555555vw 2.7777777vw 8.3333333vw;
  padding: 5.5555555vw 2.7777777vw 3.5555555vw;
  border-radius: 15px;
  border-radius: 5vw;
  border-radius: clamp(15px, 5vw, 20px);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.22);
  ${shadows.mixins.neumorphic.original}
  transition: all 0.4s;
  box-sizing: content-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .technologies {
    align-self: flex-end;
    margin-top: 1rem;
    margin-top: 3.3333333vw;
    ${"" /* background: lightgray; */}
    width: min-content;
    ${"" /* width: 80%; */}
    padding: 0.4rem 0;
    padding: 1.3333333vw 0;

    display: flex;
    justify-content: flex-end;

    ${respond.pc.min`
      margin-top: 1rem;
      margin-top: 0.9765625vw;
    `}

    height: 1rem;
    & > * {
      font-size: 12px;
      font-size: 4vw;

      ${respond.pc.min`
      font-size: 20px;
      font-size: 1.953125vw;
      `}
    }
    & > * {
      margin: 0 1px;
      margin: 0 0.3333333333vw;
      ${respond.pc.min`
      margin: 0 0.1333333333vw;
      `}
    }
  }
  ${respond.pc.min`
  padding: 2rem 1rem 3rem;
  padding: 1.953125vw 0.9765625vw 0.9296875vw;
  width: 15rem;
  width: clamp(15rem, 14.6484375vw, 14.6484375vw);
  `}
  ${
    "" /* figure {
    &::before {
      content: "";
      display: block;
      height: 40px;
      height: 13.3333333vw;
      width: 40px;
      width: 13.3333333vw;
      border-radius: 50%;
      position: absolute;
      background: white;
      z-index: -1;
      top: 12px;
      top: 4vw;

      left: 6px;
      left: 2vw;
    }
  } */
  }
  .iconTest {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: min-content;
    margin-bottom: 1rem;

    &::before {
      content: "";
      display: block;

      height: 40px;
      height: 13.3333333vw;
      height: 120%;
      width: 40px;
      width: 13.3333333vw;
      width: 120%;
      border-radius: 50%;
      position: absolute;
      ${"" /* background: white; */}
      z-index: -1;
      ${"" /* top: 12px; */}
      ${"" /* top: 4vw; */}

      ${"" /* left: 6px;
      left: 2vw; */}
    }
  }
  i {
    font-size: 4rem;
    font-size: 11.1111111vw;
    line-height: 0;
    ${"" /* margin-right: 0.5rem; */}
    ${"" /* width: min-content; */}
    display: inline-block;
    display: block;
    -webkit-background-clip: text;
    color: transparent;
    color: ${colors.accent.darkest};
    background-image: linear-gradient(
      to right,
      ${colors.accent.lightest},
      ${colors.accent.darkest}
    );

    ${respond.pc.min`
    font-size: 4rem;
    font-size: 3.90625vw;
    `}
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    background: ${colors.accent.darkest};
    height: 4px;
    height: 1.1111111vw;
    border: none;
    width: 50%;
    left: 0;

    ${respond.pc.min`
     height: 4px;
     height: 0.390625vw;
    `}
  }

  h3 {
    font-size: clamp(10px, 3vw, 3vw);
    font-size: 15px;
    font-size: 3vw;
    font-family: "Rubik Mono One", Cambria, "Times New Roman", Times, sans-serif;
    line-height: 1.5;
    margin-bottom: 0.4rem;
    margin-bottom: 0.390625vw;

    ${respond.pc.min`
    font-size: 15px;
    font-size: 1.46484375vw;
    `}
  }

  p {
    font-size: clamp(10px, 3vw, 30px);
    font-size: 10px;
    font-size: 2.77777777vw;
    text-align: justify;

    ${respond.pc.min`
    font-size: 10px;
    font-size: 0.9765625vw;
    `}
  }

  &:hover {
    background: ${colors.neutrals.lighter};
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.52);
    box-shadow: 4px 4px 10px 0px ${colors.shadows.dark},
      -4px -4px 10px 0px ${colors.highlights.lightest};
  }
  &:active {
    transition: all 0.4s;
    box-shadow: 4px 4px 10px 0px ${colors.shadows.dark},
      -4px -4px 10px 0px ${colors.accent.lightest};
    box-shadow: ${shadows.neumorphic.original};
  }
`;




export const Phone = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  background: #5a32a0;
  background-color: ${colors.accent.ochreFire};
  background-color: ${colors.accent.ochreOxide};
  background-color: ${colors.accent.ochrePale};
`;

const openStyles = css`
  transform: translateX(100px) scale(0.95);
  border-radius: 10vw;
`;

export const Content = styled.div`
  ${"" /* height: 800px; */}
  width: 100%;
  ${"" /* padding: 2rem 1.5rem; */}

  border-radius: 0px;
  overflow: hidden;
  background: #210f40;
  transform: translateX(0) scale(1);
  transition: 0.45s ${(p) => p.open && openStyles};
`;

export const Burger = styled.button`
  position: fixed;
  &:focus,
  &:active {
    border: none;
    outline: none;
  }
  top: 2vw;
  left: 2vw;

  ${respond.pc.standard`
    top: 2.5vw;
    left: 2vw;  
  `}

  z-index: 100;
  background: transparent;
  border: 0;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ease-out 0.3s;
  color: ${(p) => (p.open ? "#F9F9FA" : "#EB5E28")};
`;

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${"" /* background: red; */}
  top: 50vh;
  transform: translateY(-50%);
`;

export const NavButton = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: flex-start;
  height: 44px;
  height: 14.666666vw;

  background: transparent;
  color: ${rgba("white", 0.5)};

  ${respond.pc.standard`
  height: 4.4vw;
  `}

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  &:focus,
  &:hover,
  &:active {
    border: none;
    outline: none;
  }
`;

export const NavIcon = styled.span`
  font-size: 3.5rem;
  font-size: 11.666666vw;

  ${respond.pc.standard`
    font-size: 3.5vw;
  `}

  color: ${colors.accent.new3};
  color: ${colors.secondary.darkest};
  color: ${colors.neutrals.light};
  color: white;
  color: #f9f9fa;
  color: #d65522;
  color: ${colors.accent.new3};
  color: ${colors.accent.new3};
  color: #102539;
  border: none;
  outline: none;

  &:focus,
  &:active {
    color: red;
  }
`;

export const NavText = styled.span`
  font-size: 2.5rem;
  font-size: 8.3333333vw;

  ${respond.pc.standard`
    font-size: 2.5vw;
  `}
  font-weight: 800;
  color: ${colors.secondary.darkest};
  color: ${colors.neutrals.light};
  color: white;
  color: #f0f0f3;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const NavLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const inputOpenStyles = css`
  span:nth-of-type(1) {
    transform-origin: bottom;
    align-self: flex-start;
    width: 50%;
    transform: rotatez(45deg) translate(8px, 0px);
    transform: rotatez(45deg) translate(2.66666vw, 0px);

    ${respond.pc.standard`
    transform: rotatez(45deg) translate(0.8vw, 0px);
    `}
  }

  span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }

  span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    align-self: flex-start;
    transform: translate(30px, -11px) rotatez(45deg);
    transform: translate(10vw, -3.6666666vw) rotatez(45deg);

    ${respond.pc.standard`
    transform: translate(3vw, -1.1vw) rotatez(45deg);
    `}
  }
`;

export const NavLabel = styled.label`
  &:hover::before {
    background: rgba(125, 126, 127, 0.1);
  }

  &:focus::before {
    background: rgba(125, 126, 127, 0.1);
  }
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 120%;
    height: 120%;
    ${"" /* transform-origin: center; */}
    top: 0px;
    top: 50%;
    left: 0px;
    left: 55%;
    transition: 0.3s ease-out;
    transform: translate(-50%, -50%);

    ${
      "" /* right: 0px;
    
    transform: translate(-50%, -50%);
    bottom: 0; */
    }

    border-radius: 50%;
  }

  tranision: 0.2s ease-out;
  display: flex;
  flex-direction: column;

  width: 70px;
  width: 23vw;
  cursor: pointer;

  position: fixed;
  &:focus,
  &:active {
    border: none;
    outline: none;
  }
  top: 1vw;
  left: 0.5vw !important;
  z-index: 100;

  background: transparent;
  border: 0;

  ${respond.pc.standard`
    width: 7vw;
    top: 3vw;
    left: 2vw;  
    transform-origin: top;
    transform: scale(0.6);
  `}

  transform: scale(0.5);

  input[type="checkbox"] {
    display: none;
  }

  span {
    background: ${(p) => (p.open ? "#102539" : "#EB5E28")};

    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    border-radius: 10px;
    border-radius: 1vw;
    height: 7px;
    height: 2.3333333vw;
    margin: 7px 0;
    margin: 2.3333333vw 0;

    ${respond.pc.standard`
      height: 0.7vw;
      margin: 0.7vw 0;
    `}
  }

  span:nth-of-type(1) {
    width: 50%;
    align-self: flex-end;
    width: 30%;
  }

  span:nth-of-type(2) {
    width: 10%;
    width: 100%;
  }

  span:nth-of-type(3) {
    width: 75%;
    width: 45%;
    align-self: flex-end;
  }

  ${(p) => p.open && inputOpenStyles};
  ${
    "" /* 
  input[type="checkbox"]:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    align-self: flex-start;
    width: 50%;
    transform: rotatez(45deg) translate(8px, 0px);
    transform: rotatez(45deg) translate(2.66666vw, 0px);

    ${respond.pc.standard`
    transform: rotatez(45deg) translate(0.8vw, 0px);
    `}
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    align-self: flex-start;
    transform: translate(30px, -11px) rotatez(45deg);
    transform: translate(10vw, -3.6666666vw) rotatez(45deg);

    ${respond.pc.standard`
    transform: translate(3vw, -1.1vw) rotatez(45deg);
    `}
  } */
  }
`;
























































export const ScrollContainer = styled.div`
  ${"" /* display: flex;
  grid-row: 5 / span 1; */}

  grid-column: full-start/ full-end;
  font-size: 20px;
  background-color: lime;

  position: relative;
  top: -30px; // Hide the horizontal scrollbar.
  left: 0;
  width: 1000px;
  ${"" /* width: 10vw; */}
  height: calc(100vw);
  height: calc(30vh);
  ${"" /* height: calc(10vh); */}

  overflow: scroll;
  transform: rotate(-90deg);
  transform-origin: center calc(50vh);

  &::-webkit-scrollbar {
    width: $scrollBarHeight;
    height: $scrollBarHeight;
  }

  &::-webkit-scrollbar-button {
    width: $scrollBarHeight;
    height: $scrollBarHeight;
  }
`;

export const Child = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
  padding: 2em;
  width: 100px;
  height: 50px;
  transform: rotate(90deg);
  border: 1px solid #333;
  box-shadow: 3px 3px 6px rgba(#333, 0.3);
  text-align: center;
`;













export const LandingPageContainer = styled.div`
  display: grid;
  grid-template-rows: 80vh min-content min-content 40rem repeat(3, min-content);
  grid-template-columns:
    [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr)
    [center-start] repeat(
      8,
      [col-start] minmax(min-content, 12rem) [col-end]
    ) [center-end] minmax(6rem, 1fr)
    [full-end];

  @include respond(large-2) {
    grid-template-rows: 6rem 80vh min-content min-content 40rem repeat(
        3,
        min-content
      );
    grid-template-columns:
      [full-start] minmax(6rem, 1fr) [center-start] repeat(
        8,
        [col-start] minmax(min-content, 12rem) [col-end]
      )
      [center-end] minmax(6rem, 1fr) [full-end];
  }

  @include respond(medium-1) {
    grid-template-rows:
      6rem calc(100vh - 6rem) min-content min-content minmax(15rem, min-content)
      repeat(5, min-content);
  }
`;


export const SampleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(10rem, 1fr)) [last-col] 35%;
  grid-template-rows: [first-line] repeat(10, auto) [last-line];
`;



export const HorizontalScroll = styled.div`
  $finalHeight: 50px;
  $finalWidth: 3 * $finalHeight;
  $scrollBarHeight: 10px;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: calc(#{$finalHeight} + #{$scrollBarHeight});
  max-height: $finalWidth;
  margin: 0;
  padding-top: $scrollBarHeight;
  background: #abc;
  overflow-y: hidden;
  overflow-x: auto;
  transform: rotate(90deg) translateY(-$finalHeight);
  transform-origin: right top;
  & > div {
    display: block;
    padding: 5px;
    background: #cab;
    transform: rotate(90deg);
    transform-origin: right top;
  }

  padding: $finalHeight 0 0 0;
  & > div {
    width: $finalHeight;
    height: $finalHeight;
    margin: 10px 0;
  }
`;