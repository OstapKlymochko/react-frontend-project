import {apiServices} from "./apiServices";
import {urls} from "../configs/urls";

const genreSevices = {
    getAll: ()=> apiServices.get(urls.genres.genres)
}

export {
    genreSevices
}