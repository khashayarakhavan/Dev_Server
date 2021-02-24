//Basics
import React from 'react';
//Images
import { firstCardImage } from "../../../design/images";
//Style
import { CardScroll } from "./cardScroll.styles";
import { Highlighter } from '../../../interactions/HighLighter/highlighter.styles';
import TabbedCard from '../../../interactions/TabbedCardNeumorphic/tabbedCardNeumorphic.component';
//Code
const Template = ({project, projectSub, photo}) => {
  return (
    <CardScroll>
      <img
        src={photo}
        style={{
          marginBottom: "1rem",
          width: "100%",
          height: "18rem",
          borderRadius: "clamp(15px, 5vw, 20px)",
        }}
      />
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

      <TabbedCard />
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
