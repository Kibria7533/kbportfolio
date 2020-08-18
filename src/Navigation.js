import React from 'react';
import './Mynave.css';
import './App.css';
import { Link, animateScroll as scroll } from "react-scroll";
const cv = () => {
    const link = document.createElement('a');
    link.href = `./cv.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function Navigation(props) {
    return (
        <div>
            <nav className="navbar navbar-light bg-light d-flex justify-content-center navbar-expand-sm fixed-top">


                <div>
                    <ul className="navbar-nav ml-md-auto" id="portfolio-flters">
                        <li className="nav-item ">
                            <Link activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500} className="nav-link" >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500} className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500} className="nav-link" >Projects</Link>
                        </li>

                        <li className="nav-item">
                            <Link activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500} className="nav-link" >Skills</Link>
                        </li>

                        <li className="nav-item">
                            <Link activeClass="active"
                                to="blog"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500} className="nav-link">My blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                className="nav-link" >Contact</Link>
                        </li>
                     
                    <li  className="nav-item "><a target="_blank" href="http://codeforces.com/profile/mia-vy"className="nav-link">Programming</a></li>
                    <li  className="nav-item "><a target="_blank" href="https://github.com/Kibria7533"className="nav-link">Github</a></li>
                    <li  className="nav-item "><a target="_blank" href="https://www.fiverr.com/kibria180?up_rollout=true"className="nav-link">Freelance</a></li>
                        <li>

                            <Link activeClass="active"
                               
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                className="nav-link" > <button onClick={cv}> <i class="fa fa-download"> CV </i></button></Link>

                        </li>
                        


                    </ul>

                </div>

            </nav>

        </div>
    );
}

export default Navigation;