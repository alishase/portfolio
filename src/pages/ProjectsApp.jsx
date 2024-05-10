import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsMain from "../components/ProjectsMain";

const ProjectsApp = (props) => {
    return (
        <div className="body">
            <Navbar />
            <ProjectsMain cards={props.cards} />
            <Footer />
        </div>
    );
};

export default ProjectsApp;
