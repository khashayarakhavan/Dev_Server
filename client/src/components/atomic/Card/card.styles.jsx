//Libraries
import styled from "styled-components";
//Design
import fonts from '../../../design/fonts.styles';
import colors from '../../../design/colors';
import shadows from '../../../design/shadows.styles';
import {respond} from '../../../design/responsive';
import nat10 from "../../../assets/img/nat-10.jpg";

/*Code
__^__^__^__^__^__^__^__^__^__^__^__^__^__^__^__^__^__^__^__^
*/


//CardNeumorphic
export const CardNeumorphic = styled.div`
  position: relative;
  box-sizing: border-box;
  transition: all 0.4s;

  width: clamp(15rem, 17.6484375vw, 14.6484375vw);
  width: clamp(15rem, 14.6484375vw, 14.6484375vw);
  ${"" /* width: 25vw; */}
  height: 25vw;

  border-radius: clamp(15px, 5vw, 20px);
  perspective: 150rem;
  -moz-perspective: 150rem;

  margin: clamp(2rem, 1.953125vw, 1.953125vw);
  &:not(:last-child) {
    margin-right: 5rem;
  }

  ${'' /* background: red; */}

  & > div {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    


    height: 100%;
    width: 100%;

    padding: 2rem 1rem 3rem;
    padding: 1.953125vw 0.9765625vw 0.9296875vw;

    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;

    transition: all 0.8s ease;
    border-radius: 20px;

    ${shadows.mixins.neumorphic.original}
  }

  .heads {
    background-color: pink;
  }

  .tails {
    transform: rotateY(180deg);
    background-color: white;

    align-items: center;
  }

  &:hover .heads {
    transform: rotateY(-180deg);
  }

  &:hover .tails {
    transform: rotateY(0deg);
  }

  // Changing the rotating design to flat design for devices with touch input or small screen sizes.
  @media only screen and (max-width: 600px), only screen and (hover: none) {
    // Functionality and rotation.
    
    height: auto;
    width: 50vw;

    ${'' /* background-color: green; */}

    ${shadows.mixins.neumorphic.original}

    & > div {
      height: clamp(70px, 50vw, 400px);
      position: relative;
      box-shadow: none !important;
    }
    .heads {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    .tails {
      transform: rotateY(0deg);
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }

    &:hover .heads {
      transform: rotateY(0deg);
    }

    &:hover .tails {
      transform: rotateY(0deg);
    }
  }
`;


