import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import EmailForm from "../components/EmailForm";

const ContactPage = () => {
    return (
        <div className="body contact-body">
            <Navbar />
            <Contact />
            <EmailForm />
            <Footer />
        </div>
    );
};

export default ContactPage;
