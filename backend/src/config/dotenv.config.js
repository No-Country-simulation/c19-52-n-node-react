import dotenv from 'dotenv'

export const getVariables = () => {
    dotenv.config({
        path: './.env'
    })

    return {
        PORT: process.env.PORT,
        MONGO_URL: process.env.MONGO_URL,
        JWT_KEY: process.env.JWT_KEY,
        FRONT_URL: process.env.FRONT_URL
    }
}
