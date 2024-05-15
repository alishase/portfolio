import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const ContactPage = () => {
    return (
        <div className="body contact-body">
            <Navbar />
            <Contact />
            <Footer />
        </div>
    );
};

export default ContactPage;
