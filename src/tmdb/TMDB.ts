import SchemaToVOAdapter from '../adapters/SchemaToVOAdapter';
import ICountry from '../interfaces/ICountry';
import IMovieCredits from '../interfaces/IMovieCredits';
import IGenre from '../interfaces/IGenre';
import IImages from '../interfaces/IImages';
import ILanguage from '../interfaces/ILanguage';
import IMovie from '../interfaces/IMovie';
import IPerson from '../interfaces/IPerson';
import ITMDB from '../interfaces/ITMDB';
import { CountrySchema } from '../schemas/CountrySchema';
import { CreditsSchema } from '../schemas/CreditsSchema';
import { GenreSchema } from '../schemas/GenreSchema';
import { ImagesSchema } from '../schemas/ImagesSchema';
import { JobsSchema } from '../schemas/JobsSchema';
import { LanguageSchema } from '../schemas/LanguageSchema';
import { MovieSchema } from '../schemas/MovieSchema';
import { PersonSchema } from '../schemas/PersonSchema';
import { ReleaseDatesSchema } from '../schemas/ReleaseDatesSchema';

export default class TMDB implements ITMDB {
    private static BASE_URL_V3 = 'https://api.themoviedb.org/3';
    private token: string;
    public constructor(token: string) {
        this.token = token;
    }

    public async getMovie(id: number, language = 'en'): Promise<[IMovie | null, Error | null]> {
        const url = TMDB.BASE_URL_V3 + '/movie/' + id + '?language=' + language + '&include_adult=false';
        try {
            const movieResponse = await fetch(url, this.requestInit);
            const movieJson = await movieResponse.json();
            if (movieResponse.ok) {
                const movieSchema: MovieSchema = movieJson;
                const movie: IMovie = SchemaToVOAdapter.movieSchemaToIMovie(movieSchema);
                const [credits, error] = await this.getMovieCredits(id);
                if (credits) {
                    movie.cast = credits.cast;
                    movie.crew = credits.crew;
                    return [movie, null];
                }
                if (error) {
                    return [null, new Error(error.message)];
                }
            }
            return [null, new Error(movieJson.status_message)];
        } catch (error) {
            const typeError: TypeError = error;
            return [null, new Error(typeError.message)];
        }
    }

    public async getCountriesList(): Promise<[Array<ICountry> | null, Error | null]> {
        const url = TMDB.BASE_URL_V3 + '/configuration/countries';
        try {
            const response = await fetch(url, this.requestInit);
            const json = await response.json();
            if (response.ok) {
                const list: Array<CountrySchema> = json;
                const countries: Array<ICountry> = SchemaToVOAdapter.countrySchemaToArrayICountry(list);
                return [countries, null];
            }
            return [null, new Error(json.status_message)];
        } catch (error) {
            const typeError: TypeError = error;
            return [null, new Error(typeError.message)];
        }
    }

    public async getLanguagesList(): Promise<[Array<ILanguage> | null, Error | null]> {
        const url = TMDB.BASE_URL_V3 + '/configuration/languages';
        try {
            const response = await fetch(url, this.requestInit);
            const json = await response.json();
            if (response.ok) {
                const list: Array<LanguageSchema> = json;
                const languages: Array<ILanguage> = SchemaToVOAdapter.languageSchemaToArrayILanguage(list);
                return [languages, null];
            }
            return [null, new Error(json.status_message)];
        } catch (error) {
            const typeError: TypeError = error;
            return [null, new Error(typeError.message)];
        }
    }

    public async getJobsList(): Promise<[Array<JobsSchema> | null, Error | null]> {
        const url = TMDB.BASE_URL_V3 + '/configuration/jobs';
        try {
            const response = await fetch(url, this.requestInit);
            const json = await response.json();
            if (response.ok) {
                const list: Array<JobsSchema> = json;
                return [list, null];
            }
            return [null, new Error(json.status_message)];
        } catch (error) {
            const typeError: TypeError = error;
            return [null, new Error(typeError.message)];
        }
    }

