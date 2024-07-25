import mongoose from "mongoose";

const listCollection = 'lists'

const listSchema = mongoose.Schema({
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