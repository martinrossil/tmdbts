import ICompany from '../interfaces/ICompany';

export default class Company implements ICompany {
    public country = '';
    public id = NaN;
    public logo: string | null = null;
    public name = '';
}
