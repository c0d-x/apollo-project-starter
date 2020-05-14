import { gql } from 'apollo-server';

export const createFavourite = gql`
  mutation createFavourite($input: FavouriteCreateInput!) {
    createFavourite(input: $input) {
      id
    }
  }
`;

export const removeFavourite = gql`
  mutation removeFavourite($input: FavouriteRemoveInput!) {
    removeFavourite(input: $input) {
      id
    }
  }
`;
