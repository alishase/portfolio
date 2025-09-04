// import Navbar from "./components/Navbar";
// import MainCont from "./components/MainCont";
// import Quote from "./components/Quote";
// import Projects from "./components/Projects";
import iteen from "../src/assets/iteen.png";
import foodapp from "../src/assets/Foodapp.png";
import todoapp from "../src/assets/todoapp.png";
import dictionary from "../src/assets/dictionary.png";
import cryptoApp from "../src/assets/cryptoApp.png";
import restaurantFile from "../src/assets/restaurantFile.png";
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
      img: cryptoApp,
      skills:
        "Next.js NextAuth PostgreSQL PrismaORM CryptoCharts RestAPI Tailwind TypeScript",
      title: "Cryptocurrency platform",
      description:
        "Non-commercial cryptocurrency exchange platform with authentication, real-time market data, wallet balances, and transaction history. Focused on learning and experimenting with trading features without real money involvement.",
      url: "https://cryptoextest.netlify.app/",
      hasGh: true,
      gh: "https://github.com/alishase/cryptoApp",
    },
    {
      img: dictionary,
      skills: "Next.js, AirtableDB, Tailwind CSS, JavaScript, RestAPI",
      title: "Terms Dictionary",
      description:
        "A responsive web application for managing and browsing a large collection of terms. Built with Next.js and AirtableDB for dynamic data handling, styled with Tailwind CSS, and integrated with REST APIs for seamless data retrieval. Focused on clean UI and fast user experience.",
      url: "https://dictionaryrh.netlify.app/",
      hasGh: true,
      gh: "https://github.com/alishase/Terms-dictionary",
    },
    {
      img: restaurantFile,
      skills: "HTML, CSS, JavaScript, Google Fonts, Font Awesome",
      title: "Restaurant Website",
      description:
        "A responsive website for a restaurant featuring a menu, gallery, contact page, and smooth animations.",
      url: "https://alishase.github.io/Hungry-people-restaurant/",
      hasGh: true,
      gh: "https://github.com/alishase/Hungry-people-restaurant",
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
  ];

  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<HomePage cards={cards} />} />
          <Route path="/" element={<HomePage cards={cards} />} />
          <Route path="/home" element={<HomePage cards={cards} />} />
          <Route path="/projects" element={<ProjectsApp cards={cards} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}
export default App;
