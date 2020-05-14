import { CatAPI } from 'project-starter-datasources/src';

export default {
  Query: {
    getBreeds: async (root, args, { injector }) => injector.get(CatAPI).getBreeds(),
  },
};
