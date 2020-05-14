import BreedTransformer from './breed';
import VoteTransformer from './vote';

export default class ImageTransformer {
  static transform(image) {
    const breeds = image.breeds
      ? image.breeds.map(breed => BreedTransformer.transform(breed))
      : [];

    return {
      id: image.id,
      url: image.url || null,
      favouriteId: (image.favourite && image.favourite.id) || null,
      vote: VoteTransformer.transform(image.vote),
      breeds,
    };
  }
}
