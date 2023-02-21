import {apiServices} from "./apiServices";
import {urls} from "../configs/urls";

const genreServices = {
    getAll: ()=> apiServices.get(urls.genres.genres)
}

export {
    genreServices
}