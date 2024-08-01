import { userModel } from "../models/user.model.js"

export default class UsersMongo {

    async getUsers(condition = {}){
        try {
            const users = await userModel.find(condition).populate('lists.list')
            return users
        } catch (error) {
            console.log(error)
            return null
        }
    }
    
    async getUserByEmail(email){
        try{
            const user = await userModel.findOne({email}).populate('lists.list')
            return user
        } catch(error) {
            console.log(error)
            return null
        }
    }

    async getUserById(id){
        try {
            const user = await userModel.findOne({_id: id}).populate('lists.list')
            return user
        } catch (error) {
            console.error(error)
            return null
        }
    }

    async saveUser(user){
        try {
            const result = await userModel.create(user)
            return result
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async updateUser(id, values) {
        try {
            const update = await userModel.updateOne({ _id: id }, {$set: values})
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

    async addList(email, list) {
        try {
            const user = await this.getUserByEmail(email)
            user.lists.push(list)
            await user.save()
            return true
        } catch (error) {
            console.error(error.message)
            return null
        }
    }

    async deleteOneUser(id) {
        try {
            const deleted = await userModel.deleteOne({ _id: id })
            if (deleted.deletedCount > 0) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async deleteManyUsers(condition){
        try {
            const users = await userModel.deleteMany(condition)
            return users
        } catch (error) {
            console.log(error)
            return null
        }
    }
}