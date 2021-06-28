import ICast from './ICast';
import IGenre from './IGenre';
import ICollection from './ICollection';
import ICompany from './ICompany';
import ICountry from './ICountry';
import ILanguage from './ILanguage';
import ICrew from './ICrew';
import ISimpleMovie from './ISimpleMovie';

export default interface IMovie extends ISimpleMovie {
    budget: number;
    cast: Array<ICast>;
    crew: Array<ICrew>;
    genres: Array<IGenre>;
    homepage: string | null;
    id: number;
    imdb: string | null;
    movieCollection: ICollection | null;
    productionCompanies: Array<ICompany>;
    productionCountries: Array<ICountry>;
    revenue: number;
    runtime: number | null;
    spokenLanguages: Array<ILanguage>;
    status: string;
    tagline: string | null;
    video: boolean;
}
