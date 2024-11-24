export type EntityType = 'people' | 'planets' | 'starships';

export interface EntityBase {
  name: string;
  url: string;
}

export interface Character extends EntityBase {
  height: string;
  mass: string;
  gender: string;
  birth_year: string;
}

export interface Planet extends EntityBase {
  climate: string;
  population: string;
  terrain: string;
}

export interface Starship extends EntityBase {
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  crew: string;
}

export type Entity = Character | Planet | Starship;
