import { GraphQLModule } from '@graphql-modules/core';

import { FavouriteModule } from './favourite';
import { CategoryModule } from './category';
import { BreedModule } from './breed';
import { ImageModule } from './image';
import { VoteModule } from './vote';

export const AppModules = new GraphQLModule({
  imports: [
    CategoryModule,
    BreedModule,
    ImageModule,
    FavouriteModule,
    VoteModule,
  ],
});
