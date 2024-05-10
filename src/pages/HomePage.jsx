import Navbar from "../components/Navbar";
import MainCont from "../components/MainCont";
import Quote from "../components/Quote";
import Projects from "../components/Projects";
import iteen from "../assets/iteen.png";
import foodapp from "../assets/Foodapp.png";
import todoapp from "../assets/todoapp.png";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage(props) {
    return (
        <>
            <Navbar />
            <MainCont />
            <Quote />
            <Projects cards={props.cards} />
            <Skills />
            <About />
            <Contact />
            <Footer />
            {/* <RouterProvider router={router} /> */}
        </>
    );
}
export default HomePage;
