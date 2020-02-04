import React from 'react';
import { mount } from 'enzyme';
import Post from '../molecules/Post';
import PostsList from './PostsList';

const testPostsList = [
  {
    userId: 1,
    id: 123,
    title: 'Lorem ipsum',
    body: 'Lorem ipsum',
  },
  {
    userId: 2,
    id: 456,
    title: 'Ipsum lorem',
    body: 'Ipsum lorem',
  }, {
    userId: 3,
    id: 918,
    title: 'Dev This',
    body: 'My body!',
  },
];

describe('Posts List', () => {
  test('should render list of posts', () => {
    const wrapper = mount(<PostsList posts={testPostsList} />);
    expect(wrapper.find(<Post />)).toHaveLength(3);
  });

  test('should render no posts', () => {
    const wrapper = mount(<PostsList posts={[]} />);
    expect(wrapper.find(<Post />)).toHaveLength(0);
  });
});
