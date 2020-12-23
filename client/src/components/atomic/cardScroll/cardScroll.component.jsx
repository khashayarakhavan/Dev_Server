//Basics
import React from 'react';
//Images
import { firstCardImage } from "../../../design/images";
//Style
import { CardScroll } from "./cardScroll.styles";
import { Highlighter } from '../../../interactions/HighLighter/highlighter.styles';
//Code
const Template = () => {
  return (
    <CardScroll>
      <img
        src={firstCardImage}
        style={{
          marginBottom: "1rem",
          width: "100%",
          height: "18rem",
          borderRadius: "clamp(15px, 5vw, 20px)",
        }}
      />
      <div className="iconTest">
        <i className=" icon-basic-heart"></i>
      </div>
      {/* <div className="iconTest">
              <i className=" icon-basic-heart"></i>
            </div> */}

      <h3 className="heading-tertiary">
        <Highlighter>AYOCO</Highlighter> Project
      </h3>
      <span />
      <p className="feature-box__text">
        shaja baja much loven disch very guten disch
      </p>
      <div className="technologies">
        <i className=" icon-basic-heart"></i>
        <i className=" icon-basic-heart"></i>
        <i className=" icon-basic-heart"></i>
      </div>
    </CardScroll>
  );
};

export default Template;
