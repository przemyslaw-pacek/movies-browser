export interface Tile {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  role?: string;
  year?: Date;
  genres?: Array<string>;
  rating?: number;
  votes?: number;
}

export interface Movie {
  id: number;
  title: string;
  credit_id: string;
  poster_path: string;
  backdrop_path: string;
  release_date: Date;
  genres: Array<{ id: number; name: string }>;
  genre_ids: Array<number>;
  overview: string;
  vote_average: number;
  vote_count: number;
  production_countries: Array<{ iso_3166_1: string; name: string }>;
  character: string;
  job: string;
}

export interface Person {
  id: number;
  credit_id: string;
  profile_path: string;
  name: string;
  original_name: string;
  character: string;
  job: string;
  birthday: Date;
  place_of_birth: string;
  deathday: Date;
  biography: string;
}
