export interface IMovie {
    id: string;
    title: string;
    description: string;
    director: string;
    producer: string;
    release_date: number;
    rt_score: number;
    url: string;
    people: Array<string>;
    species: Array<string>;
    locations: Array<string>;
    vehicles: Array<string>;
}