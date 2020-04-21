import { Document } from "mongoose"

export interface IExercises extends Document {
    description: string,
    duration: number
}

export interface ITrainer extends Document {
    trainer: string
}