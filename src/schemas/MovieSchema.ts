import { CollectionSchema } from './CollectionSchema';
import { CompanySchema } from './CompanySchema';
import { CountrySchema } from './CountrySchema';
import { GenreSchema } from './GenreSchema';
import { LanguageSchema } from './LanguageSchema';

/* eslint-disable camelcase */
export type MovieSchema = {
    adult: boolean,
    backdrop_path: string | null,
    belongs_to_collection: CollectionSchema | null,
    budget: number,
    genres: Array<GenreSchema>,
    homepage: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    production_companies: Array<CompanySchema>,
    production_countries: Array<CountrySchema>,
    release_date: string,
    revenue: number,
    runtime: number | null,
    spoken_languages: Array<LanguageSchema>,
    status: string,
    tagline: string | null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}
