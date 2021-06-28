import IBackdrop from '../interfaces/IBackdrop';
import IImages from '../interfaces/IImages';
import IPoster from '../interfaces/IPoster';

export default class Images implements IImages {
    public backdrops: Array<IBackdrop> = [];
    public posters: Array<IPoster> = [];
}
