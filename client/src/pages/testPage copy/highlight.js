import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import colors from '../../design/colors';


const Highlight = styled.div`
  position: absolute;
  z-index: 10000;
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 6px;
  background: #fb5b69;
  transform-origin: 0% 100%;
  transition: transform 0.25s;
`;

const Wrapper = styled.div`
  position: relative;
  ${'' /* z-index: 10000000000000000000000000000000000000000000000; */}
  transition: all 0.45s;
  width: min-content;

  &:hover ${Highlight} {
    transform: scaleY(3.5);
    background: blue;
  }
`;


const TheLink = styled.a`
  position: relative;
  z-index: 2;
  font-size: 3rem;
  font-weight: 700;
  color: white;
`;

// export default {
//   components: {
//     Wrapper,
//     Highlight,
//     TheLink,
//   },
// };

const SlideUpDialog = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Wrapper>
      <Highlight class="highlight" />
      <TheLink>Highlight</TheLink>
    </Wrapper>
  );
};

export default SlideUpDialog;

export const Underliner = styled.div`
  position: relative;
  width: min-content;
  line-height: 1.1;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 10px;
    height: 8px;
    ${"" /* z-index: 100000; */}
    background: #ff5a5f;
    background: ${colors.accent.ochreFire};
    left: 0;
    bottom: -12px;
    transform-origin: 0% 100%;
    transition: transform 0.35s;
  }

  &:hover::after {
    transform: scaleY(1.5);
  }
`;

