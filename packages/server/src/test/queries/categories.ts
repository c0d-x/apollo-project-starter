import { gql } from 'apollo-server';

export const getCategories = gql`
  {
    getCategories {
      id
      name
    }
  }
`;
