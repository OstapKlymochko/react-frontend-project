import {apiServices, IRes} from "./apiServices";
import {urls} from "../configs";
import {IGenres} from "../interfaces";

const genreServices = {
    getAll: (): IRes<IGenres> => apiServices.get(urls.genres.genres)
}

export {
    genreServices
}

