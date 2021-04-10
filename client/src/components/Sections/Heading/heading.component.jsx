//Basics
import React from 'react';
//Design
import colors from 'design/colors';

//Style
import { SectionHeading, HeadingContainer, Heading } from "./heading.styles";

//Code
const Template = ({text, subCta, cta, inverted, ...props}) => {
  return (
    <SectionHeading style={props.zeroMarginBottom && { marginBottom: "0" }} zeroMargin={props.zeroMargin}>
      <HeadingContainer>
        <Heading>         
          <h1>{text}</h1>
          {!inverted ? (
            <h4>
              {subCta}
              <span
                style={{ color: `${colors.accent.lightest}`, fontWeight: 400 }}
              >
                {cta}
              </span>
            </h4>
          ) : (
            <h4>
              <span
                style={{ color: `${colors.accent.lightest}`, fontWeight: 400 }}
              >
                {cta}
              </span>
              {subCta}
            </h4>
          )}
        </Heading>
      </HeadingContainer>
    </SectionHeading>
  );
};

export default Template;
