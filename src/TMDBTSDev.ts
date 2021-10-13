import { ApplicationElement } from 'enta';
import ITMDB from './interfaces/ITMDB';
import TMDB from './tmdb/TMDB'

export default class TMDBTSDev extends ApplicationElement {
    private static TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTg3M2M2ODc2ZGE1ZTc1ZDRlODUzMWExM2EzYzdhMiIsInN1YiI6IjUzYjY4ZmMwYzNhMzY4NWViYTAwMjI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pX8fkzpaVD3UaFZPP6y4JkFgrIcZSIo3g1c7nH12luM';
    public constructor() {
        super();
        this.name = 'TMDBTSDev';
        // 508943 Luca 13 Forrest gump 1858 Transformers
        window.addEventListener('click', async () => { // 663870 Retfærdighedens ryttere // 348 Alien - Den 8 passager
            const [data, error] = await this.tmdb.getReleaseDates(778819);
            console.log(data);
        });
    }

    private _tmdb!: ITMDB;
    private get tmdb(): ITMDB {
        if (!this._tmdb) {
            this._tmdb = new TMDB(TMDBTSDev.TMDB_TOKEN);
        }
        return this._tmdb;
    }
}
customElements.define('tmdbts-dev', TMDBTSDev);
