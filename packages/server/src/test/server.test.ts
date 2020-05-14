import fetch from 'jest-fetch-mock';
import { createTestClient } from 'apollo-server-testing';
import server from 'project-starter-server/src';

import { mockSuccessParams, startTestServer } from './utils';
import {
  breedsFixtures,
  categoriesFixtures,
  createFavouriteFixture,
  favouriteFixture,
  favouritesFixtures,
  imagesFixtures,
  removeFavouriteFixture,
  createVoteFixture,
  voteFixture,
} from './fixtures';

import {
  getBreeds,
  getCategories,
  getFavourite,
  getFavourites,
  getImages,
} from './queries';

import {
  createFavourite,
  removeFavourite,
  createVote,
} from './mutations';

const { query, mutate } = createTestClient(server);
const favouriteId = favouritesFixtures[0].id.toString();

// datasource api responses are mocked as we don't have a dedicated server for testing
describe('Server - e2e', () => {
  let stop;

  beforeAll(async () => {
    const testServer = await startTestServer(server);
    // eslint-disable-next-line prefer-destructuring
    stop = testServer.stop;
  });

  beforeEach(() => fetch.resetMocks());

  afterAll(() => stop());

  describe('Categories', () => {
    it('should get all categories', async () => {
      // mock datasource API response
      fetch.mockResponse(JSON.stringify(categoriesFixtures), mockSuccessParams);
      const response = await query({ query: getCategories });
      expect(response.data).toMatchSnapshot();
    });
  });

  describe('Breeds', () => {
    it('should get all breeds', async () => {
      fetch.mockResponse(JSON.stringify(breedsFixtures), mockSuccessParams);
      const response = await query({ query: getBreeds });
      expect(response.data).toMatchSnapshot();
    });
  });

  describe('Images', () => {
    it('should get all images', async () => {
      fetch.mockResponse(JSON.stringify(imagesFixtures), mockSuccessParams);
      const response = await query({ query: getImages });
      expect(response.data).toMatchSnapshot();
    });
  });

  describe('Favourites', () => {
    it('should get all favourites', async () => {
      fetch.mockResponse(JSON.stringify(favouritesFixtures), mockSuccessParams);
      const response = await query({ query: getFavourites });
      expect(response.data).toMatchSnapshot();
    });

    it('should get a favourite by id', async () => {
      fetch.mockResponse(JSON.stringify(favouriteFixture), mockSuccessParams);
      fetch.mockResponse(JSON.stringify(imagesFixtures[0]), mockSuccessParams);

      const response = await query({
        query: getFavourite,
        variables: { id: favouriteId },
      });

      expect(response.data).toMatchSnapshot();
    });

    it('should create favourite', async () => {
      fetch.mockResponse(JSON.stringify(createFavouriteFixture), mockSuccessParams);

      const imageId = imagesFixtures[0].id;
      const response = await mutate({
        mutation: createFavourite,
        variables: { input: { imageId } },
      });

      expect(response.data).toMatchSnapshot();
    });

    it('should remove a favourite and return list of favourites', async () => {
      fetch.mockResponse(JSON.stringify(removeFavouriteFixture), mockSuccessParams);

      const response = await mutate({
        mutation: removeFavourite,
        variables: { input: { id: favouriteId } },
      });

      expect(response.data).toMatchSnapshot();
    });
  });

  describe('Votes', () => {
    it('should create a vote', async () => {
      const imageId = imagesFixtures[0].id;

      fetch.mockResponse(JSON.stringify(createVoteFixture), mockSuccessParams);
      fetch.mockResponse(JSON.stringify(voteFixture), mockSuccessParams);

      const response = await mutate({
        mutation: createVote,
        variables: { input: { imageId, vote: 'UP' } },
      });

      expect(response.data).toMatchSnapshot();
    });
  });
});
