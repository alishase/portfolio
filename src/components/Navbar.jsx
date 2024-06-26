import { useState } from "react";
import defaultLogo from "../assets/default.svg";
import ContactBtn from "./ContactBtn";
import Home from "./Home";
import ProjectsBtn from "./ProjectsBtn";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [opened, setOpened] = useState(false);

    const panelItems = [
        { name: "home", url: "#home" },
        { name: "projects", url: "#projects" },
        { name: "contacts", url: "#" },
    ];

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={defaultLogo} alt="" />
                    <h1>Alishase</h1>
                </div>
                <ul className="defaultNav">
                    <Link to="/home">
                        <Home />
                    </Link>
                    <Link to="/projects">
                        <ProjectsBtn />
                    </Link>
                    <Link to="/contact">
                        <ContactBtn />
                    </Link>
                </ul>

                {opened ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="closeNav"
                        onClick={() => setOpened(false)}
                    >
                        <rect
                            width="1"
                            height="1"
                            transform="matrix(1 0 0 -1 11 12)"
                            fill="#D9D9D9"
                        />
                        <rect
                            x="3"
                            y="19.9706"
                            width="24"
                            height="2"
                            transform="rotate(-45 3 19.9706)"
                            fill="#D9D9D9"
                        />
                        <rect
                            x="4"
                            y="3"
                            width="24"
                            height="2"
                            transform="rotate(45 4 3)"
                            fill="#D9D9D9"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="showNav"
                        onClick={() => setOpened(true)}
                    >
                        <rect y="5" width="24" height="2" fill="#D9D9D9" />
                        <rect
                            x="9"
                            y="12"
                            width="15"
                            height="2"
                            fill="#D9D9D9"
                        />
                    </svg>
                )}
            </div>
            {opened ? (
                <ul className={`mobileNav ${opened ? "visible" : ""}`}>
                    <Link to="/home">
                        <Home />
                    </Link>

                    <Link to="/projects">
                        <ProjectsBtn />
                    </Link>

                    <Link to="/contact">
                        <ContactBtn />
                    </Link>
                </ul>
            ) : (
                ""
            )}
        </>
    );
};

export default Navbar;
