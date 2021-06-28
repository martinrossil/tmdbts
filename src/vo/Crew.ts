import ICrew from '../interfaces/ICrew';

export default class Crew implements ICrew {
    public department = '';
    public gender: number | null = null;
    public id = NaN;
    public job = '';
    public name = '';
    public profile: string | null = null;
}
