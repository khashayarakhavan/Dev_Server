//Basics
import React, {forwardRef} from 'react';

import { SVGSource, SVG } from "../../../assets/spriteSVG/spriteSvg.js";

//Design
import colors from '../../../design/colors';
import sprite from "../../../assets/SVG/sprite.svg";
import spriteTech from "../../../assets/spriteSVG/sprite.svg";
import Tippy from "@tippyjs/react";

import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import "tippy.js/animations/scale-subtle.css";
import {Icon, FeatureContainer, Feature, CustomTooltip} from './flexIcons.styles';

export const technologies = ["aws", "googlecloud", "firebase"];
export const names = ["aws", "google cloud", "firebase"];
// import "./flexIcons.css";
// import Tippy from "@tippyjs/react/headless";
// import "tippy.js/dist/tippy.css";
// import "react-tippy/dist/tippy.css";


//Style
// import "./flexIcons.css";
// import "./flexIcons.scss";


//Code
const Template = ({props}) => {
  const TooltipContent = (
    <CustomTooltip>
      Simple Tooltip !{/* <CustomButton></CustomButton> */}
    </CustomTooltip>
  );



  return (
    <FeatureContainer>
      {/* {Content} */}
      {technologies.map((tab, i) => (
     
      <Feature>
        <Tippy
          content={names[i]}
          placement="top"
          animation="scale-subtle"
          // theme="nanai"
          arrow={true}
          duration={200}
          delay={[75, 0]}
          distance={8}
         
          className="nanai-theme"
        >
         
          <Icon>
            <use href={spriteTech + `#${tab}`} />
          </Icon>
        </Tippy>
      </Feature>
      ))}

      <Feature>
        <Tippy
          content="AWS"
          placement="bottom"
          animation="scale-subtle"
          // theme="nanai"
          arrow={false}
          duration={200}
          delay={[75, 0]}
          distance={8}
          className="nanai-theme"
        >
          <Icon>
            <use href={spriteTech + "#aws"} />
          </Icon>
        </Tippy>
      </Feature>
      <Feature>
        <Tippy
          content="AWS"
          placement="bottom"
          animation="scale-subtle"
          // theme="nanai"
          arrow={false}
          duration={200}
          delay={[75, 0]}
          distance={8}
          className="nanai-theme"
        >
          <Icon>
            <use href={spriteTech + "#googlecloud"} />
          </Icon>
        </Tippy>
      </Feature>
      <Feature>
        <Icon>
          <use href={spriteTech + "#heroku"} />
        </Icon>
      </Feature>
      <Feature>
        <Icon>
          <use href={spriteTech + "#circleci"} />
        </Icon>
      </Feature>
      <Feature>
        <Icon>
          <use href={spriteTech + "#gitlab"} />
        </Icon>
      </Feature>
    </FeatureContainer>
  );
};

export default Template;
