import * as fs from 'fs';
import * as path from 'path';
import { GraphQLModule } from '@graphql-modules/core';
import { CatAPI } from 'project-starter-datasources/src';

import resolvers from './resolvers';

import { ImageModule } from '../image';

export const VoteModule = new GraphQLModule({
  providers: [
    CatAPI,
  ],
  typeDefs: [
    fs.readFileSync(path.join(__dirname, '/schema/vote.graphql'), 'utf8'),
    fs.readFileSync(path.join(__dirname, '/schema/enums.graphql'), 'utf8'),
    fs.readFileSync(path.join(__dirname, '/schema/mutations.graphql'), 'utf8'),
  ],
  resolvers,
  imports: [
    ImageModule,
  ],
});
