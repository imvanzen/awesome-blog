import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import App from './App';
import { Home, NotFound } from './components/pages';

const mockStore = configureStore({});
let store;
let wrapper;

describe('App', () => {
  beforeEach(() => {
    store = mockStore({});
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/', '/not-existing']}>
          <App />
        </MemoryRouter>
      </Provider>,
    );
  });

  test('invalid path should render not found page', () => {
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });

  test('valid path should render home page', () => {
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });
});
