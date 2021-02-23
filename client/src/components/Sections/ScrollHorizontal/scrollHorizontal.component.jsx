//Basics
import React from 'react';
//Components
import CardScroll from '../../atomic/cardScroll/cardScroll.component';
import TabbedCard from '../../../interactions/TabbedCard/tabbedCard.component';
import TabbedCardNeumorphic from '../../../interactions/TabbedCardNeumorphic/tabbedCardNeumorphic.component';
//Style
import {
  ScrollContainerFlex,
  ScrollCardContainer,
} from "./scrollHorizontal.styles";

//Code
const Template = () => {
  return (
    <ScrollContainerFlex>
      <ScrollCardContainer>
        <TabbedCardNeumorphic />
      </ScrollCardContainer>
      <ScrollCardContainer>
        <CardScroll />
      </ScrollCardContainer>
      <ScrollCardContainer>
        <CardScroll />
      </ScrollCardContainer>
      {/* <ScrollCardContainer>
        <CardScroll />
      </ScrollCardContainer> */}
    </ScrollContainerFlex>
  );
};

export default Template;
