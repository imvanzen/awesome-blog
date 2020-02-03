// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import apiClient from '../src/api-client';

jest.mock('axios');

describe('Api Client', () => {
  const testPostsList = [
    {
      id: '123',
      title: 'Lorem ipsum',
      content: 'Lorem ipsum',
    }, {
      id: '456',
      title: 'Ipsum lorem',
      content: 'Ipsum lorem',
    },
  ];

  it('Get posts', () => {
    return apiClient.getPosts().then(posts => expect(posts).toEqual(testPostsList));
  });

  it('Get post by ID', () => {

  });

  it('Get comments for post by post id', () => {

  });

  it('Create comment for post by post id', () => {

  });
});
