import "./Header.css";

function Header({ theme, toggleTheme }) {

    return (

        <header className="navbar">

            <h1>🌤 CityPulse</h1>

            <button
                className="theme-btn"
                onClick={toggleTheme}
            >
                {theme === "light" ? "🌙" : "☀️"}
            </button>

        </header>

    );

}

export default Header;