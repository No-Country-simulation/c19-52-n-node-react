export default class ListRepository {
    constructor(dao){
        this.dao = dao
    }

    getLists = async (filter) => await this.dao.get(filter)
    getOneList = async (id) => await this.dao.getById(id)
    createList = async (title, uid) => await this.dao.create(title, uid)
    addMovie = async(lid, mid) => await this.dao.addMovie(lid, mid)
    updateList = async (lid, values) => await this.dao.update(lid, values)
    deleteList = async (lid) => await this.dao.delete(lid)
    removeMovieInList = async (lid, mid) => await this.dao.removeMovieInList(lid, mid)
}