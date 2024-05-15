import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

function EmailForm() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [stat, setStat] = useState("default");
    const [opacity, setOpacity] = useState(1);
    useEffect(() => {
        // Set a timer to begin the fade out after 5 seconds

        console.log("timer started");
        const timer = setTimeout(() => {
            setOpacity(0);
        }, 1000);

        return () => {
            clearTimeout(timer);
            setOpacity(1);
        };
    }, [stat]);

    const handleSubmit = async (e) => {
        let templateParams = {
            name: name,
            subject: subject,
            email: email,
            message: message,
        };
        e.preventDefault();
        emailjs
            .send(
                "service_alishase1818",
                "template_xgl0f2q",
                templateParams,
                "dMuoTQ2JUoSdSZumw"
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setStat("success");
                },
                (error) => {
                    console.log("FAILED...", error);
                    setStat("failed");
                }
            );
        setEmail("");
        setMessage("");
        setName("");
        setSubject("");
        setStat("default");
    };

    return (
        <form onSubmit={handleSubmit} className="contact--form">
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={name ? "haveText" : ""}
                />
                <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={email ? "haveText" : ""}
                />
            </div>
            <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className={subject ? "haveText" : ""}
            />
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                maxLength="300"
                className={message ? "haveText" : ""}
            />
            <button type="submit" className="primaryBtn">
                Send
            </button>

            {stat == "success" ? (
                <div
                    className="success stat"
                    style={{ opacity: opacity, transition: "opacity 2s ease" }}
                >
                    Sent Successfully
                </div>
            ) : stat == "default" ? (
                ""
            ) : (
                <div
                    className="failed stat"
                    style={{ opacity: opacity, transition: "opacity 2s ease" }}
                >
                    Failed to sent
                </div>
            )}
        </form>
    );
}

export default EmailForm;
