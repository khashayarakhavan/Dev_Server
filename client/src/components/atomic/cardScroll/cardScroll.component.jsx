//Basics
import React from 'react';
//Images

//Style
import { CardScroll } from "./cardScroll.styles";
import { Highlighter } from 'interactions/HighLighter/highlighter.styles';
import TabbedCardNeumorphic from 'interactions/TabbedCardNeumorphic/tabbedCardNeumorphic.component';
import { SvgIcon, Icon_cognitiveScience, Icon_cyberSecurity } from "./cardScroll.styles";
//Code
const Template = ({project, projectSub, photo}) => {
  return (
    <CardScroll>
      {photo === "react" ? <SvgIcon /> : photo==="cognitive" ? <Icon_cognitiveScience /> : <Icon_cyberSecurity />}

      <h3 className="heading-tertiary">
        {project} <Highlighter> {projectSub}</Highlighter>
      </h3>   
      <TabbedCardNeumorphic />
    </CardScroll>
  );
};

export default Template;
