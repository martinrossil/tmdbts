import { ProviderSchema } from './ProviderSchema';

export type WatchProvidersSchema = {
    id: number,
    results: {
        DK: {
            link: string,
            rent: Array<ProviderSchema>,
            buy: Array<ProviderSchema>,
            flatrate: Array<ProviderSchema>
        } | undefined
    }
}
