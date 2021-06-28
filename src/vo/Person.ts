import IPerson from '../interfaces/IPerson';

export default class Person implements IPerson {
    public biography = '';
    public birthday: Date | null = null;
    public deathday: Date | null = null;
    public gender = 0;
    public id = NaN;
    public department = '';
    public name = '';
    public birthPlace: string | null = null;
    public profile: string | null = null;
}
