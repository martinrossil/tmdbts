export default interface IPerson {
    biography: string,
    birthday: Date | null,
    deathday: Date | null,
    gender: number,
    id: number,
    department: string,
    name: string,
    birthPlace: string | null,
    profile: string | null
}
