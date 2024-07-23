import { getVariables } from "../config/dotenv.config.js"

const {JWT_KEY} = getVariables()

export const authToken = async (req, res, next) => {
    const token = req.cookies.access_token
    req.session = {user: null}
    try {
        const data = jwt.verify(token, JWT_KEY)
        req.session.user = data
    } catch {}
    next()
}