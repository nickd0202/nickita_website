import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import './Socials.css'

function Socials() {
    return (
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
    )
}
export default Socials;