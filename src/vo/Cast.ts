import ICast from '../interfaces/ICast';

export default class Cast implements ICast {
    public character = '';
    public department = '';
    public gender: number | null = null;
    public id = NaN;
    public name = '';
    public order = NaN;
    public profile: string | null = null;
}
