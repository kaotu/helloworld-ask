import React from 'react';
import { shallow } from 'enzyme';
import { Heading } from 'rebass';
import Card from '../components/Core/Card';

describe('Component <Card/>', () => {
  it('should render without throwing an error', () => {
    const component = shallow(<Card />);
    expect(component.contains(<Heading fontSize={[4, 5, 6]}>Card</Heading>)).toBe(true);
  });
});
