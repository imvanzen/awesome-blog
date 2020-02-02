import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import App from './App';
import { Home, NotFound } from './components/pages';

describe('App', () => {
  test('invalid path should redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/no-existing-page']}>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });

  test('valid path should not redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });
});
