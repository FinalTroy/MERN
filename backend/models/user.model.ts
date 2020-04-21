import mongoose, {Schema} from "mongoose";
import { ITrainer } from "../types/types";

const trainerSchema = new Schema({
    trainer: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    },
}, {
    timestamps: true
});

export default mongoose.model<ITrainer>('Trainer', trainerSchema);