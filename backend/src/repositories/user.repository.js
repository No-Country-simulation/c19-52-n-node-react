export default class UserRepository {
    constructor(dao){
        this.dao = dao
    }

    getUserByEmail = async (email) => await this.dao.getUserByEmail(email)
    saveUser = async (user) => await this.dao.saveUser(user)
}