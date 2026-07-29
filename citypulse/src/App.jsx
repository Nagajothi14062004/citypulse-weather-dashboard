import "./App.css";

import Header from "./components/Header/Header";
import Home from "./pages/Home";

import useTheme from "./hooks/useTheme";

function App() {

    const { darkMode, toggleTheme } = useTheme();

    return (
        <>
            <Header
                darkMode={darkMode}
                toggleTheme={toggleTheme}
            />

            <Home />
        </>
    );
}

export default App;