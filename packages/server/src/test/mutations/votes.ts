import { gql } from 'apollo-server';

export const createVote = gql`
  mutation createVote($input: VoteCreateInput!) {
    createVote(input: $input) {
      id
      createdAt
      imageId
      value
    }
  }
`;
