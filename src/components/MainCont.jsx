import CharcterImg from "../assets/Character.png";
import logotype from "../assets/logotype.png";
import Dots from "../assets/Dots.png";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="main" id="home">
            <div className="textContainer">
                <h1>
                    Alishase is a <span className="symb">web designer</span> and{" "}
                    <span className="symb">front-end developer</span>
                </h1>
                <p>
                    He crafts responsive websites where technologies meet
                    creativity
                </p>
                <Link to="/contact">
                    <p className="primaryBtn" href="#">
                        Contact me!
                    </p>
                </Link>
            </div>
            <div className="imageContainer">
                <div className="imageChar">
                    <img src={logotype} alt="" className="logotype" />
                    <img src={Dots} alt="" className="dots" />
                    <img src={CharcterImg} alt="" className="char" />
                </div>

                <p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                    >
                        <rect
                            x="0.5"
                            y="1"
                            width="15"
                            height="15"
                            fill="#C778DD"
                            stroke="#C778DD"
                        />
                    </svg>
                    Currently working on<strong>&nbsp;Portfolio</strong>
                </p>
            </div>
        </div>
    );
};

export default Main;
