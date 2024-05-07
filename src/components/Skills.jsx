import Dots from "../assets/Dots.png";
import Rectangle from "../assets/Rectangle2.png";
import logotype from "../assets/logotype.png";

const Skills = () => {
    return (
        <div className="skills">
            <div className="upper">
                <div className="sectionTitle">
                    <h1>
                        <span className="symb">#</span>skills
                    </h1>
                    <hr className="upperSection" />
                </div>
            </div>
            <div className="skills--container">
                <div className="skills--details">
                    <img src={Dots} alt="" />
                    <img src={Rectangle} alt="" />
                    <img src={logotype} alt="" />
                    <img src={Dots} alt="" />
                    <img src={Rectangle} alt="" />
                </div>
                <div className="skills--info">
                    <div className="skills--box">
                        <h1>Languages</h1>
                        <p>Javascript</p>
                    </div>
                    <div className="skills--box">
                        <h1>Others</h1>
                        <p>HTML CSS ES6</p>
                    </div>
                    <div className="skills--box">
                        <h1>Tools</h1>
                        <p>Git VSCode Figma Vite </p>
                    </div>

                    <div className="skills--box">
                        <h1>Frameworks</h1>
                        <p>React.js</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
