import React from "react"
import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
// import Nav from "react-bootstrap/Navbar"

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand href="/">Michael Amaya</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </div>
        </Navbar>

        // <nav className="navbar navbar-expand-lg navbar-light bg-light pt-0 pb-0">
        //     <div className="container">
        //         <Link className="navbar-brand font-weight-bolder" to="/">Michael Amaya</Link>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        //             aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button> 
        //         <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        //             <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/">About</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/projects">Projects</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/contact">Contact</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //         </Navbar.Collapse>
        //     </div>
        // </nav>
    )
}
export default Header