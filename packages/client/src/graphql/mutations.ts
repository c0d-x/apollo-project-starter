export const createVote = `
  mutation createVote($input: VoteCreateInput!) {
    createVote(input: $input) {
      id
      createdAt
      imageId
      value
    }
  }
`;

export const createFavourite = `
  mutation createFavourite($input: FavouriteCreateInput!) {
    createFavourite(input: $input) {
      id
    }
  }
`;

export const removeFavourite = `
  mutation removeFavourite($input: FavouriteRemoveInput!) {
    removeFavourite(input: $input) {
      id
    }
  }
`;
