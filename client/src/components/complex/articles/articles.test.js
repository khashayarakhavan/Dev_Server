import { shallow } from 'enzyme';
import React from 'react';
import { Directory } from './articles.component';

it('should render Directory component', () => {
  expect(shallow(<Directory sections={[]} />)).toMatchSnapshot();
});
