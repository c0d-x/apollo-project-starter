import 'reflect-metadata';
import * as qs from 'qs';
import { Injectable, ProviderScope } from '@graphql-modules/di';

import Client from './client';
import * as Types from './transformers/transformer-types';
import ImageTransformer from './transformers/image';
import CategoryTransformer from './transformers/category';
import BreedTransformer from './transformers/breed';
import FavouriteTransformer from './transformers/favourite';
import VoteTransformer from './transformers/vote';

const SUB_ID = process.env.DATASOURCES_API_CAT_SUBID;
const DEFAULT_SEARCH_LIMIT: number = 15;
const DEFAULT_IMAGE_SIZE: string = 'thumb';

/**
 * API Documentation at https://docs.thecatapi.com
 */
@Injectable({
  scope: ProviderScope.Session,
})
export class CatAPI extends Client {
  /**
     * Get breeds
     *
     * @async
     * @returns {Promise<Array>}
    */
  async getBreeds(): Promise<Types.BreedTransformerType[]> {
    const response = await this.get('breeds');

    return (response && response.length)
      ? response.map(breed => BreedTransformer.transform(breed))
      : [];
  }

  /**
     * Get categories
     *
     * @async
     * @returns {Promise<Array>}
    */
  async getCategories(limit: number): Promise<Types.CategoryTransformerType[]> {
    const response = await this.get('categories', qs.stringify({ limit }));

    return (response && response.length)
      ? response.map(category => CategoryTransformer.transform(category))
      : [];
  }

  /**
     * Get images
     *
     * @async
     * @param {object} params
     * @returns {Promise<Array>} - an image list
    */
  async getImages(params): Promise<Types.ImageTransformerType[]> {
    const response = await this.get('images/search',
      qs.stringify({
        breed_ids: params.breedId,
        page: params.page,
        limit: params.limit || DEFAULT_SEARCH_LIMIT,
        order: params.order,
        size: DEFAULT_IMAGE_SIZE,
        sub_id: SUB_ID,
      }));

    return (response && response.length)
      ? response.map(result => ImageTransformer.transform(result))
      : [];
  }

  /**
     * Get an image
     *
     * @async
     * @param {string} imageId
     * @returns {Promise}
    */
  async getImage(imageId: string): Promise<Types.ImageTransformerType> {
    const response = await this.get(`images/${imageId}`);

    return ImageTransformer.transform(response);
  }

  /**
     * Get favourites
     *
     * @async
     * @returns {Promise<Array>}
    */
  async getFavourites(): Promise<Types.FavouriteTransformerType[]> {
    const response = await this.get('favourites', qs.stringify({ sub_id: SUB_ID }));

    return (response && response.length)
      ? response.map(favourite => FavouriteTransformer.transform(favourite))
      : [];
  }

  /**
     * Get a favourite
     *
     * https://forum.thatapiguy.com/t/questions-feedback-bugs-for-the-cat-or-dog-apis/15/26
     *
     * @async
     * @param {string} favouriteId
     * @returns {Promise}
    */
  async getFavourite(favouriteId: string): Promise<Types.FavouriteTransformerType> {
    const favourite = await this.get(`favourites/${favouriteId}`);

    return FavouriteTransformer.transform(favourite);
  }

  /**
     * Create a favourite
     *
     * @async
     * @param {string} imageId
     * @returns {Promise<Object>}
    */
  async createFavourite(imageId: string): Promise<Object> {
    const response = await this.post('favourites', {
      image_id: imageId,
      sub_id: SUB_ID,
    });

    return this.getFavourite(response.id);
  }

  /**
     * Remove a favourite
     *
     * @async
     * @param {string} favouriteId
     * @returns {Promise<Object>}
    */
  async removeFavourite(favouriteId: string): Promise<Object> {
    await this.delete(`favourites/${favouriteId}`);

    return { id: favouriteId };
  }

  /**
     * Create a vote
     *
     * @async
     * @param {string} imageId
     * @param {boolean} vote
     * @returns {Promise>}
    */
  async createVote(imageId: string, vote: boolean): Promise<Types.VoteTransformerType> {
    const response = await this.post('votes', {
      image_id: imageId,
      sub_id: SUB_ID,
      value: vote,
    });

    return this.getVote(response.id);
  }

  /**
   * Get a vote
   *
   * @async
   * @param {string} voteId
   * @returns {Promise>}
  */
  async getVote(voteId: string): Promise<Types.VoteTransformerType> {
    const response = await this.get(`votes/${voteId}`);

    return VoteTransformer.transform(response);
  }
}
