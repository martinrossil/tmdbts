import IGenre from '../interfaces/IGenre';
import IMovie from '../interfaces/IMovie';
import ICollection from '../interfaces/ICollection';
import ICompany from '../interfaces/ICompany';
import ICountry from '../interfaces/ICountry';
import ILanguage from '../interfaces/ILanguage';
import { CollectionSchema } from '../schemas/CollectionSchema';
import { CompanySchema } from '../schemas/CompanySchema';
import { CountrySchema } from '../schemas/CountrySchema';
import { GenreSchema } from '../schemas/GenreSchema';
import { LanguageSchema } from '../schemas/LanguageSchema';
import { MovieSchema } from '../schemas/MovieSchema';
import Genre from '../vo/Genre';
import Movie from '../vo/Movie';
import Collection from '../vo/Collection';
import Company from '../vo/Company';
import Country from '../vo/Country';
import Language from '../vo/Language';
import { CreditsSchema } from '../schemas/CreditsSchema';
import IMovieCredits from '../interfaces/IMovieCredits';
import MovieCredits from '../vo/MovieCredits';
import ICast from '../interfaces/ICast';
import Cast from '../vo/Cast';
import ICrew from '../interfaces/ICrew';
import Crew from '../vo/Crew';
import { ImagesSchema } from '../schemas/ImagesSchema';
import IImages from '../interfaces/IImages';
import Images from '../vo/Images';
import IBackdrop from '../interfaces/IBackdrop';
import Backdrop from '../vo/Backdrop';
import IPoster from '../interfaces/IPoster';
import Poster from '../vo/Poster';
import IPerson from '../interfaces/IPerson';
import { PersonSchema } from '../schemas/PersonSchema';
import Person from '../vo/Person';

export default class SchemaToVOAdapter {
    static movieSchemaToIMovie(schema: MovieSchema): IMovie {
        const movie: IMovie = new Movie();
        movie.adult = schema.adult;
        movie.backdrop = schema.backdrop_path;
        movie.budget = schema.budget;
        movie.genres = SchemaToVOAdapter.genreSchemaToArrayIGenre(schema.genres);
        movie.homepage = schema.homepage;
        movie.id = schema.id;
        movie.imdb = schema.imdb_id;
        movie.movieCollection = SchemaToVOAdapter.collectionSchemaToICollection(schema.belongs_to_collection);
        movie.originalLanguage = schema.original_language;
        movie.originalTitle = schema.original_title;
        movie.overview = schema.overview;
        movie.popularity = schema.popularity;
        movie.poster = schema.poster_path;
        movie.productionCompanies = SchemaToVOAdapter.companySchemaToArrayICompany(schema.production_companies);
        movie.productionCountries = SchemaToVOAdapter.countrySchemaToArrayICountry(schema.production_countries);
        movie.releaseDate = new Date(schema.release_date);
        movie.revenue = schema.revenue;
        movie.runtime = schema.runtime;
        movie.spokenLanguages = SchemaToVOAdapter.languageSchemaToArrayILanguage(schema.spoken_languages);
        movie.status = schema.status;
        movie.tagline = schema.tagline;
        movie.title = schema.title;
        movie.video = schema.video;
        movie.voteAverage = schema.vote_average;
        movie.voteCount = schema.vote_count;
        return movie;
    }

    static languageSchemaToArrayILanguage(schema: Array<LanguageSchema>): Array<ILanguage> {
        const languages: Array<ILanguage> = [];
        for (const languageSchema of schema) {
            const language: ILanguage = new Language();
            language.iso = languageSchema.iso_639_1;
            language.name = languageSchema.english_name;
            languages.push(language);
        }
        return languages;
    }

    static countrySchemaToArrayICountry(schema: Array<CountrySchema>): Array<ICountry> {
        const countries: Array<ICountry> = [];
        for (const countrySchema of schema) {
            const country: ICountry = new Country();
            country.iso = countrySchema.iso_3166_1;
            country.name = countrySchema.english_name;
            countries.push(country);
        }
        return countries;
    }

    static companySchemaToArrayICompany(schema: Array<CompanySchema>): Array<ICompany> {
        const companies: Array<ICompany> = [];
        for (const companySchema of schema) {
            const company: ICompany = new Company();
            company.country = companySchema.origin_country;
            company.id = companySchema.id;
            company.logo = companySchema.logo_path;
            company.name = companySchema.name;
            companies.push(company);
        }
        return companies;
    }

    static genreSchemaToArrayIGenre(schema: Array<GenreSchema>): Array<IGenre> {
        const genres: Array<IGenre> = [];
        for (const genreSchema of schema) {
            const genre: IGenre = new Genre();
            genre.id = genreSchema.id;
            genre.name = genreSchema.name;
            genres.push(genre);
        }
        return genres;
    }

    static collectionSchemaToICollection(schema: CollectionSchema | null): ICollection | null {
        if (schema === null) {
            return null;
        }
        const collection: ICollection = new Collection();
        collection.backdrop = schema.backdrop_path;
        collection.id = schema.id;
        collection.name = schema.name;
        collection.poster = schema.poster_path;
        return collection;
    }

    static creditsSchemaToICredits(schema: CreditsSchema): IMovieCredits {
        const credits: IMovieCredits = new MovieCredits();
        for (const castSchema of schema.cast) {
            const cast: ICast = new Cast();
            cast.character = castSchema.character;
            cast.department = castSchema.known_for_department;
            cast.gender = castSchema.gender;
            cast.id = castSchema.id;
            cast.name = castSchema.name;
            cast.order = castSchema.order;
            cast.profile = castSchema.profile_path;
            credits.cast.push(cast);
        }
        for (const crewSchema of schema.crew) {
            const crew: ICrew = new Crew();
            crew.department = crewSchema.known_for_department;
            crew.gender = crewSchema.gender;
            crew.id = crewSchema.id;
            crew.job = crewSchema.job;
            crew.name = crewSchema.name;
            crew.profile = crewSchema.profile_path;
            credits.crew.push(crew);
        }
        return credits;
    }

    static imagesSchemaToIImages(schema: ImagesSchema): IImages {
        const images: IImages = new Images();
        for (const backdropSchema of schema.backdrops) {
            const backdrop: IBackdrop = new Backdrop();
            backdrop.height = backdropSchema.height;
            backdrop.iso = backdropSchema.iso_639_1;
            backdrop.path = backdropSchema.file_path;
            backdrop.width = backdropSchema.width;
            images.backdrops.push(backdrop);
        }
        for (const posterSchema of schema.posters) {
            const poster: IPoster = new Poster();
            poster.height = posterSchema.height;
            poster.iso = posterSchema.iso_639_1;
            poster.path = posterSchema.file_path;
            poster.width = posterSchema.width;
            images.posters.push(poster);
        }
        return images;
    }

    static personSchemaToIPerson(schema: PersonSchema): IPerson {
        const person: IPerson = new Person();
        person.biography = schema.biography;
        person.birthPlace = schema.place_of_birth;
        if (schema.birthday) {
            person.birthday = new Date(schema.birthday);
        }
        if (schema.deathday) {
            person.deathday = new Date(schema.deathday);
        }
        person.department = schema.known_for_department;
        person.gender = schema.gender;
        person.id = schema.id;
        person.name = schema.name;
        person.profile = schema.profile_path;
        return person;
    }
}
