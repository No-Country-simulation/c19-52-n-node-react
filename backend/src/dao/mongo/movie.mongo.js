import {movieModel} from "../models/movie.model.js"

export default class MovieMongo {
    async get(){
    }

    async getById(id) {
        try {
            const result = await movieModel.findOne({_id: id})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async saveMovie(movie){
        try {
            const result = await movieModel.create(movie)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

}