import { shallow } from 'enzyme';
import React from 'react';
import Homepage from './singleArticle.component';

it('should render Homepage component', () => {
  expect(shallow(<Homepage />)).toMatchSnapshot();
});
