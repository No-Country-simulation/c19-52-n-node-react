import mongoose from "mongoose";

const movieCollection = 'movies'

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    thumbnail: String,
    category: String
})

export const movieModel = mongoose.model(movieCollection, movieSchema)