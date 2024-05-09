// import Navbar from "./components/Navbar";
// import MainCont from "./components/MainCont";
// import Quote from "./components/Quote";
// import Projects from "./components/Projects";
// import iteen from "../src/assets/iteen.png";
// import foodapp from "../src/assets/Foodapp.png";
// import todoapp from "../src/assets/todoapp.png";
// import Skills from "./components/Skills";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProjectsApp from "./pages/ProjectsApp.jsx";
import NoPage from "./pages/NoPage.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/portfolio/" element={<HomePage />} />
                    <Route path="/portfolio/home" element={<HomePage />} />
                    <Route
                        path="/portfolio/projects"
                        element={<ProjectsApp />}
                    />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
            {/* <Navbar />
            <MainCont />
            <Quote />
            <Projects cards={cards} />
            <Skills />
            <About />
            <Contact />
            <Footer /> */}
            {/* <RouterProvider router={router} /> */}
        </>
    );
}
export default App;
