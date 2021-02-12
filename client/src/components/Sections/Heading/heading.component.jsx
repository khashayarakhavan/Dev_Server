//Basics
import React from 'react';
//Design
import colors from '../../../design/colors';

//Style
import { SectionHeading, HeadingContainer, Heading } from "./heading.styles";

//Code
const Template = ({text}) => {
  return (
    <SectionHeading>
      <HeadingContainer>
        <Heading>
          <h1>
            {text}
          </h1>
          <h4>
            Just hit{" "}
            <span
              style={{ color: `${colors.accent.lightest}`, fontWeight: 400 }}
            >
              play{" "}
            </span>
          </h4>
        </Heading>
      </HeadingContainer>
    </SectionHeading>
  );
};

export default Template;
