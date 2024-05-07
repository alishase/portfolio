import Card from "./Card.jsx";
import dots from "../assets/Dots.png";
import Rectangle from "../assets/Rectangle2.png";
const Projects = ({ cards }) => {
    return (
<<<<<<< HEAD
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
                    <a href="#" className="viewAll">
                        View all ~~{">"}
                    </a>
                </div>
                <div className="cardsContainer">
                    {cards.map((card, index) => (
                        <Card key={index} card={card} />
                    ))}
=======
        <div className="projects" id="projects">
            <img src={dots} alt="" className="bagDetail" />
            <img src={dots} alt="" className="bagDetailR" />
            <div className="upper">
                <div className="sectionTitle">
                    <h1>
                        <span className="symb">#</span>projects
                    </h1>
                    <hr className="upperSection" />
>>>>>>> fecd039af8c8f86506c4cd2532890123fd0a8b6d
                </div>
            </div>
            <div className="primaryBtn">View all projects</div>
        </div>
    );
};

export default Projects;
