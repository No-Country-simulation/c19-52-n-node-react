import dotenv from 'dotenv'

export const getVariables = () => {
    if (process.env.NODE_ENV === 'production') {
        dotenv.config({
            path: './.env.prod'
        })
    } else {
        dotenv.config({
            path: './.env'
        })
    }
    

    return {
        PORT: process.env.PORT,
        MONGO_URL: process.env.MONGO_URL,
        JWT_KEY: process.env.JWT_KEY,
        FRONT_URL: process.env.FRONT_URL
    }
}
