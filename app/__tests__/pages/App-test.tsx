// import 'react-native';
// import React from 'react';
// import renderer from 'react-test-renderer';
// import App from '../App';

// test('Should render correctly', async () => {
//   renderer.create(<App />);
// });

/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../../../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});