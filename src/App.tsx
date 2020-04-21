import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar.component'
import ExercisesList from './components/Pages/Exercises-list'
import EditExercise from './components/Pages/Edit-exercises'
import CreateExercise from './components/Pages/Create-exercise'
import CreateTrainer from './components/Pages/Create-trainer'
import Generator from './components/Pages/Create-generator';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Route path='/' exact component={ExercisesList} />
        <Route path='/edit/:id' exact component={EditExercise} />
        <Route path='/create' exact component={CreateExercise} />
        <Route path='/user' exact component={CreateTrainer} />
        <Route path='/generator' exact component={Generator} />
      </div>
    </Router>

  );
}

export default App;
