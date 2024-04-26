const Card = ({ card }) => {
    return (
        <div className="projectCard">
            <img src={card.img} alt="" />
            <p>{card.skills}</p>
            <div className="cardText">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a href="#" className="primaryBtn">
                    Visit
                </a>
            </div>
        </div>
    );
};

export default Card;
