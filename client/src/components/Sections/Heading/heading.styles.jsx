//Libraries
import styled from "styled-components";
//Design
import fonts from '../../../design/fonts.styles';
import colors from '../../../design/colors';
import {respond} from '../../../design/responsive';
import {VegeloperContainer} from '../../../pages/vegeloperPage/vegeloper.styles';

//Code
export const SectionHeading = styled(VegeloperContainer)`
  grid-column: cover-start / cover-end;

  position: relative;

  margin-top: 5rem;
  margin-bottom: 5rem;

  display: grid;
  justify-content: center;
  align-content: center;
`;

export const HeadingContainer = styled.div`
  grid-column: center-start / center-end;
  ${'' /* height: 40vh; */}

  position: relative;

  margin-right: 2rem;
  margin-left: 2rem;

  display: grid;
  justify-content: center;
  align-content: center;

  //Design GiantCard
  ${'' /* background: white; */}
  ${'' /* border-radius: 40px; */}
`;

export const Heading = styled.div`
  position: relative;
  width: 100%;
  
  padding: 3rem 5rem 1rem;  


  h1 {
    ${fonts.mixins.heroHeader}
    font-size: 15.2360833vw;
    font-size: 12.2360833vw;
    line-height: 1;
    letter-spacing: 0px;
    text-rendering: optimizeLegibility;
    font-style: normal;
    color: ${colors.secondary.darkest};

    ${respond.pc.min`
    font-size: clamp(3.9rem, 3.80859375vw, 3.80859375vw);
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
    font-size: 9.1vw;

    ${respond.pc.min`
    font-size: 2vw;
    text-align: center;
    line-height: clamp(30px, 2.9296vw, 2.9296vw);  
  `}
  }
`;