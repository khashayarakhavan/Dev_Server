//Basics
import React from 'react';
//Components
import CardScroll from '../../atomic/cardScroll/cardScroll.component';
import TabbedCard from '../../../interactions/TabbedCard/tabbedCard.component';
import TabbedCardNeumorphic from '../../../interactions/TabbedCardNeumorphic/tabbedCardNeumorphic.component';
import FrontEndEssentials from '../../../assets/img/frontEndEssentials.jpg';
import DisneyPhoto from '../../../assets/img/Disney.jpg';
import h2 from '../../../assets/img/h2.jpg';
//Style
import {
  ScrollContainerFlex,
  ScrollCardContainer,
} from "./scrollHorizontal.styles";

//Code
const Template = () => {
  return (
    <ScrollContainerFlex>
      {/* <ScrollCardContainer>
        <TabbedCardNeumorphic />
      </ScrollCardContainer> */}

      <ScrollCardContainer>
        <CardScroll
          project="Authentication"
          projectSub="Process"
          photo="react"
        />
      </ScrollCardContainer>
      <ScrollCardContainer>
        <CardScroll
          project="Cognitive"
          projectSub="Science"
          photo="cognitive"
        />
      </ScrollCardContainer>
      <ScrollCardContainer>
        <CardScroll project="Ayoco" projectSub="Project" photo={h2} />
      </ScrollCardContainer>

      {/* <ScrollCardContainer>
        <CardScroll />
      </ScrollCardContainer> */}
    </ScrollContainerFlex>
  );
};

export default Template;
