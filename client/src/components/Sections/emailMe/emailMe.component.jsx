import React from 'react';

// import SignIn from '../../components/sign-in/sign-in.component';
import SignIn from '../../sign-in/sign-in.component';
// import SignUp from '../../components/sign-up/sign-up.component';
import SignUp from '../../sign-up/sign-up.component';

import { EmailMeContainer } from "./emailMe.styles";

const SignInAndSignUpPage = () => (
  <EmailMeContainer>
    <SignIn />
    <SignUp />
  </EmailMeContainer>
);

export default SignInAndSignUpPage;
