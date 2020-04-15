import express from 'express'
import Trainer from '../models/user.model';

const userRoutes = express.Router();

userRoutes.route('/').get((req, res) => {
    Trainer.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

userRoutes.route('/add').post((req, res) => {
    const trainer = req.body.trainer;
    const newUser = new Trainer({trainer});
    newUser.save()
        .then(() => res.json('Trainer added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});
userRoutes.route('/:id').get((req, res) => {
    Trainer.findById(req.params.id)
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json(`Error: ${err}`));
})
userRoutes.route('/:id').delete((req, res) => {
    Trainer.findByIdAndDelete(req.params.id)
        .then(() => res.json('Trainer deleted.'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

export default userRoutes