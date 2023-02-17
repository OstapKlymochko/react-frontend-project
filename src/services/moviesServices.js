import {apiServices} from "./apiServices";
import {urls} from "../configs/urls";

const moviesServices = {
    getAll: (page = 1) => apiServices.get(urls.discover.discover, {params: {page}}),
    getWeekTrends: (page = 1) => apiServices.get(urls.trending.trending, {params: {page}}),
}

export {
    moviesServices
}
