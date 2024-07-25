import mongoose from "mongoose";

const userCollection = 'users';

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    lists: {
        type: [
            {   
                list: {
                    type: mongoose.SchemaTypes.ObjectId,
                    ref: 'lists'
                }
            }
        ]
        
    }
})

export const userModel = mongoose.model(userCollection, userSchema)