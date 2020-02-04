import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Navigation from '../templates/Navigation';
import PostsList from '../templates/PostsList';
import Footer from '../templates/Footer';
import Home from './Home';

const mockStore = configureStore([thunk]);

let store;
let wrapper;

describe('Home Page', () => {
  beforeAll(() => {
    store = mockStore({});
    wrapper = mount(<Provider store={store}><Home /></Provider>);
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
