import ICast from '../interfaces/ICast';
import IMovieCredits from '../interfaces/IMovieCredits';
import ICrew from '../interfaces/ICrew';

export default class MovieCredits implements IMovieCredits {
    public cast: Array<ICast> = [];
    public crew: Array<ICrew> = [];
}
