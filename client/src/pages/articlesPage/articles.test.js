import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './page-articles.content';

it('should render Homepage component', () => {
  expect(shallow(<Homepage />)).toMatchSnapshot();
});
