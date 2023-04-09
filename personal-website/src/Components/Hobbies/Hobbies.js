import './Hobbies.css';
import React from 'react';
import Fade from 'react-reveal/Fade';


function Hobbies(){


     return(
        <div>
            <Fade top>
                <div className='intro-name'>
                    <div className='image-wrapper'>
                    <img src={require('./img.jpeg')} alt="logo" />
                    </div>
                    <div className='text'>
                    <h1>hobbies</h1>
                    </div>
                </div>
            </Fade>
        </div>
    )
}export default Hobbies