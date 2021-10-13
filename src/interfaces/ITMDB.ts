import { JobsSchema } from '../schemas/JobsSchema';
import { ReleaseDatesSchema } from '../schemas/ReleaseDatesSchema';
import ICountry from './ICountry';
import IMovieCredits from './IMovieCredits';
import IGenre from './IGenre';
import IImages from './IImages';
import ILanguage from './ILanguage';
import IMovie from './IMovie';
import IPerson from './IPerson';
import { TranslationsSchema } from '../schemas/TranslationsSchema';
import { WatchProvidersSchema } from '../schemas/WatchProvidersSchema';

export default interface ITMDB {
    getMovie(id: number, language: string): Promise<[IMovie | null, Error | null]>;
    getMovieCredits(id: number, language: string): Promise<[IMovieCredits | null, Error | null]>;
    getCountriesList(): Promise<[Array<ICountry> | null, Error | null]>;
    getLanguagesList(): Promise<[Array<ILanguage> | null, Error | null]>;
    getJobsList(): Promise<[Array<JobsSchema> | null, Error | null]>;
    getGenresList(language: string): Promise<[Array<IGenre> | null, Error | null]>;
    getReleaseDates(id: number): Promise<[Array<ReleaseDatesSchema> | null, Error | null]>;
    getMovieImages(id: number, language: string): Promise<[IImages | null, Error | null]>;
    getNowPlaying(language: string, region: string, page: number): Promise<[unknown | null, Error | null]>;
    getPerson(id: number, language: string): Promise<[IPerson | null, Error | null]>;
    getPersonCredits(id: number, language: string): Promise<[unknown | null, Error | null]>;
    getTranslations(id: number): Promise<[TranslationsSchema | null, Error | null]>;
    getWatchProviders(id: number): Promise<[WatchProvidersSchema | null, Error | null]>;
}
