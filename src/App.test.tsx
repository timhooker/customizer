import * as React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />)
});

it('displays a color picker when the type is color', () => {
  expect(mount(<App />).find('input[type="color"]').length).toEqual(2);
});
