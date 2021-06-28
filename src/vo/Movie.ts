import ICast from '../interfaces/ICast';
import IGenre from '../interfaces/IGenre';
import IMovie from '../interfaces/IMovie';
import ICollection from '../interfaces/ICollection';
import ICompany from '../interfaces/ICompany';
import ICountry from '../interfaces/ICountry';
import ILanguage from '../interfaces/ILanguage';
import ICrew from '../interfaces/ICrew';

export default class Movie implements IMovie {
    public adult = false;
    public backdrop = '';
    public cast: Array<ICast> = [];
    public crew: Array<ICrew> = [];
    public budget = NaN;
    public genres: Array<IGenre> = [];
    public homepage: string | null = null;
    public id = NaN;
    public imdb = '';
    public movieCollection: ICollection | null = null;
    public originalLanguage = '';
    public originalTitle = '';
    public overview: string | null = null;
    public popularity = NaN;
    public poster: string | null = null;
    public productionCompanies: Array<ICompany> = [];
    public productionCountries: Array<ICountry> = [];
    public releaseDate: Date = new Date();
    public revenue = NaN;
    public runtime: number | null = null;
    public spokenLanguages: Array<ILanguage> = [];
    public status = '';
    public tagline: string | null = null;
    public title = '';
    public video = false;
    public voteAverage = NaN;
    public voteCount = NaN;
}
