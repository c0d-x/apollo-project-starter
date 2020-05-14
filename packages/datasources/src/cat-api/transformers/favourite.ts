import ImageTransformer from './image';

export default class FavouriteTransformer {
  static transform(favourite) {
    return {
      id: favourite.id,
      createdAt: favourite.created_at || null,
      reference: favourite.sub_id,
      image: ImageTransformer.transform(favourite.image),
    };
  }
}
