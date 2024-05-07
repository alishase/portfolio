import { useState } from "react";
import Navbar from "./components/Navbar";
import MainCont from "./components/MainCont";
import Quote from "./components/Quote";
import Projects from "./components/Projects";
import iteen from "../src/assets/iteen.png";
import foodapp from "../src/assets/Foodapp.png";
import todoapp from "../src/assets/todoapp.png";
import Skills from "./components/Skills";

function App() {
    const cards = [
        {
            img: iteen,
            skills: "HTML CSS JS Responsive design",
            title: "Web-technology landing",
            description: "Landing for web-technology courses",
            url: "#",
        },
        {
            img: foodapp,
            skills: "React HTML CSS JS API calls",
            title: "Recipe Food App",
            description: "App that finds food recipes for you",
            url: "#",
        },
        {
            img: todoapp,
            skills: "React HTML CSS JS ",
            title: "ToDo app",
            description: "App that helps you manage you tasks",
            url: "#",
        },
    ];

    return (
        <>
            <Navbar />
            <MainCont />
            <Quote />
            <Projects cards={cards} />
            <Skills />
        </>
    );
}
export default App;
