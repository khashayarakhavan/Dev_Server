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
