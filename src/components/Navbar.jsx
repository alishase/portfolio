import defaultLogo from "../assets/default.svg";

const Navbar = () => {
    const panelItems = [
        { name: "home", url: "#home" },
        { name: "projects", url: "#projects" },
        { name: "contacts", url: "#" },
    ];

    return (
        <div className="navbar">
            <div className="logo">
                <img src={defaultLogo} alt="" />
                <h1>Alishase</h1>
            </div>
            <ul>
                {panelItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>
                            <span className="symb">#</span>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
