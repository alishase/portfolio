import Card from "./Card.jsx";
import Dots from "../assets/Dots.png";
import Rectangle from "../assets/Rectangle2.png";
const ProjectsMain = (props) => {
    return (
        <div className="projects--main">
            <div className="upper">
                <div className="sectionTitle">
                    <h1>
                        <span className="symb">/</span>projects
                    </h1>
                </div>
            </div>
            <img src={Dots} alt="" className="bgDetail" />

            <p className="upper--footer">List of my projects</p>
            <div className="upper">
                <div className="sectionTitle">
                    <h1>
                        <span className="symb">#</span>completed-apps
                    </h1>
                </div>
            </div>
            <div className="projects--cardsContainer">
                <img src={Rectangle} alt="" className="bgDetailR" />
                {props.cards.map((card, index) => (
                    <Card key={index} card={card} projects={true} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsMain;
