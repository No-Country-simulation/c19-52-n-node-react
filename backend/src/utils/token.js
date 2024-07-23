import jwt from 'jsonwebtoken'
import { getVariables } from "../config/dotenv.config.js"

const {JWT_KEY} = getVariables()

export const generateToken = (user) => jwt.sign(user, JWT_KEY, {expiresIn: '24h'})

export const authToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader) return res.status(401).send({error: 'No autenticado'})

    const token = authHeader.split(' ')[1]
    jwt.verify(token, JWT_KEY, (err, credentials) => {
        if(err) return res.status(403).send({error: 'No autorizado'})
        req.user = credentials.user
        next()
    })
}

