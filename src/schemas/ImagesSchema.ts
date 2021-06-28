import { BackdropSchema } from './BackdropSchema';
import { PosterSchema } from './PosterSchema';

export type ImagesSchema = {
    id: number,
    backdrops: Array<BackdropSchema>,
    posters: Array<PosterSchema>
}
