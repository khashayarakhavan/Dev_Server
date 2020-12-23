import styled from "styled-components";
import {respond} from '../../../../design/responsive';
import shadows from '../../../../design/shadows.styles.jsx';
import colors from '../../../../design/colors';
import {bubbleGumScale, MiniCardHover, neon} from '../../../../design/motions.styles';



//Code
export const MiniCardsContainer = styled.header`
  grid-column: center-start / center-end;
  grid-column: full-start / full-end;
  ${'' /* background: red; */}
  padding: 5rem 1rem; 
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${respond.pc.min`
    flex-direction: row;
  `}
`;

export const MiniCardContainer = styled.div`
  margin: 4rem 2rem;
  margin: 11.1111vw 5.555555vw;
  transition: all 0.4s;

  ${respond.pc.min`
  margin: 2rem; 
  margin: clamp(2rem, 1.953125vw, 1.953125vw); 
  `}
`;
export const MiniCard = styled.div`
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
  border-radius: 15px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.22);
  ${shadows.mixins.neumorphic.original}
  transition: all 0.4s;
  box-sizing: content-box;

  ${respond.pc.min`
  padding: 2rem 1rem 3rem;
  padding: 1.953125vw 0.9765625vw 2.9296875vw;
  width: 15rem;
  width: clamp(15rem, 14.6484375vw, 14.6484375vw);
  `}

  i {
    font-size: 4rem;
    font-size: 11.1111111vw;
    line-height: 100%;
    margin-right: 0.5rem;
    display: inline-block;
    -webkit-background-clip: text;
    color: transparent;
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