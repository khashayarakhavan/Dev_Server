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

export const CardsContainer = styled.section`
  //Container
  grid-column: full-start / full-end;
`;

export const Heading2 = styled.h2`
  ${fonts.mixins.heroHeader};
  color: ${colors.primary};
  text-transform: uppercase;
  ${"" /* font-weight: 700; */}
  display: inline-block;
  background-image: linear-gradient(
    to right,
    ${colors.primary} 45.25%,
    ${colors.accent} 55.25%,
    ${colors.primary} 65.25%
  );
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
  font-size: 4vw;
  ${'' /* ${'' /* @media (max-width: 900px ) {
    font-size: 4rem;
  }; */}
  @media (max-width: 250px ) {
    font-size: 8.5vw;
  };
  
  &:hover {
    transform: ${"" /* skewX(-5deg)  */} scale(1.05);
    ${'' /* text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2); */}
  }
`;
