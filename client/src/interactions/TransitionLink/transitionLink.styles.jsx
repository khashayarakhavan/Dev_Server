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


export const TransitionLink = styled(ScrollLink)`
display: inherit;
grid-columns: inherit;
grid-rows: inherit;
width: inherit;
${'' /* height: inherit; */}
margin: 0;
border: none;


  :hover > svg path {
    stroke: ${colors.accent.ochreFire};
    stroke: ${colors.accent.darkest};
    stroke: ${colors.accent.lightest};
  }
`;
