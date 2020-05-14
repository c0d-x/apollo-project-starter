import { gql } from 'apollo-server';

export const getImages = gql`
  {
    getImages {
      id
      url
      favouriteId
      vote {
        id
        value
      }
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
`;
