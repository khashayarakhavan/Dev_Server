//Basics
import React, {forwardRef} from 'react';

import { SVGSource, SVG } from "../../../assets/spriteSVG/spriteSvg.js";

//Design
import colors from '../../../design/colors';
import sprite from "../../../assets/SVG/sprite.svg";
// import spriteTech from "../../../assets/spriteSVG/sprite.svg";
// import spriteTech from "../../../assets/spriteSVG/sprite_2.svg";
// import spriteTech from "../../../assets/spriteSVG/sprite_3.svg";
// import spriteTech from "../../../assets/spriteSVG/sprite_new.svg";
// import spriteTech from "../../../assets/spriteSVG/sprite_new_2.svg";
import spriteTech from "../../../assets/spriteSVG/sprite_new_3.svg";
import Tippy from "@tippyjs/react";

import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import "tippy.js/animations/scale-subtle.css";
import {Icon, FeatureContainer, Feature, CustomTooltip} from './flexIcons.styles';

export const frontEnd = [
  "react",
  "redux",
  "nodejs",
  "typescript",
  "graphql",
  "redis",
  "postgresql",
  "mongodb",
  // "styledcomponents",
  "pythonlang",
  "jest",
  // "gitlab",
];
export const frontEndNames = [
  "React",
  "Redux",
  "Node.js",
  "TypeScript",
  "GraphQL",
  "Redis",
  "PostgreSQL",
  "MongoDB Atlas",
  // "Styled-Components",
  "Python",
  "Jest",
  // "GitLab",
];
// export const frontEnd = [
//   "typescript",
//   "graphql",
//   "redis",
//   "postgresql",
//   "mongodb",
//   "styledcomponents",
//   "jest",
//   "pythonlang",
//   "gitlab",
// ];
// export const frontEndNames = [
//   "TypeScript",
//   "GraphQL",
//   "Redis",
//   "PostgreSQL",
//   "MongoDB Atlas",
//   "Styled-Components",
//   "Jest",
//   "Python",
//   "GitLab",
// ];
export const backEnd = [
  "aws",
  "googlecloud",
  "firebase",
  "jwt",
  "oauth",
  "passport",
  "circleci",
  "cloudflare",
  "docker",
  "gitlab",
];

export const backEndNames = [
  "AWS",
  "Google Cloud",
  "Firebase",
  "JSON web token",
  "oAuth 2",
  "Passport.js",
  "CircleCI",
  "Cloudflare CDN",
  "Docker",
  "GitLab"
];

// import "./flexIcons.css";
// import Tippy from "@tippyjs/react/headless";
// import "tippy.js/dist/tippy.css";
// import "react-tippy/dist/tippy.css";


//Style
// import "./flexIcons.css";
// import "./flexIcons.scss";


//Code
export const FrontEnd = ({props}) => {
  



  return (
    <FeatureContainer>
      {/* {Content} */}
      {frontEnd.map((tab, i) => (
        <Feature>
          <Tippy
            content={frontEndNames[i]}
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
    </FeatureContainer>
  );
};



//
export const BackEnd = ({props}) => {
  

  
  return (
    <FeatureContainer>
      {/* {Content} */}
      {backEnd.map((tab, i) => (
        <Feature>
          <Tippy
            content={backEndNames[i]}
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
    </FeatureContainer>
  );
};

export default FrontEnd;










  // <Feature>
  //       <Tippy
  //         content="AWS"
  //         placement="bottom"
  //         animation="scale-subtle"
  //         // theme="nanai"
  //         arrow={false}
  //         duration={200}
  //         delay={[75, 0]}
  //         distance={8}
  //         className="nanai-theme"
  //       >
  //         <Icon>
  //           <use href={spriteTech + "#aws"} />
  //         </Icon>
  //       </Tippy>
  //     </Feature>
  //     <Feature>
  //       <Tippy
  //         content="AWS"
  //         placement="bottom"
  //         animation="scale-subtle"
  //         // theme="nanai"
  //         arrow={false}
  //         duration={200}
  //         delay={[75, 0]}
  //         distance={8}
  //         className="nanai-theme"
  //       >
  //         <Icon>
  //           <use href={spriteTech + "#googlecloud"} />
  //         </Icon>
  //       </Tippy>
  //     </Feature>
  //     <Feature>
  //       <Icon>
  //         <use href={spriteTech + "#heroku"} />
  //       </Icon>
  //     </Feature>
  //     <Feature>
  //       <Icon>
  //         <use href={spriteTech + "#circleci"} />
  //       </Icon>
  //     </Feature>
  //     <Feature>
  //       <Icon>
  //         <use href={spriteTech + "#gitlab"} />
  //       </Icon>
  //     </Feature>