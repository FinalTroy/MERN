import mongoose, {Schema} from "mongoose";
import { IExercises } from "../types/types"

const exerciseSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model<IExercises>('Exercise', exerciseSchema);