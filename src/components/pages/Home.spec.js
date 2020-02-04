import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../templates/Navigation';
import PostsList from '../templates/PostsList';
import Footer from '../templates/Footer';
import Home from './Home';

let wrapper;

describe('Home Page', () => {
  beforeAll(() => {
    wrapper = shallow(<Home />);
  });

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
