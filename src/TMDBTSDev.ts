import { ApplicationElement } from 'enta';
import ITMDB from './interfaces/ITMDB';
import TMDB from './tmdb/TMDB'

export default class TMDBTSDev extends ApplicationElement {
    private static TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTg3M2M2ODc2ZGE1ZTc1ZDRlODUzMWExM2EzYzdhMiIsInN1YiI6IjUzYjY4ZmMwYzNhMzY4NWViYTAwMjI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pX8fkzpaVD3UaFZPP6y4JkFgrIcZSIo3g1c7nH12luM';
    public constructor() {
        super();
        this.name = 'TMDBTSDev';
        console.log(this.name); // 508943 Luca
        window.addEventListener('click', async () => { // 663870 Retfærdighedens ryttere // 348 Alien - Den 8 passager
            const [images, error] = await this.tmdb.getMovieImages(663870, 'da');
            console.log(images);
            // const [playing, error] = await this.tmdb.getNowPlaying('en', 'AU', 1);
            // console.log(playing);
            // const [credits, error] = await this.tmdb.getPersonCredits(1019, 'da-DK');
            // console.log(credits);
            /* const [movie, error] = await this.tmdb.getMovie(348, 'da'); // Forrest gump 13 // 1858 Transformers
            if (movie) {
                console.table(movie);
            } else {
                console.log(error);
            } */
            /* const [list, error] = await this.tmdb.getGenresList('da-DK');
            if (list) {
                console.table(list);
                // console.log(list);
            } */
            /* const [credits, error] = await this.tmdb.getCredits(120, 'da-DK');
            if (credits) {
                console.table(credits.cast);
                console.table(credits.crew);
            } */
            /* const uri = 'https://mozilla.org/?x=a b c';
            const encoded = encodeURI(uri);
            console.log(encoded); */
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
