import {apiServices, IRes} from "./apiServices";
import {urls} from "../configs";
import {IDetails, IMovies, IPhotos, IVideos} from "../interfaces";


const moviesServices = {
    getAll: (page = 1): IRes<IMovies> => {
        const param = page ? page : 1
        return apiServices.get(urls.discover.discover, {params: {page:param}})
    },
    getAllWithGenres: (with_genres:number|null, page = 1): IRes<IMovies> => {
        const genreId = with_genres ? with_genres : '';
        return apiServices.get(`${urls.discover.discover}?page=${page}&with_genres=${genreId}`)
    },
    getAllByKeyword: (keywords:string|null, page = 1): IRes<IMovies> => {
        const keyWords = keywords ? keywords : '';
        return apiServices.get(`${urls.search.search}?query=${keyWords}&page=${page}`)
    },
    getTodayTrends: (): IRes<IMovies> => apiServices.get(urls.trending.trending),
    getById: (id: number): IRes<IDetails> => apiServices.get(`${urls.movie.movie}/${id}`),
    getImages: (id: number): IRes<IPhotos> => apiServices.get(`${urls.movie.movie}/${id}/${urls.images.images}`),
    getVideos: (id: number): IRes<IVideos> => apiServices.get(`${urls.movie.movie}/${id}/videos`)
}

export {
    moviesServices
}