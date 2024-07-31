import mongoose from "mongoose";

const listCollection = 'lists'

const listSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
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
    },
    visibility: {
        type: String,
        enum: ['public', 'private'],
        default: 'private'
    }
})

export const listModel = mongoose.model(listCollection, listSchema)