import React from 'react';
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
        <div className="d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg navbar-light bg-light  fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item ">
                            <Link activeclassName="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500} className="nav-link" >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeclassName="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500} className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeclassName="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500} className="nav-link" >Projects</Link>
                        </li>

                        <li className="nav-item">
                            <Link activeclassName="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500} className="nav-link" >Skills</Link>
                        </li>

                        <li className="nav-item">
                            <Link activeclassName="active"
                                to="blog"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500} className="nav-link">My blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeclassName="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                className="nav-link" >Contact</Link>
                        </li>

                        <li className="nav-item "><a target="_blank" href="http://codeforces.com/profile/mia-vy" className="nav-link">Programming</a></li>
                        <li className="nav-item "><a target="_blank" href="https://github.com/Kibria7533" className="nav-link">Github</a></li>
                        <li className="nav-item "><a target="_blank" href="https://www.fiverr.com/kibria180?up_rollout=true" className="nav-link">Freelance</a></li>
                        <li>

                            <Link activeclassName="active"

                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                className="nav-link" > <button onClick={cv}> <i className="fa fa-download"> CV </i></button></Link>

                        </li>



                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default Navigation;