import mongoose, {Schema} from "mongoose";
import { IUsers } from "../types/types";

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

export default mongoose.model<IUsers>('Trainer', trainerSchema);