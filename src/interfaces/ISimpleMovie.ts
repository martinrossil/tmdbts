export default interface ISimpleMovie {
    adult: boolean;
    backdrop: string | null;
    originalLanguage: string;
    originalTitle: string;
    overview: string | null;
    popularity: number;
    poster: string | null;
    releaseDate: Date;
    title: string;
    voteAverage: number;
    voteCount: number;
}
