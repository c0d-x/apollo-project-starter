import * as fs from 'fs';
import * as path from 'path';
import { GraphQLModule } from '@graphql-modules/core';
import { CatAPI } from 'project-starter-datasources/src';

import resolvers from './resolvers';

import { ImageModule } from '../image';

export const BreedModule = new GraphQLModule({
  providers: [
    CatAPI,
  ],
  typeDefs: [
    fs.readFileSync(path.join(__dirname, '/schema/breed.graphql'), 'utf8'),
    fs.readFileSync(path.join(__dirname, '/schema/queries.graphql'), 'utf8'),
  ],
  resolvers,
  imports: [
    ImageModule,
  ],
});
