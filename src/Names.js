import React, {useState} from 'react'
import './Names.css'
function Names({wordColor}){

    
  
    return (
        <div class="container2">
            <p>{wordColor}</p>
                <h1 class="neon" id={wordColor} >NICKITA</h1>
                <h1 class="neon2" id={wordColor}>DANILOVICH</h1>
                <p class='intro' id={wordColor}>Hello and welcome to my personally crafted website, tailored exclusively by yours truly!</p>
                <p class='buttonIntro' id={wordColor}>If you feel like this is too dark for you, feel free to turn on the light bulb by clicking on it.</p>
                <p class="menuIntro" id={wordColor}>When you want to dive deeper into who I am. Click the menu.</p>
            </div>
        )
}
export default Names;