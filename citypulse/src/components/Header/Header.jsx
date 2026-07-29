import "./Header.css";
import { FiMoon, FiSun } from "react-icons/fi";
import { WiDayCloudy } from "react-icons/wi";

function Header({ darkMode, toggleTheme }) {
  return (
    <header className="navbar">

      <div className="brand">

        <div className="brand-icon">
          <WiDayCloudy />
        </div>

        <div className="brand-text">
          <h1>CityPulse</h1>
          <h3>Live weather for any city</h3>
        </div>

      </div>

      <button
  className="theme-button"
  onClick={() => {
    toggleTheme();
  }}
>
  {darkMode ? <FiSun /> : <FiMoon />}
</button>

    </header>
  );
}

export default Header;