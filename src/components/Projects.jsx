import Card from "./Card.jsx";
import dots from "../assets/Dots.png";
import Rectangle from "../assets/Rectangle2.png";
const Projects = ({ cards }) => {
    return (
        <div className="projects" id="projects">
            <img src={dots} alt="" className="bagDetail" />
            <img src={dots} alt="" className="bagDetailR" />
            <div className="upper">
                <div className="sectionTitle">
                    <h1>
                        <span className="symb">#</span>projects
                    </h1>
                    <hr className="upperSection" />
                </div>
            </div>
            <div className="primaryBtn">View all projects</div>
        </div>
    );
};

export default Projects;
