import { CatAPI } from 'project-starter-datasources/src';

import { VoteEnum } from '../../../codegen/generated-models';

export default {
  Mutation: {
    createVote: async (root, args, { injector }) => {
      const { imageId, vote } = args.input;

      return injector.get(CatAPI).createVote(imageId, VoteEnum[vote]);
    },
  },
  // custom enum mapping: public API => internal code
  VoteEnum: {
    UP: '1',
    DOWN: '0',
  },
};
