//Basics
import React from 'react';
//Design
import colors from '../../../design/colors';
import sprite from "../../../assets/SVG/sprite.svg";

//Style
// import "./flexIcons.css";
import "./flexIcons.scss";


//Code
const Template = ({props}) => {
  return (
    <section className="features-2 u-margin-bottom-medium">
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-global"} />
        </svg>
      </div>
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-trophy"} />
        </svg>
      </div>
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-presentation"} />
        </svg>
      </div>
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-map-pin"} />
        </svg>
      </div>
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-key"} />
        </svg>
      </div>
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-global"} />
        </svg>
      </div>
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-trophy"} />
        </svg>
      </div>
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-presentation"} />
        </svg>
      </div>
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-map-pin"} />
        </svg>
      </div>
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-key"} />
        </svg>
      </div>
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-global"} />
        </svg>
      </div>
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-trophy"} />
        </svg>
      </div>
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-presentation"} />
        </svg>
      </div>
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-presentation"} />
        </svg>
      </div>
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-map-pin"} />
        </svg>
      </div>
      <div className="feature-2">
        <svg className="feature-2__icon">
          <use href={sprite + "#icon-key"} />
        </svg>
      </div>
    </section>
  );
};

export default Template;
