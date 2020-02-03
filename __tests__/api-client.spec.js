// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import apiClient from '../src/api-client';

jest.mock('axios');

describe('Api Client', () => {
  const testSinglePost = {
    userId: '1',
    id: '123',
    title: 'Lorem ipsum',
    body: 'Lorem ipsum',
  };
  const testPostsList = [
    testSinglePost,
    {
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
  const testComments = [
    {
      postId: testSinglePost.id,
      id: 1,
      name: 'Joe Doe',
      email: 'joe.doe@example.com',
      body: 'laudantium enim quasi est quidem ma',
    },
    {
      postId: testSinglePost.id,
      id: 2,
      name: 'Tony Stark',
      email: 'tony.stark@blabengers.com',
      body: 'My rockets',
    },
    {
      postId: testSinglePost.id,
      id: 3,
      name: 'Elon Musk',
      email: 'elon.musk@boring.com',
      body: 'NO! My rockets!',
    },
  ];

  test('Should get posts', () => {
    axios.get.mockResolvedValueOnce(testPostsList);

    return apiClient.getPosts().then(posts => expect(posts).toEqual(testPostsList));
  });

  test('Should get post by ID', () => {
    axios.get.mockResolvedValueOnce(testSinglePost);

    return apiClient.getPost(testSinglePost.id).then(post => expect(post).toEqual(testSinglePost));
  });

  test('Should get get comments for post by post id', () => {
    axios.get.mockResolvedValueOnce(testComments);

    return apiClient.getComments(testSinglePost.id).then(comments => expect(comments).toEqual(testComments));
  });

  test('Should create comment for post by post id', () => {

  });
});
