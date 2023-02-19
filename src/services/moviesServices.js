import {apiServices} from "./apiServices";
import {urls} from "../configs/urls";

const moviesServices = {
    getAll: (page = 1) => apiServices.get(urls.discover.discover, {params: {page}}),
    getTodayTrends: () => apiServices.get(urls.trending.trending),
    getById: (id) => apiServices.get(`${urls.movie.movie}/${id}`),
    getImages: (id) => apiServices.get(`${urls.movie.movie}/${id}/${urls.images.images}`)
}

export {
    moviesServices
}
