import { gql } from 'apollo-server';

export const getFavourites = gql`
  {
    getFavourites {
      id
      createdAt
      reference
      image {
        id
        url
        breeds {
          id
          name
          description
          origin
          mood
          rare
          hypoallergenic
          hairless
          externalLink
        }
      }
    }
  }
`;

export const getFavourite = gql`
  query getFavourite($id: String!) {
    getFavourite(id: $id) {
      id
      createdAt
      reference
      image {
        id
        url
        breeds {
          id
          name
          description
          origin
          mood
          rare
          hypoallergenic
          hairless
          externalLink
        }
      }
    }
  }
`;
