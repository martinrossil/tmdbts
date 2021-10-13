/* eslint-disable camelcase */
export type TranslationsSchema = {
    id: number,
    translations: Array<{
        iso_3166_1: string,
        iso_639_1: string,
        name: string,
        english_name: string,
        data: {
            title: string,
            overview: string,
            homepage: string,
            runtime: number,
            tagline: string
        }
    }>
}
