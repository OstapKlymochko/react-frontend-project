type ICollection = {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
}
type IGenre = {
    id: number;
    name: string;
}
type ICompany = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

type ICountry = {
    iso_3166_1: string;
    name: string;
}

type ILanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export type IDetails = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: ICollection;
    budget: number;
    genres: IGenre[];
    homepage: string;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: ICompany[];
    production_countries: ICountry[];
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: ILanguage[];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}