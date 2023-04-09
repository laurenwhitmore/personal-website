import './Education.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { useNavigate } from 'react-router-dom';


function Education(){
    //const nav = useNavigate();
    const schools = [
        {
            name : "University of Western Ontario", 
            years: "September 2020 - May 2025",
            degree: "Bachelor of Engineering Science, Software Engineering"
        }, 
        {
            name : "West Island College", 
            years: "September 2014 - June 2020",
            degree: "High School Diploma"
        }
    ]

    function goToEducation(){
       // nav("./Education")
    }

     return(
        <div>
            <Fade top>
            <div className='intro-name'>
                <div className='text'>
                    <h1>education</h1>
                    <div className='schools-container'>
                    {schools.map(item => (
                        <div className='schools' key={item.name} onClick={()=>goToEducation()}>
                            <h1>{item.name}</h1>
                            <p className = "details">
                                <b>{item.degree}</b>
                                <p>{item.years}</p>
                            </p>
                        </div>
                    ))}
                    </div>
                </div>
                </div>

            </Fade>
        </div>
    )
}export default Education