//Basics
import React from 'react';
//Design
import colors from '../../../design/colors';
//Component
import {
  CardNeumorphicComponent,
  CardLegacyComponent,
} from "../../../components/atomic/Card/card.component";
//Style
import {
  SectionProjectsContainers,
  FlexContainer,
  ProjectCardContainer,
} from './projects.styles';

//Code
 const Template = () => {
  return (
    <SectionProjectsContainers>
      <FlexContainer>
        <ProjectCardContainer>
          <CardNeumorphicComponent />
        </ProjectCardContainer>
        <ProjectCardContainer>
          <CardNeumorphicComponent />
        </ProjectCardContainer>
        {/* <ProjectCardContainer>
          <CardLegacyComponent />
        </ProjectCardContainer> */}
      </FlexContainer>
    </SectionProjectsContainers>
  );
};

export default Template;
