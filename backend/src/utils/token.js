import jwt from 'jsonwebtoken'
import { getVariables } from "../config/dotenv.config.js"

const {JWT_KEY} = getVariables()

export const generateToken = (user) => jwt.sign(user, JWT_KEY, {expiresIn: '1h'})