import mongoose from "mongoose";

const Schema = mongoose.Schema;

const trainerSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    },
}, {
    timestamps: true
});

export const Trainer = mongoose.model('Trainer', trainerSchema);