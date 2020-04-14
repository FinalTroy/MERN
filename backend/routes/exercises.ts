import express from 'express'
import Exercise from '../models/exercise.model';

const exercisesRouter = express.Router();

exercisesRouter.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

exercisesRouter.route('/add').post((req, res) => {
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const newExercise = new Exercise ({
        description,
        duration,
    });
    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

exercisesRouter.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json(`Error: ${err}`));
})

exercisesRouter.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

exercisesRouter.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then((exercises: any) => {
            exercises.description = req.body.description;
            exercises.duration = Number(req.body.duration);

            exercises.save()
                .then(() => res.json('Exercise updated!'))
                .catch((err: any) => res.status(400).json(`Error: ${err}`));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
})
export default exercisesRouter