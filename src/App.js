import React, {useState} from 'react'
import Projects from './Projects'
import About from './About'
import Socials from './Socials'
import Nav from './Nav'
import Lightbulb from './Lightbulb'
import Names from './Names'
import './App.css';
import {Route, Switch} from "react-router-dom"

function App() {
  
  const [theme, setTheme] = useState('dark');
  const [wordColor, setColor] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setColor('light');
    } else {
      setTheme('light');
      setColor('dark');
    }
  };



  return (
    <div>
      <Switch>

        <Route exact path="/">
              <Lightbulb toggleTheme = {toggleTheme} theme={theme} setTheme={setTheme}/>
              <Nav />
              <Names wordColor={wordColor}/>
        </Route>

        <Route path='/about'>
          <Lightbulb toggleTheme = {toggleTheme} theme={theme} setTheme={setTheme}/>
          <Nav />
          <About wordColor={wordColor}/>
        </Route>

        <Route path='/projects'>
          <Lightbulb toggleTheme = {toggleTheme} theme={theme} setTheme={setTheme}/>
          <Nav />
          <Projects wordColor={wordColor}/>
        </Route>

        <Route path='/contact'>
          <Lightbulb toggleTheme = {toggleTheme} theme={theme} setTheme={setTheme}/>
          <Nav />
          <Socials wordColor={wordColor}/>
        </Route>

    </Switch>
  </div>
  );
}

export default App;
