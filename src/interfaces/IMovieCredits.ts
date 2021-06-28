import ICast from './ICast';
import ICrew from './ICrew';

export default interface IMovieCredits {
    cast: Array<ICast>;
    crew: Array<ICrew>
}
