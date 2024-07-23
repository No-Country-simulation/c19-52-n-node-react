import mongoose from "mongoose";

const listCollection = 'lists'

const listSchema = mongoose.Schema({
    owner: {
        type: String,
        ref: 'users'
    },
    movies: {
        type: [
            {
                movie: {
                    type: String,
                    ref: 'movies'
                }
            }
        ],
        default: []
    }
})

export const listModel = mongoose.model(listCollection, listSchema)