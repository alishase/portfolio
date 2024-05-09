import Image from "../assets/Group 50.png";

const About = () => {
    return (
        <div className="about--section">
            <div className="upper">
                <div className="sectionTitle">
                    <h1>
                        <span className="symb">#</span>about me
                    </h1>
                    <hr className="upperSection" />
                </div>
            </div>
            <div className="about--content">
                <div className="about--text">
                    <p>
                        Hello, i’m Alishase! <br />
                        <br /> I’m a self-taught front-end developer based in
                        Kielce, Poland. I can develop responsive websites from
                        scratch and raise them into modern user-friendly web
                        experiences. <br /> <br /> Transforming my creativity
                        and knowledge into a websites has been my passion for
                        over three years. I have been helping various clients to
                        establish their presence online. I always strive to
                        learn about the newest technologies and frameworks.
                    </p>
                </div>
                <img src={Image} alt="" />
            </div>
        </div>
    );
};

export default About;
