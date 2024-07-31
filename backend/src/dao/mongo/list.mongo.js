import { listModel } from "../models/list.model.js"

export default class ListMongo {
    async get(id){
        try {
            const lists = await listModel.find()
            return lists
        } catch (error) {
            return null
        }
    }

    async getById(id) {
        try {
            const list = await listModel.findOne({_id: id}).populate('movies') //TODO
            return list
        } catch (error) {
            return error
        }
    }

    async create(title){
        try {
            const result = await listModel.create({title})
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
            return null
        }
    }

    async delete(id){
        try {
            const result = await listModel.deleteOne({_id: id})
            if (result.matchedCount > 0) {
                return true
            } else {
                return false
            }
        } catch (error) {
            return null
        }
    }

    //TODO delete movie from list
}