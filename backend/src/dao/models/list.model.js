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
                    type: mongoose.Schema.ObjectId,
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
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    }
})

export const listModel = mongoose.model(listCollection, listSchema)