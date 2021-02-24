//Libraries
import styled from "styled-components";
//Design
import fonts from '../../design/fonts.styles';
import shadows from '../../design/shadows.styles';
import colors from '../../design/colors';

import {respond} from '../../design/responsive';

export const Highlighter = styled.div`
  position: relative;
  width: min-content;
  ${"" /* background: red; */}
  z-index: 20;

  &::after {
    position: absolute;
    content: "";
    z-index: -1;
    left: 0;
    bottom: 0;
    bottom: -2px;
    width: 100%;
    height: 6px;
    background: ${colors.accent.ochreFire};
    background: ${colors.accent.lightest};
    transform-origin: 0% 100%;
    transition: transform 0.25s;
  }

  &:hover::after {
    transform: scaleY(2.5);
  }
`;
