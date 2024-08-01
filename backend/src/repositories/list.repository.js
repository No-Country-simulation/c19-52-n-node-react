export default class ListRepository {
    constructor(dao){
        this.dao = dao
    }

    getLists = async () => await this.dao.get()
    getOneList = async (id) => await this.dao.getById(id)
    createList = async (title) => await this.dao.create(title)
    addMovie = async(lid, mid) => await this.dao.addMovie(lid, mid)
    updateList = async (lid, values) => await this.dao.update(lid, values)
    deleteList = async (lid) => await this.dao.delete(lid)
    removeMovieInList = async (lid, mid) => await this.dao.removeMovieInList(lid, mid)
}