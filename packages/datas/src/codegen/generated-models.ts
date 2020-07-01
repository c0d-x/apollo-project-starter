import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ModuleContext } from '@graphql-modules/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Breed = {
  __typename?: 'Breed';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  mood?: Maybe<Scalars['String']>;
  lifeSpan?: Maybe<Scalars['String']>;
  rare?: Maybe<Scalars['Boolean']>;
  hypoallergenic?: Maybe<Scalars['Boolean']>;
  hairless?: Maybe<Scalars['Boolean']>;
  ratings?: Maybe<BreedRatings>;
  externalLink?: Maybe<Scalars['String']>;
};

export type BreedRatings = {
  __typename?: 'BreedRatings';
  affection?: Maybe<Scalars['Int']>;
  energy?: Maybe<Scalars['Int']>;
  intelligence?: Maybe<Scalars['Int']>;
  sociability?: Maybe<Scalars['Int']>;
  vocality?: Maybe<Scalars['Int']>;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type Favourite = {
  __typename?: 'Favourite';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  reference?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
};

export type FavouriteCreateInput = {
  imageId: Scalars['String'];
};

export type FavouriteRemoveInput = {
  id: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['String'];
  url: Scalars['String'];
  favouriteId?: Maybe<Scalars['String']>;
  breeds?: Maybe<Array<Maybe<Breed>>>;
  vote?: Maybe<Vote>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createFavourite?: Maybe<Favourite>;
  removeFavourite?: Maybe<PartialFavourite>;
  createVote?: Maybe<Vote>;
};


export type MutationCreateFavouriteArgs = {
  input: FavouriteCreateInput;
};


export type MutationRemoveFavouriteArgs = {
  input: FavouriteRemoveInput;
};


export type MutationCreateVoteArgs = {
  input: VoteCreateInput;
};

export enum OrderEnum {
  ASC = 'Asc',
  DESC = 'Desc',
  RAND = 'Rand'
}

export type PartialFavourite = {
  __typename?: 'PartialFavourite';
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getCategories?: Maybe<Array<Maybe<Category>>>;
  getFavourites?: Maybe<Array<Maybe<Favourite>>>;
  getFavourite?: Maybe<Favourite>;
  getImages?: Maybe<Array<Maybe<Image>>>;
  getBreeds?: Maybe<Array<Maybe<Breed>>>;
};


export type QueryGetCategoriesArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGetFavouriteArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryGetImagesArgs = {
  breedId?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type Vote = {
  __typename?: 'Vote';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  imageId?: Maybe<Scalars['String']>;
  value?: Maybe<VoteEnum>;
};

export type VoteCreateInput = {
  imageId: Scalars['String'];
  vote?: Maybe<VoteEnum>;
};

export enum VoteEnum {
  UP = 1,
  DOWN = 0
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Category: ResolverTypeWrapper<Category>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Favourite: ResolverTypeWrapper<Favourite>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Image: ResolverTypeWrapper<Image>;
  Breed: ResolverTypeWrapper<Breed>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BreedRatings: ResolverTypeWrapper<BreedRatings>;
  Vote: ResolverTypeWrapper<Vote>;
  VoteEnum: VoteEnum;
  Mutation: ResolverTypeWrapper<{}>;
  FavouriteCreateInput: FavouriteCreateInput;
  FavouriteRemoveInput: FavouriteRemoveInput;
  PartialFavourite: ResolverTypeWrapper<PartialFavourite>;
  VoteCreateInput: VoteCreateInput;
  OrderEnum: OrderEnum;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Int: Scalars['Int'];
  Category: Category;
  String: Scalars['String'];
  Favourite: Favourite;
  Date: Scalars['Date'];
  Image: Image;
  Breed: Breed;
  Boolean: Scalars['Boolean'];
  BreedRatings: BreedRatings;
  Vote: Vote;
  Mutation: {};
  FavouriteCreateInput: FavouriteCreateInput;
  FavouriteRemoveInput: FavouriteRemoveInput;
  PartialFavourite: PartialFavourite;
  VoteCreateInput: VoteCreateInput;
};

export type BreedResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Breed'] = ResolversParentTypes['Breed']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  origin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lifeSpan?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rare?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hypoallergenic?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hairless?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ratings?: Resolver<Maybe<ResolversTypes['BreedRatings']>, ParentType, ContextType>;
  externalLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type BreedRatingsResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['BreedRatings'] = ResolversParentTypes['BreedRatings']> = {
  affection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  energy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  intelligence?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sociability?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vocality?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CategoryResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type FavouriteResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Favourite'] = ResolversParentTypes['Favourite']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ImageResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  favouriteId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  breeds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Breed']>>>, ParentType, ContextType>;
  vote?: Resolver<Maybe<ResolversTypes['Vote']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createFavourite?: Resolver<Maybe<ResolversTypes['Favourite']>, ParentType, ContextType, RequireFields<MutationCreateFavouriteArgs, 'input'>>;
  removeFavourite?: Resolver<Maybe<ResolversTypes['PartialFavourite']>, ParentType, ContextType, RequireFields<MutationRemoveFavouriteArgs, 'input'>>;
  createVote?: Resolver<Maybe<ResolversTypes['Vote']>, ParentType, ContextType, RequireFields<MutationCreateVoteArgs, 'input'>>;
};

export type OrderEnumResolvers = { ASC: 'Asc', DESC: 'Desc', RAND: 'Rand' };

export type PartialFavouriteResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['PartialFavourite'] = ResolversParentTypes['PartialFavourite']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType, RequireFields<QueryGetCategoriesArgs, never>>;
  getFavourites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Favourite']>>>, ParentType, ContextType>;
  getFavourite?: Resolver<Maybe<ResolversTypes['Favourite']>, ParentType, ContextType, RequireFields<QueryGetFavouriteArgs, never>>;
  getImages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, RequireFields<QueryGetImagesArgs, never>>;
  getBreeds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Breed']>>>, ParentType, ContextType>;
};

export type VoteResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Vote'] = ResolversParentTypes['Vote']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  imageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['VoteEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type VoteEnumResolvers = { UP: '1', DOWN: '0' };

export type Resolvers<ContextType = ModuleContext> = {
  Breed?: BreedResolvers<ContextType>;
  BreedRatings?: BreedRatingsResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Favourite?: FavouriteResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OrderEnum?: OrderEnumResolvers;
  PartialFavourite?: PartialFavouriteResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Vote?: VoteResolvers<ContextType>;
  VoteEnum?: VoteEnumResolvers;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ModuleContext> = Resolvers<ContextType>;