//Side
export const Side = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 200;

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
      z-index: -1;
    }
  }

  i {
    font-size: 4rem;
    font-size: 11.1111111vw;
    line-height: 0;
    display: inline-block;
    display: block;
    -webkit-background-clip: text;
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

  .technologies {
    height: 1rem;

    margin-top: 1rem;
    margin-top: 3.3333333vw;

    padding: 0.4rem 0;
    padding: 1.3333333vw 0;

    display: flex;
    justify-content: flex-end;

    ${respond.pc.min`
      margin-top: 1rem;
      margin-top: 0.9765625vw;
    `}

    & > * {
      font-size: 12px;
      font-size: 4vw;

      margin: 0 1px;
      margin: 0 0.3333333333vw;

      ${respond.pc.min`
      font-size: 20px;
      font-size: 1.953125vw;
      margin: 0 0.1333333333vw;
      `}
    }
  }
`;




//CardLegacy
export const CardLegacy = styled.div`
  position: relative;
  box-sizing: content-box;
  perspective: 150rem;
  -moz-perspective: 150rem;

  background: blue;

  width: clamp(15rem, 14.6484375vw, 14.6484375vw);
  height: 25vw;
  border-radius: clamp(15px, 5vw, 20px);

  margin: clamp(2rem, 1.953125vw, 1.953125vw);
  &:not(:last-child) {
    margin-right: 5rem;
  }

  padding: 5.5555555vw 2.7777777vw 3.5555555vw;

  div {
    height: 25vw;
    ${shadows.mixins.neumorphic.original}
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    border-radius: 20px;
    overflow: hidden;
  }

  .heads {
    background-color: white;
    ${shadows.mixins.neumorphic.original}
  }

  .tails {
    transform: rotateY(180deg);

    background-image: linear-gradient(
      to right bottom,
      ${colors.secondary.lightest},
      ${colors.secondary.darkest}
    );
  }

  &:hover .heads {
    transform: rotateY(-180deg);
  }

  &:hover .tails {
    transform: rotateY(0deg);
  }
`;

export const CardPicture = styled.div`
  background-size: cover;
  height: 15rem;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  // border-top-left-radius: 5px;
  // border-top-right-radius: 5px;
  // border-bottom-left-radius: 5px;
  // border-bottom-right-radius: 5px;
  background-image: url(../../assets/img/nat-10.jpg);
  .P1 {
  }

  .P2 {
    background-image: linear-gradient(
        to right bottom,
        ${colors.secondary.lightest},
        ${colors.secondary.darkest}
      ),
      url(../img/nat-7.jpg);
  }
  .P3 {
    background-image: linear-gradient(
        to right bottom,
        ${colors.secondary.lightest},
        ${colors.secondary.darkest}
      ),
      url(../img/nat-8.jpg);
  }
`;

export const Heading = styled.div`
  font-size: 2rem;
  font-weight: 300;
  text-align: right;
  text-transform: uppercase;
  color: white;
  position: absolute;
  top: 6rem;
  right: 1rem;
  width: 75%;

  span {
    padding: 0.1rem 1.5rem;
    -webkit-box-decoration-break: clone;
    .P1 {
      background-image: linear-gradient(
        to right bottom,
        rgba(${colors.secondary.lightest}, 0.85),
        rgba(${colors.secondary.darkest}, 0.85)
      );
    }
    .P2 {
      background-image: linear-gradient(
        to right bottom,
        rgba(${colors.accent.lightest}, 0.85),
        rgba(${colors.accent.lightest}, 0.85)
      );
    }
    .P3 {
      background-image: linear-gradient(
        to right bottom,
        rgba(${colors.neutrals.lightest}, 0.85),
        rgba(${colors.accent.darkest}, 0.85)
      );
    }
  }
`;



export const Details = styled.div`
  padding: 3rem;

  ul {
    list-style: none;
    width: 80%;
    margin: 0 auto;

    li {
      text-align: center;
      font-size: 1.5rem;
      padding: 1rem;

      &:not(:last-child) {
        border-bottom: 1px solid ${colors.neutrals.light};
      }
    }
  }
`;
export const PriceBox = styled.div`
  text-align: center;

  .priceOnly {
    font-size: 1.7rem;
    text-transform: uppercase;
  }

  .value {
    font-size: 6rem;
    font-weight: 100;
  }
`;

export const CTA = styled.div`
  ${'' /* text-align: center; */}

  .priceBox {
    text-align: center;
    ${'' /* margin-bottom: 0.8rem; */}

    .priceOnly {
      font-size: 1.4rem;
      text-transform: uppercase;
    }

    .value {
      font-size: 6rem;
      font-weight: 100;
    }
  }
`;

export const Button = styled.a`
  &,
  &:link,
  &:visited {
    position: relative;
    display: inline-block;
    text-align: center;

    border-radius: 10px;
    transition: all 0.4s;

    padding: 1rem 3rem;

    font-size: 1.6rem;
    text-transform: uppercase;
    text-decoration: none;

    background-color: #fff;
    color: #777;

    border: none;
    cursor: pointer;
  }

  &::active {
    background-color: #094e7c;
    transform: translateY(-2px);
    outline: none;
  }

  &::before {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10px;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: none;
  }

  &:hover {
    transform: translateY(-8px);
  }

  &:hover::before {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
    background-color: pink;
    transition: opacity 0.63s, transform 0.5s;
  }
`;









