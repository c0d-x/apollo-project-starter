import { CatAPI } from 'project-starter-datasources/src';

export default {
  Query: {
    getFavourites: async (root, args, { injector }) => injector.get(CatAPI).getFavourites(),

    getFavourite: async (root, args, { injector }) => {
      const { id } = args;

      return injector.get(CatAPI).getFavourite(id);
    },
  },
  Mutation: {
    createFavourite: async (root, args, { injector }) => {
      const { imageId } = args.input;

      return injector.get(CatAPI).createFavourite(imageId);
    },

    removeFavourite: async (root, args, { injector }) => {
      const { id } = args.input;

      return injector.get(CatAPI).removeFavourite(id);
    },
  },
};