    public async getGenresList(language = 'en-US'): Promise<[Array<IGenre> | null, Error | null]> {
        const url = TMDB.BASE_URL_V3 + '/genre/movie/list?language=' + language;
        try {
            const response = await fetch(url, this.requestInit);
            const json = await response.json();
            if (response.ok) {
                const list: Array<GenreSchema> = json.genres;
                const genres: Array<IGenre> = SchemaToVOAdapter.genreSchemaToArrayIGenre(list);
                return [genres, null];
            }
            return [null, new Error(json.status_message)];
        } catch (error) {
            const typeError: TypeError = error;
            return [null, new Error(typeError.message)];
        }
    }

    public async getReleaseDates(id: number): Promise<[Array<ReleaseDatesSchema> | null, Error | null]> {
        const url = TMDB.BASE_URL_V3 + '/movie/' + id + '/release_dates';
        try {
            const response = await fetch(url, this.requestInit);
            const json = await response.json();
            if (response.ok) {
                const list: Array<ReleaseDatesSchema> = json.results;
                return [list, null];
            }
            return [null, new Error(json.status_message)];
        } catch (error) {
            const typeError: TypeError = error;
            return [null, new Error(typeError.message)];
        }
    }

    public async getMovieCredits(id: number, language = 'en-US'): Promise<[IMovieCredits | null, Error | null]> {
        const url = TMDB.BASE_URL_V3 + '/movie/' + id + '/credits?language=' + language;
        try {
            const response = await fetch(url, this.requestInit);
            const json = await response.json();
            if (response.ok) {
                const creditsSchema: CreditsSchema = json;
                const credits: IMovieCredits = SchemaToVOAdapter.creditsSchemaToICredits(creditsSchema);
                return [credits, null];
            }
            return [null, new Error(json.status_message)];
        } catch (error) {
            const typeError: TypeError = error;
            return [null, new Error(typeError.message)];
        }
    }

    public async getMovieImages(id: number, language = 'en'): Promise<[IImages | null, Error | null]> {
        const url = TMDB.BASE_URL_V3 + '/movie/' + id + '/images?language=' + language + '&include_image_language=' + language + ',en';
        try {
            const response = await fetch(url, this.requestInit);
            const json = await response.json();
            if (response.ok) {
                const imagesSchema: ImagesSchema = json;
                const images: IImages = SchemaToVOAdapter.imagesSchemaToIImages(imagesSchema);
                return [images, null];
            }
            return [null, new Error(json.status_message)];
        } catch (error) {
            const typeError: TypeError = error;
            return [null, new Error(typeError.message)];
        }
    }

    public async getNowPlaying(language: string, region: string, page: number): Promise<[unknown | null, Error | null]> {
        const url = TMDB.BASE_URL_V3 + '/movie/now_playing?language=' + language + '&region=' + region + '&page=' + page;
        try {
            const response = await fetch(url, this.requestInit);
            const json = await response.json();
            if (response.ok) {
                //
            }
            return [null, new Error(json.status_message)];
        } catch (error) {
            const typeError: TypeError = error;
            return [null, new Error(typeError.message)];
        }
    }

    public async getPerson(id: number, language: string): Promise<[IPerson | null, Error | null]> {
        const url = TMDB.BASE_URL_V3 + '/person/' + id + '?language=' + language;
        try {
            const response = await fetch(url, this.requestInit);
            const json = await response.json();
            if (response.ok) {
                const personSchema: PersonSchema = json;
                const person: IPerson = SchemaToVOAdapter.personSchemaToIPerson(personSchema);
                return [person, null];
            }
            return [null, new Error(json.status_message)];
        } catch (error) {
            const typeError: TypeError = error;
            return [null, new Error(typeError.message)];
        }
    }

    public async getPersonCredits(id: number, language: string): Promise<[unknown | null, Error | null]> {
        const url = TMDB.BASE_URL_V3 + '/person/' + id + '/movie_credits?language=' + language;
        try {
            const response = await fetch(url, this.requestInit);
            const json = await response.json();
            if (response.ok) {
                console.table(json);
            }
            return [null, new Error(json.status_message)];
        } catch (error) {
            const typeError: TypeError = error;
            return [null, new Error(typeError.message)];
        }
    }

    private get requestInit(): Record<string, string | Record<string, string> | Headers | string[][]> {
        return {
            method: 'GET',
            headers: this.headersInit
        }
    }

    private get headersInit(): Headers | string[][] | Record<string, string> {
        return {
            Authorization: 'Bearer ' + this.token,
            'Content-Type': 'application/json;charset=utf-8'
        }
    }
}
