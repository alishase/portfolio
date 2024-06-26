// import Navbar from "./components/Navbar";
// import MainCont from "./components/MainCont";
// import Quote from "./components/Quote";
// import Projects from "./components/Projects";
import iteen from "../src/assets/iteen.png";
import foodapp from "../src/assets/Foodapp.png";
import todoapp from "../src/assets/todoapp.png";
// import Skills from "./components/Skills";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

import { HashRouter, Routes, Route, ScrollRestoration } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProjectsApp from "./pages/ProjectsApp.jsx";
import NoPage from "./pages/NoPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
    const cards = [
        {
            img: iteen,
            skills: "HTML CSS JS Responsive design",
            title: "Web-technology landing",
            description: "Landing for web-technology courses",
            url: "https://alishase.github.io/paradise/%D0%BA%D1%80%D0%BE%D0%BB%D0%B8%D0%BA%D0%B8-%D1%84%D0%B8%D0%BD%D0%B0%D0%BB/mainblock.html",
            hasGh: false,
        },
        {
            img: foodapp,
            skills: "React HTML CSS JS API calls",
            title: "Recipe Food App",
            description: "App that finds food recipes for you",
            url: "https://alishase.github.io/foodapp/",
            hasGh: true,
            gh: "https://github.com/alishase/foodapp",
        },
        {
            img: todoapp,
            skills: "React HTML CSS JS Responsive Design",
            title: "ToDo app",
            description: "App that helps you manage your tasks",
            url: "https://alishase.github.io/todoapp/",
            hasGh: true,
            gh: "https://github.com/alishase/todoapp",
        },
    ];

    return (
        <>
            <HashRouter>
                <Routes>
                    <Route index element={<HomePage cards={cards} />} />
                    <Route path="/" element={<HomePage cards={cards} />} />
                    <Route path="/home" element={<HomePage cards={cards} />} />
                    <Route
                        path="/projects"
                        element={<ProjectsApp cards={cards} />}
                    />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </HashRouter>
        </>
    );
}
export default App;
