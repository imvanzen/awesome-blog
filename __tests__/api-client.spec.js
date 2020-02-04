// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import { getPosts } from '../src/api-client';

jest.mock('axios');

describe('Api Client', () => {
  const testSinglePost = {
    userId: 1,
    id: 123,
    title: 'Lorem ipsum',
    body: 'Lorem ipsum',
  };
  const testPostsList = [
    testSinglePost,
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

    return getPosts().then(posts => expect(posts).toEqual(testPostsList));
  });

  test('Should get post by ID', () => {
    axios.get.mockResolvedValueOnce(testSinglePost);

    return getPosts(testSinglePost.id).then(post => expect(post).toEqual(testSinglePost));
  });
});
