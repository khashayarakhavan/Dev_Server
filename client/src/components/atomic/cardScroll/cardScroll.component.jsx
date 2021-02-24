//Basics
import React from 'react';
//Images
import { firstCardImage } from "../../../design/images";
//Style
import { CardScroll } from "./cardScroll.styles";
import { Highlighter } from '../../../interactions/HighLighter/highlighter.styles';
import TabbedCardNeumorphic from '../../../interactions/TabbedCardNeumorphic/tabbedCardNeumorphic.component';
import { SvgIcon, Icon_cognitiveScience, Icon_cyberSecurity } from "./cardScroll.styles";
//Code
const Template = ({project, projectSub, photo}) => {
  return (
    <CardScroll>
      {photo === "react" ? <SvgIcon /> : photo==="cognitive" ? <Icon_cognitiveScience /> : <Icon_cyberSecurity />}

      <h3 className="heading-tertiary">
        {project} <Highlighter> {projectSub}</Highlighter>
      </h3>
      {/* <span className="orangeLine" /> */}
      {/* <div className="iconTest">
        <i className=" icon-basic-heart"></i>
      </div> */}
      {/* <div className="iconTest">
              <i className=" icon-basic-heart"></i>
            </div> */}
      <TabbedCardNeumorphic />
      {/* <p className="feature-box__text">
        shaja baja much loven disch very guten disch
      </p>
      <div className="technologies">
        <i className=" icon-basic-heart"></i>
        <i className=" icon-basic-heart"></i>
        <i className=" icon-basic-heart"></i>
      </div> */}
    </CardScroll>
  );
};

export default Template;
