import React from 'react'
import Projects from './Projects'
import About from './About'
import Socials from './Socials'
import Nav from './Nav'
import Lightbulb from './Lightbulb'
import './App.css';
import {Route, Switch} from "react-router-dom"

function App() {

  return (
    <div>
      <Switch>

        <Route exact path="/">
              <Lightbulb />
              <Nav />
              <div className='names'>
                <h1 class = "FN"> Nickita</h1>
                <h1 class = "LN"> Danilovich</h1>
              </div>
        </Route>

        <Route path='/about'>
          <Lightbulb />
          <Nav />
          <About />
        </Route>

        <Route path='/projects'>
          <Lightbulb />
          <Nav />
          <Projects />
        </Route>

        <Route path='/contact'>
          <Lightbulb />
          <Nav />
          <Socials />
        </Route>

    </Switch>
  </div>
  );
}

export default App;
