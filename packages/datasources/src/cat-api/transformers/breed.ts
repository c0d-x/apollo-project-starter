export default class BreedTransformer {
  static transform(breed) {
    return {
      id: breed.id,
      name: breed.name,
      description: breed.description,
      origin: breed.origin,
      mood: breed.temperament,
      lifeSpan: breed.life_span,
      rare: !!breed.rare,
      hypoallergenic: !!breed.hypoallergenic,
      hairless: !!breed.hairless,
      ratings: this.ratings(breed),
      externalLink: breed.wikipedia_url,
    };
  }

  static ratings(breed) {
    return {
      affection: breed.affection_level,
      energy: breed.energy_level,
      intelligence: breed.intelligence,
      sociability: breed.social_needs,
      vocality: breed.vocalisation,
    };
  }
}
