import React, {useState} from 'react'
import './Names.css'
function Names({wordColor}){

    const [wColor, setColor] = useState('dark')

    const color = () => {
        if (wordColor === 'dark'){
            setColor('dark')
        } else{
            setColor('light')
        }
    }
    return (
        <div class="container2">
            <h1 class="neon">NICKITA</h1>
            <h1 class="neon2">DANILOVICH</h1>
            <p class='intro'>Hello and welcome to my personally crafted website, tailored exclusively by yours truly!</p>
            <p class=''>If you feel like this is too dark for you, feel free to turn on the light bulb by clicking on it.</p>
            <p>When you want to dive deeper into who I am. Click the menu.</p>

        </div>
    )
}
export default Names;