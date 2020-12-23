//Basics
import React from 'react';
//Components
import CardScroll from '../../atomic/cardScroll/cardScroll.component';

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
        <CardScroll />
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
