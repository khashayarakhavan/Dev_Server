import React from 'react';
import { shallow } from 'enzyme';
import SignInAndSignUpPage from './messageMe.component';

it('should render SignInAndSignUpPage component', () => {
  expect(shallow(<SignInAndSignUpPage />)).toMatchSnapshot();
});
