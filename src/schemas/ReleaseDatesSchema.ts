import { ReleaseSchema } from './ReleaseSchema';

/* eslint-disable camelcase */
export type ReleaseDatesSchema = {
    iso_3166_1: string,
    release_dates: Array<ReleaseSchema>
}
