import { shallow } from 'enzyme';
import React from 'react';
import { Directory } from './article-single.component';

it('should render Directory component', () => {
  expect(shallow(<Directory sections={[]} />)).toMatchSnapshot();
});
