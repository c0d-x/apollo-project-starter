export interface BreedTransformerType {
    id: String;
    name: String;
    description: String;
    origin: String;
    rare: Boolean;
    mood: String;
    hypoallergenic: Boolean;
    hairless: Boolean;
    externalLink: String;
}

export interface CategoryTransformerType {
    id: String;
    name: String;
}

export interface ImageTransformerType {
    id: String;
    url: String;
    breeds: (BreedTransformerType)[]
}

export interface FavouriteTransformerType {
    id: String;
    createdAt: Date;
    reference: String;
    image: ImageTransformerType;
}

export interface VoteTransformerType {
    id: String;
    createdAt: Date;
    imageId: String;
    value: String;
}
