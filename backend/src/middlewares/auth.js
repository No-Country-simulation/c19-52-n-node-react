import jwt from 'jsonwebtoken'
import { getVariables } from "../config/dotenv.config.js"
import { listsService } from '../repositories/index.js'

const {JWT_KEY} = getVariables()

export const authToken = async (req, res, next) => {
    const token = req.cookies.access_token
    if(!token) {
        return res.status(401).send({error: 'Unauthorized'})
    }
    req.session = {user: null}
    try {
        const data = jwt.verify(token, JWT_KEY)
        req.session.user = data
    } catch (error) {
        console.error({error:error.message})
        res.status(401).send({error: 'Unauthorized'})
    }
    next()
}

export const checkVisibility = async (req, res, next) => {
    try {
        const {lid} = req.params
        const list = await listsService.getOneList(lid)
        if(!list){
            return res.status(404).send({error: "List not found"})
        }
        if (list.visibility === 'public') return next()
        
        const token = req.cookies.access_token
        if(!token){
            return res.status(401).send({error: 'Unauthorized'})
        }
        req.session = {user: null}
        const data = jwt.verify(token, JWT_KEY)
        req.session.user = data
        const user = req.session.user
        
        if(user?.id != list.owner){
            console.error('403: Forbidden. User is not allowed to see this list.')
            return res.status(403).send({error: 'Forbidden. User is not allowed to see this list.'})
        }
        next()
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}