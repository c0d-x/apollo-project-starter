import { gql } from 'apollo-server';

export const getBreeds = gql`
  {
    getBreeds {
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
`;
