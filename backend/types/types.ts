import { Document } from "mongoose"

export interface IExercises extends Document {
    description: string,
    duration: number
}

export interface IUsers extends Document {
    username: string
}