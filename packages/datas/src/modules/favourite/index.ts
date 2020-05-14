import * as fs from 'fs';
import * as path from 'path';
import { GraphQLModule } from '@graphql-modules/core';
import { CatAPI } from 'project-starter-datasources/src';

import resolvers from './resolvers';

export const FavouriteModule = new GraphQLModule({
  providers: [
    CatAPI,
  ],
  typeDefs: [
    fs.readFileSync(path.join(__dirname, '/schema/favourite.graphql'), 'utf8'),
    fs.readFileSync(path.join(__dirname, '/schema/queries.graphql'), 'utf8'),
    fs.readFileSync(path.join(__dirname, '/schema/mutations.graphql'), 'utf8'),
  ],
  resolvers,
});
