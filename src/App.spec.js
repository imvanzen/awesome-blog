import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import App from './App';
import { Home, NotFound } from './components/pages';

const mockStore = configureStore([thunk]);
let store;

describe('App', () => {
  beforeEach(() => {
    store = mockStore({});
  });

  test('invalid path should render not found page', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/not-existing']}>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });

  test('valid path should render home page', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });
});
