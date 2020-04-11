import mongoose from "mongoose";
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    description : {
        type: String, 
        required: true
    },
    duration : {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

export const Exercise = mongoose.model('Exercise', exerciseSchema);