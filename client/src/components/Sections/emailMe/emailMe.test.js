import React from 'react';
import { shallow } from 'enzyme';
import SignInAndSignUpPage from './emailMe.component';

it('should render SignInAndSignUpPage component', () => {
  expect(shallow(<SignInAndSignUpPage />)).toMatchSnapshot();
});
