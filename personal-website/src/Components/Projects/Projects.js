import './Project.css';
import React from 'react';
import Fade from 'react-reveal/Fade';


function Projects(){


     return(
        <div id =" Projects">
            <Fade top>
                <div className='project-container'>
                    <h1>projects</h1>
                    <p>here are some cool projects that i have worked on recently</p>

                        <h3>Software Construction - Saving Valenheim January 2022-April 2022</h3>
                        
                        <p>Created a fully functional role-playing video game using Unity and C# with a team of 4
                      Designed multiple customizable characters and enemies with a variety of combat styles
                       GitHub Repository: <a href="https://github.com/tarazoelee/group13_SE2250_RPG" target="_blank" rel="noopener noreferrer">https://github.com/tarazoelee/group13_SE2250_RPG</a>
                        </p>
                        
                        <h3>SheHacks – Co-Living January 2022</h3>
                            Created a website using JavaScript, CSS and HTML
                            Worked efficiently with a team of 4 to create a website designed to help roommates live together better
                            Devpost listing: <a href="https://devpost.com/software/co-living" target="_blank" rel="noopener noreferrer">https://devpost.com/software/co-living</a>
                        
                        
                        <h3>eHacks - Financr February 2022</h3>
                        
                        Worked with a team of three to create a homepage for students to use to increase financial literacy
                        Created with JavaScript, CSS and HTML
                        Devpost listing: <a href="https://devpost.com/software/financr" target="_blank" rel="noopener noreferrer">https://devpost.com/software/financr</a>
                        
                </div>
            </Fade>
        </div>
    )
}export default Projects