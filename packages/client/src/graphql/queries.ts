export const getCategories = `
  query getCategories {
    getCategories {
      id
      name
    }
  }
`;

export const getBreedImages = `
  query getBreedImages($breedId: String, $limit: Int, $page: Int) {
    getImages(breedId: $breedId, limit: $limit, page: $page) {
      id
      url
      breeds {
        id
        name
        description
        origin
        mood
        lifeSpan
        rare
        hypoallergenic
        hairless
        ratings {
          affection
          energy
          intelligence
          sociability
          vocality
        }
        externalLink
      }
    }
  }
`;

export const getImages = `
  query getImages($breedId: String, $limit: Int, $page: Int) {
    getImages(breedId: $breedId, limit: $limit, page: $page) {
      id
      url
      favouriteId
      vote {
        id
        value
      }
    }
  }
`;

export const getBreeds = `
  query getBreeds {
    getBreeds {
      id
      name
    }
  }
`;

export const getFavourites = `
  query getFavourites {
    getFavourites {
      id
      createdAt
      reference
      image {
        id
        url
      }
    }
  }
`;

export const getFavourite = `
  query getFavourite($id: String) {
    getFavourite(id: $id) {
      id
      createdAt
      reference
      image {
        id
        url
      }
    }
  }
`;
