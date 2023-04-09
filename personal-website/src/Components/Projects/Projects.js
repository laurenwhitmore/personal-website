import './Project.css';
import React from 'react';
import Fade from 'react-reveal/Fade';


function Projects(){


     return(
        <div>
            <Fade top>
                <div className='intro-name'>
                    <div className='image-wrapper'>
                    <img src={require('./img.jpeg')} alt="logo" />
                    </div>
                    <div className='text'>
                    <h1>hi! i'm lauren</h1>
                    </div>
                </div>
            </Fade>
        </div>
    )
}export default Projects