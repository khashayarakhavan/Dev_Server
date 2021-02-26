//Basics
import React from 'react';

import { SVGSource, SVG } from "../../../assets/spriteSVG/spriteSvg.js";

//Design
import colors from '../../../design/colors';
import sprite from "../../../assets/SVG/sprite.svg";
import spriteTech from "../../../assets/spriteSVG/sprite.svg";


//Style
// import "./flexIcons.css";
// import "./flexIcons.scss";
import {Icon, FeatureContainer, Feature} from './flexIcons.styles';


//Code
const Template = ({props}) => {
  return (
    <FeatureContainer>
      {/* <Feature>
        <Icon>
          <use href={sprite + "#icon-global"} />
        </Icon>
      </Feature>
      <Feature>
        <Icon>
          <use href={sprite + "#icon-trophy"} />
        </Icon>
      </Feature>
      <Feature>
        <Icon>
          <use href={sprite + "#icon-presentation"} />
        </Icon>
      </Feature>
      <Feature>
        <Icon>
          <use href={sprite + "#icon-map-pin"} />
        </Icon>
      </Feature>
      <Feature>
        <Icon>
          <use href={sprite + "#icon-key"} />
        </Icon>
      </Feature> */}
      <Feature>
        <Icon>
          <use href={spriteTech + "#aws"} />
        </Icon>
      </Feature>
      <Feature>
        <Icon>
          <use href={spriteTech + "#googlecloud"} />
        </Icon>
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
