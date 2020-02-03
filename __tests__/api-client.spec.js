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

  test('Should get posts', () => {

    return apiClient.getPosts().then(posts => expect(posts).toEqual(testPostsList));
  });

  test('Should get post by ID', () => {

  });

  test('Should get get comments for post by post id', () => {

  });

  test('Should create comment for post by post id', () => {

  });
});
