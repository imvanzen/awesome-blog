import React from 'react';
import { mount } from 'enzyme';
import Navigation from '../templates/Navigation';
import Footer from '../templates/Footer';
import Home from './Home';

describe('Home Page', () => {
  const wrapper = mount(<Home />);

  test('should render Navigation', () => {
    expect(wrapper.find(Navigation)).toHaveLength(1);
  });

  test('should render PostsList', () => {
    expect(wrapper.find(PostsList)).toHaveLength(1);
  });

  test('should render Footer', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
