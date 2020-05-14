import { CatAPI } from 'project-starter-datasources/src';

import { OrderEnum } from '../../../codegen/generated-models';

export default {
  Query: {
    getImages: async (root, args, { injector }) => {
      const { breedId, limit, page } = args;

      return injector.get(CatAPI).getImages({
        breedId,
        limit,
        page,
        order: OrderEnum.RAND,
      });
    },
  },
  // custom enum mapping: public API => internal code
  OrderEnum: {
    ASC: 'Asc',
    DESC: 'Desc',
    RAND: 'Rand',
  },
};
