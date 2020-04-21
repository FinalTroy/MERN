import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar.component'
import ExercisesList from './components/Pages/Exercises-list'
import EditExercise from './components/Pages/Edit-exercises'
import CreateExercise from './components/Pages/Create-exercise'
import CreateTrainer from './components/Pages/Create-trainer'
import Generator from './components/Pages/Create-generator';

const App = () => {
  const [exercises, setExercises] = useState<any[]>([])

  useEffect(() => {
      axios.get('http://localhost:5000/exercises/')
          .then(res => {
              setExercises(res.data)
          })
          .catch(err => console.log(err))
  }, [])
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Route exact path='/'>
          <ExercisesList />
        </Route>
        <Route exact path='/edit/:id' component={EditExercise}>
        </Route>
        <Route exact path='/create'>
          <CreateExercise />
        </Route>
        <Route exact path='/user'>
          <CreateTrainer />
        </Route>
        <Route exact path='/generator'>
          <Generator 
            exercises={exercises}
          />
        </Route>
      </div>
    </Router>

  );
}

export default App;
