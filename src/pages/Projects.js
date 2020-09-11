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
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 bg-light p-4">
                        <h4 className="pic-banner text-center">StreamJunkie</h4>
                        <div>
                            <a href="https://github.com/WLeondike/streamJunkie" target="_blank" rel="noopener noreferrer">
                                <img className="imgproj" src={streamjunkie} alt="streamjunkie screenshot" /></a>
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
                            <p>We are bits_please and this is Stream Junkie. The site we have created will allow the user to find a random movie in our list of genres. Once the user selects a genre, they can input a year and hit search. Every time the user hits search, a new movie will appear from that genre and year.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 bg-light p-4">
                    <h4 className="pic-banner text-center">Work Day Scheduler</h4>
                        <a href="https://eradicador.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer">
                            <img className="imgproj" src={work_day_scheduler} alt="work day scheduler screenshot"></img>
                            
                        </a>
                        <p>We are bits_please and this is Stream Junkie. The site we have created will allow the user to find a random movie in our list of genres. Once the user selects a genre, they can input a year and hit search. Every time the user hits search, a new movie will appear from that genre and year.</p>
                    </div>
                    <div className="col-lg-12 bg-light p-4">
                        <a href="https://eradicador.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">
                            <img className="imgproj" src={password_generator} alt="password generator screenshot"></img>
                            <h4 className="pic-banner text-center">Password Generator</h4>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 bg-light p-4">
                        <a href="https://thawing-mountain-21534.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img className="imgproj" src={note_taker} alt="note taker screenshot"></img>
                            <h4 className="pic-banner text-center">Note Taker</h4>
                        </a>
                    </div>
                    <div className="col-lg-12 bg-light p-4">
                        <a href="https://secret-eyrie-47794.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img className="imgproj" src={eat_da_burger} alt="eat da burger screenshot"></img>
                            <h4 className="pic-banner text-center">Eat Da Burger</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Projects