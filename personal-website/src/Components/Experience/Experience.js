import './Experience.css';
import React from 'react';
import Fade from 'react-reveal/Fade';


function Experience(){
    let tools = [
        {
            name :"Javascript",
            image : require("./js.png"),
            level: "Expert", 
            experience: "I have taken multiple courses learning the fundamentals of Javascript, as well as completed multiple projects using Javascript for the front-end. "
        }
        ,
        {
            name :"Node",
            image : require("./node.png"),
            level: "Expert", 
            experience: "I have done many projects using node for backend commands to interact with our database and react frontend. "
        },
        {
            name :"SQL",
            image : require("./sql.png"),
            level: "Expert", 
            experience: "In my databases course, we learned how to create and manage a database in MySQL Workbench using SQL commands. "
        },
        {
            name :"React",
            image : require("./react.png"),
            level: "Intermediate", 
            experience: "I have taken multiple courses learning the fundamentals of Javascript, as well as completed multiple projects using Javascript for the front-end. "
        },
        {
            name :"Java",
            image : require("./java.png"),
            level: "Intermediate", 
            experience: "I have taken a couple classes using Java to implement Object-Oriented programming principles, as well as to create GUI games. "
        }, 
        {
            name :"C++",
            image : require("./c++.png"),
            level: "Beginner", 
            experience: "In my operating systems course, we used c++ to create multi-threaded applications. We learned how to implement proper synchronization practices for processes and thread to work together in c++ projects."
        }
    ]


     return(
        <div id="Experience">
            <Fade top>
            <div className="container">
                <div className="experience-container">
                    <h1>experience</h1>
                    <div className="experience-item">
                    <h3>Western Algo – Sentiment Analysis Team Leader</h3>
                    <p>Lead named entity recognition portion of Sentiment Analysis team using Python and machine learning.</p>
                    </div>
                    <div className="experience-item">
                    <h3>SAP – Value Advisory Intern</h3>
                    <p>Assisted in building strategic, operational, and IT consultancy engagements for Canada's largest organizations through the creation of comprehensive business cases.</p>
                    </div>
                </div>
                <div className="tools-container">
                    <h1>tools</h1>
                    <ul className = 'tool-list'>
                        {tools.map(item=>(
                            <li key = {item.name}>
                                <img src={item.image} alt="logo" />
                                <b>{item.name}</b>
                                <p>{item.level}</p>
                                <p>{item.experience}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
            </Fade>
        </div>
    )
}export default Experience