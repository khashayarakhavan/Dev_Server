import React from "react";
import sprite from "../../../../assets/spriteSVG/sprite-medals.svg";
import {FeaturesContainer, Feature} from './feature.styles';

const Template = () => {
  return (
    <FeaturesContainer className="features">
      <Feature>
        <svg className="feature__icon">
          <use href={sprite + "#icon-global"} />
        </svg>
        <h4>World's best luxury homes</h4>
        <p className="feature__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus.
        </p>
      </Feature>
      <Feature>
        <svg className="feature__icon">
          <use href={sprite + "#icon-trophy"} />
        </svg>
        <h4>only the best propreties</h4>
        <p className="feature__text">
          Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
          rerum sed a eligendi aut quia.
        </p>
      </Feature>
      <Feature>
        <svg className="feature__icon">
          <use href={sprite + "#icon-map-pin"} />
        </svg>
        <h4>
          All homes in top locations
        </h4>
        <p className="feature__text">
          Tenetur distinctio necessitatibus pariatur voluptatibus quidem
          consequatur harum.
        </p>
      </Feature>
      {/* <Feature>
        <svg className="feature__icon">
          <use href={sprite + "#icon-key"} />
        </svg>
        <h4>new home in one week</h4>
        <p className="feature__text">
          Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
      </Feature>
      <Feature>
        <svg className="feature__icon">
          <use href={sprite + "#icon-presentation"} />
        </svg>
        <h4>top realtors</h4>
        <p className="feature__text">
          Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </p>
      </Feature>
      <Feature>
        <svg className="feature__icon">
          <use href={sprite + "#icon-lock"} />
        </svg>
        <h4>secure payments on Nexter</h4>
        <p className="feature__text">
          Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
          quae.
        </p>
      </Feature> */}
    </FeaturesContainer>
  );
};

export default Template;
