import { CatAPI } from 'project-starter-datasources/src';

export default {
  Query: {
    getCategories: async (root, args, { injector }) => {
      const { limit } = args;

      return injector.get(CatAPI).getCategories(limit);
    },
  },
};
