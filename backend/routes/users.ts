import express from 'express'
import { Trainer } from '../models/user.model';

const userRoutes = express.Router();

userRoutes.route('/').get((req, res) => {
    Trainer.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

userRoutes.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new Trainer({username});

    newUser.save()
        .then(() => res.json('Trainer added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

export default userRoutes