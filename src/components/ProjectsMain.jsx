import iteen from "../assets/iteen.png";
import foodapp from "../assets/Foodapp.png";
import todoapp from "../assets/todoapp.png";
import Card from "./Card.jsx";

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
            <p className="upper--footer">List of my projects</p>
            <div className="upper">
                <div className="sectionTitle">
                    <h1>
                        <span className="symb">#</span>completed-apps
                    </h1>
                </div>
            </div>
            <div className="projects--cardsContainer">
                {props.cards.map((card, index) => (
                    <Card key={index} card={card} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsMain;
