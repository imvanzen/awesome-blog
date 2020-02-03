// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import apiClient from '../src/api-client';

jest.mock('axios');

describe('Api Client', () => {
  const testPostsList = [
    {
      userId: '1',
      id: '123',
      title: 'Lorem ipsum',
      body: 'Lorem ipsum',
    }, {
      userId: '2',
      id: '456',
      title: 'Ipsum lorem',
      body: 'Ipsum lorem',
    }, {
      userId: '3',
      id: '918',
      title: 'Dev This',
      body: 'My body!',
    },
  ];

  test('Should get posts', () => {
    axios.get.mockResolvedValueOnce(testPostsList);

    return apiClient.getPosts().then(posts => expect(posts).toEqual(testPostsList));
  });

  test('Should get post by ID', () => {

  });

  test('Should get get comments for post by post id', () => {

  });

  test('Should create comment for post by post id', () => {

  });
});
