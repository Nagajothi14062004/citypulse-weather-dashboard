import { useEffect, useState } from "react";

function useTheme() {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {

        document.body.className = theme;

        localStorage.setItem("theme", theme);

    }, [theme]);

    const toggleTheme = () => {

        setTheme((prevTheme) =>
            prevTheme === "light" ? "dark" : "light"
        );

    };

    return { theme, toggleTheme };

}

export default useTheme;