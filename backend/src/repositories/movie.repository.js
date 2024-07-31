export default class MovieRepository {
    constructor(dao){
        this.dao = dao
    }

    getMovie = async (id) => await this.dao.getById(id)
    saveMovie = async (movie) => await this.dao.saveMovie(movie)
}