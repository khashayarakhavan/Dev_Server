//Libraries
import styled from "styled-components";
//Design
import fonts from '../../../design/fonts.styles';
import colors from '../../../design/colors';
import {respond} from '../../../design/responsive';


//Code
export const SectionProjectsContainers = styled.section`
  grid-column: full-start / full-end;
  ${'' /* height: min-content; */}
  ${'' /* width: 100%; */}
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
export const ProjectCardContainer = styled.div`
  transition: all 0.4s;
  margin: 11.1111vw 5.555555vw;



  ${respond.pc.min`
  margin: clamp(2rem, 1.953125vw, 1.953125vw); 
  `}
`;


export const CardContainer = styled.div`

`;

export const Card = styled.div`
  
`;