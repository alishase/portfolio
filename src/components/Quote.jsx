import Rectangle from "../assets/Rectangle2.svg";

const Quote = () => {
    return (
        <div className="quote-container">
            <img src={Rectangle} alt="" className="bgDetail" />
            <p className="quote-text">
                With great power comes great electricity bill
            </p>
            <p className="quote-author">- Dr. Who</p>
        </div>
    );
};

export default Quote;
