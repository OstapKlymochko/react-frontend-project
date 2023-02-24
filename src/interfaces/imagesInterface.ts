type IPhoto = {
    aspect_ratio: number,
    height: number,
    iso_639_1: string | null,
    file_path: string,
    vote_average: number,
    vote_count: number,
    width: number;
}

export type IPhotos = {
    id?: number;
    backdrops: IPhoto[];
    posters: IPhoto[];
}