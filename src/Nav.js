import React from 'react'
import './Nav.css'


function Nav(){
    return (
        <details className='container'>
        <summary></summary>
            <div>
                <nav class="menu">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
        </details>
    );
}
export default Nav;