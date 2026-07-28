import "./App.css";

import Header from "./components/Header/Header";
import Home from "./pages/Home";

import useTheme from "./hooks/useTheme";

function App() {

    const { theme, toggleTheme } = useTheme();

    return (

        <>

            <Header
                theme={theme}
                toggleTheme={toggleTheme}
            />

            <Home />

        </>

    );

}

export default App;