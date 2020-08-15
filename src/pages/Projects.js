import React from "react";

function Projects() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 bg-light mt-4 p-4">
                    <h2 className="h2 font-weight-bolder">Projects</h2>
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 bg-light p-4">
                    <a href="https://github.com/WLeondike/streamJunkie" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/images/streamjunkie.png" alt="streamjunkie screenshot"></img>
                        <h4 className="pic-banner text-center">StreamJunkie</h4>
                    </a>
                </div>
                <div className="col-lg-4 bg-light p-4">
                    <a href="https://quiet-meadow-99455.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/images/Unheard_Stories.png" alt="Unheard_Stories screenshot"></img>
                        <h4 className="pic-banner text-center">Unheard Stories</h4>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 bg-light p-4">
                    <a href="https://eradicador.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/images/work day scheduler.png" alt="work day scheduler screenshot"></img>
                        <h4 className="pic-banner text-center">Work Day Scheduler</h4>
                    </a>
                </div>
                <div className="col-lg-4 bg-light p-4">
                    <a href="https://eradicador.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/images/password generator.png" alt="password generator screenshot"></img>
                        <h4 className="pic-banner text-center">Password Generator</h4>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 bg-light p-4">
                    <a href="https://thawing-mountain-21534.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/images/note taker.png" alt="note taker screenshot"></img>
                        <h4 className="pic-banner text-center">Note Taker</h4>
                    </a>
                </div>
                <div className="col-lg-4 bg-light p-4">
                    <a href="https://secret-eyrie-47794.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/images/eat da burger.png" alt="eat da burger screenshot"></img>
                        <h4 className="pic-banner text-center">Eat Da Burger</h4>
                    </a>
                </div>
            </div>
        </div>
    )
}



export default Projects