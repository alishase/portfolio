import Navbar from "../components/Navbar";

const NoPage = () => {
    return (
        <>
            <Navbar />

            <div className="fof--cont">
                <h3 className="fof">Error 404</h3>
                <p className="fof">Page not found</p>
            </div>
        </>
    );
};

export default NoPage;
