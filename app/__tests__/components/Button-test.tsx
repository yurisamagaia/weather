import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../components/Button';

describe('Button tests', () => {
  // it('Should render correctly', async () => {
  //   const tree = renderer.create(<Button />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('Simulator onClick instead of onPress', async () => {
    const callback = jest.fn();
    const component = renderer.create(<Button onPress={callback} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});