import React from "react"
import Professional from "./images/Professional_2020.jpg"


function Home() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-9 bg-light mt-4 p-4 mb-5">
                    <h2 className="h2 font-weight-bolder">About Me</h2>
                    <div>
                        <img src={Professional} alt="my professional pic" className="my-picture mr-4" />
                        <p>My name is Michael Amaya at the moment i'm a student at UCF i'm taking the coding/Programming
                        course in which I will learn the following programming languages: HTML5, CSS3, JavaScript,
                        jQuery, Node.js, Responsive Design, Heroku, Git, User Authentication, PHP frameworks like
                        Laravel, React.js, MySQL and MongoDB. At the end of the course I will become a full-stack
                        developer.
                        I have a 10 plus years in customer service, before becoming a student at UCF I used to work at
                        MCO Orlando Airport as a passenger service agent. My job was at the ticket counter and by the
                        gate before you go into the airplain, at the ticket counter I had to make sure passenger documents complied with with the
                        airline and government rules also that the passenger bags were properly
                        tagged and weight. By the gate my job was to facilitate passenger boarding onto flights.
                        I have always had a fascination for computers, in 2009 I graduated from valencia with an associate
                        degree in CET: computer engineneering technolgy since then I always been working with computers
                        doing upgrades, software installation and repairs.</p>
                        <ul>
                            <li><a href={require("./images/Michael_Resume_2020.pdf")} target = "blank" rel="noopener noreferrer">Link to my resume</a></li>
                            <li><a href="https://github.com/eradicador" target="_blank" rel="noopener noreferrer">Link to my Github profile</a></li>
                            <li><a href="https://www.linkedin.com/in/michael-amaya-0a6914bb/" target="_blank" rel="noopener noreferrer">Link to my LinkedIn page</a>
                            </li>
                            <li>My email address: janisepinto@yahoo.com</li>
                            <li>My phone number: 407-744-6339</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home