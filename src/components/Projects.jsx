import Card from "./Card.jsx";
import dots from "../assets/Dots.png";
import Rectangle from "../assets/Rectangle2.png";
import { Link } from "react-router-dom";
const Projects = ({ cards }) => {
    return (
        <div className="projects--section">
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
                    <Link to="/projects" className="viewAll">
                        View all ~~{">"}
                    </Link>
                </div>
                <div className="cardsContainer">
                    {cards.map((card, index) => (
                        <Card key={index} card={card} />
                    ))}
                </div>
            </div>
            <div className="primaryBtn mobile">
                <Link to="/projects" style={{ color: "#fff" }}>
                    View all projects
                </Link>
            </div>
        </div>
    );
};

export default Projects;
