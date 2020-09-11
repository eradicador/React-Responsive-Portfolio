import React from "react";
import streamjunkie from "./images/streamjunkie.png"
import Unheard_Stories from "./images/Unheard_Stories.png"
import work_day_scheduler from "./images/work day scheduler.png"
import password_generator from "./images/password generator.png"
import note_taker from "./images/note taker.png"
import eat_da_burger from "./images/eat da burger.png"

function Projects() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 bg-light mt-4 p-4">
                    <h2 className="h2 font-weight-bolder">Projects</h2>
                    <hr></hr>
                </div>
            </div>
                <div className="row">
                    <div className="col-lg-12 bg-light p-4">
                        <div>
                        <h4 className="pic-banner text-center">StreamJunkie</h4>
                            <a href="https://github.com/WLeondike/streamJunkie" target="_blank" rel="noopener noreferrer">
                                <img className="imgproj" src={streamjunkie} alt="streamjunkie screenshot" /></a>
                                <hr></hr>
                            <p>We are bits_please and this is Stream Junkie. The site we have created will allow the user to find a random movie in our list of genres. Once the user selects a genre, they can input a year and hit search. Every time the user hits search, a new movie will appear from that genre and year.</p>
                        </div>
                    
                    </div>
                    
                </div>
                
                <div className="row">
                    <div className="col-lg-12 bg-light p-4">
                        <div>
                        <h4 className="pic-banner text-center">Unheard Stories</h4>
                            <a href="https://quiet-meadow-99455.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img className="imgproj" src={Unheard_Stories} alt="Unheard_Stories screenshot" /></a>
                                <hr></hr>
                            <p>An application that uses opioid death data and user stories about loved ones to paint a more human picture of the opioid crisis.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 bg-light p-4">
                    <h4 className="pic-banner text-center">Work Day Scheduler</h4>
                        <a href="https://eradicador.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer">
                            <img className="imgproj" src={work_day_scheduler} alt="work day scheduler screenshot" /></a>
                            <hr></hr>
                        <p>This is an application for a simple calendar that allows the user to save events for each hour of the day from 9am to 5pm. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. The application uses moment.js library to work with date and time. The user will be able to save events in every hour so the user can manage his/her busy schedule. the calendar/planner will show on the top the current date including the day. Each timeblock is color coded to indicate past, present or future hour. when the user clicks the time block next to the hour he/she will able to type an event and if the user clicks the save button for that timeblock he/she will be able to save that event into the local storage and if the user refresh the page or closes the browser the events will be there on the calendar time blocks.</p>
                    </div>
                    <div className="col-lg-12 bg-light p-4">
                    <h4 className="pic-banner text-center">Password Generator</h4>
                        <a href="https://eradicador.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">
                            <img className="imgproj" src={password_generator} alt="password generator screenshot" /></a>
                            <hr></hr>
                            <p>I created a code in javascript to employees with access to sensitive data, the code will generate a random password that contains lowercase, uppercase, numbers and punctuation characters, the minimun length of the password is 8 characters with a maximun length of 128 characters. This code will generate a strong password that provides greater security for the company. The code is free of console errors.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 bg-light p-4">
                    <h4 className="pic-banner text-center">Note Taker</h4>
                        <a href="https://thawing-mountain-21534.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img className="imgproj" src={note_taker} alt="note taker screenshot" /></a>
                            <hr></hr>
                            <p>As a developer i created an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file in db folder. AS A user, I want to be able to write and save notes and i want to be able to delete notes I've written before so that I can organize my thoughts and keep track of tasks I need to complete.</p>
                    </div>
                    <div className="col-lg-12 bg-light p-4">
                    <h4 className="pic-banner text-center">Eat Da Burger</h4>
                        <a href="https://secret-eyrie-47794.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img className="imgproj" src={eat_da_burger} alt="eat da burger screenshot" /></a>
                            <hr></hr>
                            <p>As a developer i created a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page with a button waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page. The app will store every burger in a database, whether devoured or not. the app was made with MySQL, Node, Express, Handlebars and a homemade ORM. The app follows the MVC design pattern; use Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.</p>
                    </div>
                </div>
        </div>
    )
}



export default Projects