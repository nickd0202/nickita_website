import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import './App.css';

function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <div className='Buttons'>
      </div>

      <div className = 'Bulb'>
        <label for="toggle">
        <input type="checkbox" name="toggle" id="toggle" onClick={toggleTheme} />
          <svg xmlns="http://www.w3.org/2000/svg" id="bulb" viewBox="0 0 154.72 276.77">
          <path d="M55.2 139.26l-.5 1.67 4.63 15.48.5-1.67-4.63-15.48zM85.62 123.84l-.5 1.67 4.63 15.48.49-1.67-4.62-15.48z" class="filament"/>
          <path d="M90.24 139.32l-.49 1.67 4.62 15.48.5-1.67-4.63-15.48zM68.11 123.84l-.5 1.67 4.62 15.48.5-1.67-4.62-15.48z" class="filament"/>
          <path d="M72.73 139.32l-.5 1.67 4.63 15.48.5-1.67-4.63-15.48zM58.85 154.8l.5 1.67 4.63-15.48-.5-1.67-4.63 15.48z" class="filament"/>
          <path d="M76.36 154.8l.5 1.67 4.63-15.48-.5-1.67-4.63 15.48zM63.48 139.32l.5 1.67 4.62-15.48-.49-1.67-4.63 15.48zM80.99 139.32l.5 1.67 4.62-15.48-.49-1.67-4.63 15.48zM93.88 154.8l.49 1.67L99 140.99l-.5-1.67-4.62 15.48z" class="filament"/>
          <rect width="2.36" height="59.85" x="53.05" y="138.65" class="prong" rx="1.18" ry="1.18"/>
          <rect width="2.36" height="58.81" x="98.3" y="138.65" class="prong" rx="1.18" ry="1.18"/>
          <path d="M41.05 193.11h71.61v46.03H41.05z" class="cls-2"/>
          <ellipse cx="76.85" cy="239.14" class="cls-2" rx="35.81" ry="37.63"/>
          <rect width="83" height="6.33" x="276.75" y="505.69" class="cls-3" rx="3.17" ry="3.17" transform="rotate(13.12 1474.696 -687.534)"/>
          <rect width="83" height="6.33" x="277.26" y="518.19" class="cls-3" rx="3.17" ry="3.17" transform="rotate(13.12 1475.208 -675.038)"/>
          <rect width="83" height="6.33" x="277.51" y="530.7" class="cls-3" rx="3.17" ry="3.17" transform="rotate(13.12 1475.454 -662.554)"/>
          <rect width="27.39" height="6.33" x="278.36" y="536.89" class="cls-3" rx="3.17" ry="3.17" transform="rotate(13.12 1448.504 -656.327)"/>
          <rect width="27.47" height="6.33" x="330.82" y="499.48" class="cls-3" rx="3.17" ry="3.17" transform="rotate(13.12 1500.99 -693.73)"/>
          <g class="cls-4">
            <rect width="94.5" height="30.6" x="30.11" y="169.86" class="cls-5" rx="12.26" ry="12.26"/>
            <circle cx="77.36" cy="77.36" r="77.36" class="cls-5"/>
            <path d="M16.24 124.35c4 0 13.86 40.77 13.86 57.21h94.5c0-16.44 9.88-57.21 13.86-57.21H16.24z" class="cls-5"/>
          </g>
          </svg>
        </label>
      </div>
      

      <div className='About'>
        <h2>My name is Nickita and I am a highly motivated Junior Software Developer with experience in building and maintaining web applications. I fell in love with coding during my highschool years where I took a couple AP classes. </h2>
      </div>

      <div className='Socials'>
        <ul>
          <li>
            <a class="github" href="https://github.com/nickd0202" target="_blank"  rel="noreferrer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <FontAwesomeIcon icon ={faGithub}> </FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a class="linkedin" href="https://www.linkedin.com/in/nickita-danilovich" target="_blank" rel="noreferrer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <FontAwesomeIcon icon ={faLinkedin}> </FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </div>


      <div className='Projects'></div>
      <h1 class = "FN"> Nickita</h1>
      <h1 class = "LN"> Danilovich</h1>
    </div>
  );
}

export default App;
