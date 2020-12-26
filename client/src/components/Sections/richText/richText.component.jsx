import React from 'react';

// import SignIn from '../../components/sign-in/sign-in.component';
import SignIn from '../../sign-in/sign-in.component';
// import SignUp from '../../components/sign-up/sign-up.component';
import SignUp from '../../sign-up/sign-up.component';
import RichTextCard from '../../../interactions/richTextCard/richTextCard.component';
import { RichTextContainer } from "./richText.styles";

const RichTextSection = () => (
  <RichTextContainer>
    <RichTextCard />
    <SignIn />
    {/* <SignUp /> */}
  </RichTextContainer>
);

export default RichTextSection;
