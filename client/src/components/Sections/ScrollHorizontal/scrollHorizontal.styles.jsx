//Libraries
import styled from "styled-components";
//Design
import fonts from '../../../design/fonts.styles';
import shadows from '../../../design/shadows.styles';
import colors from '../../../design/colors';
import {respond} from '../../../design/responsive';


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



export const CTA = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: center;

  .priceBox {
    text-align: center;
    margin-bottom: 0.8rem;
    color: $color-white;

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
    text-transform: uppercase;
    background-color: #fff;
    color: #777;
    text-decoration: none;
    padding: 1rem 3rem;
    display: inline-block;
    border-radius: 10px;
    transition: all 0.4s;
    position: relative;
    font-size: 1.6rem;
    border: none;
    cursor: pointer;
  }

  &::active {
    outline: none;
    background-color: #094e7c;
    color: rgba(252, 253, 253, 0.87);
    transform: translateY(-2px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); 
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
    z-index: -1;
    transition: all .5s;
  }


  
  &:hover {
    filter: brightness(130%);
    ${"" /* color: rgba(black, 0.55); */}
    transform: translateY(-8px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); }    
  }

  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
`;


// export const ScrollCardItemBack = styled.div`
//   transition: all 0.8s ease;
//   ${"" /*  */}

//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   ${"" /* */}
//   height: 35vw;
//   background: red;

//   backface-visibility: hidden;
//   -webkit-backface-visibility: hidden;
//   -moz-backface-visibility: hidden;
//   overflow: hidden;
//   transform: rotateY(180deg);
// `;


export const ScrollCardItem = styled.div`

  transition: all 0.8s ease;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  overflow: hidden;
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
  }
  &:active {
    transition: all 0.4s;
    box-shadow: 4px 4px 10px 0px ${colors.shadows.dark},
      -4px -4px 10px 0px ${colors.accent.lightest};
    box-shadow: ${shadows.neumorphic.original};
  }
`;













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

  transition: all 0.8s ease;
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


// export const Card = styled.div`
//   perspective: 150rem;
//   -moz-perspective: 150rem;
//   position: relative;
//   height: 35vw;

//   :hover ${ScrollCardItem} {
//     transform: rotateY(-180deg);
//   }
//   :hover ${ScrollCardItemBack} {
//     transform: rotateY(0deg);
//   }
// `;