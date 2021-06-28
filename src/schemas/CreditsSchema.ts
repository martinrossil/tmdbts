import { CastSchema } from './CastSchema';
import { CrewSchema } from './CrewSchema';

export type CreditsSchema = {
    id: number,
    cast: Array<CastSchema>,
    crew: Array<CrewSchema>
}
