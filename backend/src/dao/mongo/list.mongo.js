import mongoose from "mongoose"
import { listModel } from "../models/list.model.js"

export default class ListMongo {
    async get(filter){
        try {
            const lists = await listModel.find(filter).populate('movies.movie')
            return lists
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getById(id) {
        try {
            const list = await listModel.findOne({_id: id}).populate('movies.movie')
            return list
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async create(title, uid){
        try {
            const result = await listModel.create({title, owner: new mongoose.Types.ObjectId(uid)})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async addMovie (lid, mid) {
        try {
            const list = await this.getById(lid)
            if(!list) return false
            list.movies.push({movie: mid})
            await list.save()
            return true
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async update(id, values){
        try {
            const update = await listModel.updateOne({ _id: id }, {$set: values})
            if (update.matchedCount > 0) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async delete(id){
        try {
            const result = await listModel.deleteOne({_id: id})
            if (result.deletedCount > 0) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async removeMovieInList(lid, mid){
        try {
            const list = await listModel.updateOne({_id: lid}, {
                $pull: {movies : {movie: new mongoose.Types.ObjectId(mid)}}
            })
            if(list.modifiedCount > 0){
                return true
            } else {
                return false
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }
}