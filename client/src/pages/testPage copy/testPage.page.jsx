import React from "react";

//Components
import BasePage from './basePage.component';
import SlideUpDialog from './SlideUpDialog';

//Design
import {Wrapper} from './testPage.styles';




const TestPage = () => {
  return (
    <Wrapper>
      <BasePage />
      {/* <SlideUpDialog /> */}
    </Wrapper>
  );
};

export default TestPage;
