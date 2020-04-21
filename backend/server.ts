import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import exercisesRouter from './routes/exercises';
import userRoutes from './routes/users';
import bluebird from "bluebird";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
mongoose.Promise = bluebird
const uri = process.env.ATLAS_URI;
mongoose.connect(`${uri}`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

app.use('/exercises', exercisesRouter);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port:"${port}`);
});


