import { useEffect, useState } from "react";


function useTheme() {


    const [darkMode, setDarkMode] = useState(() => {

        const savedTheme = localStorage.getItem("theme");

        return savedTheme === "dark";

    });



    useEffect(() => {


        if(darkMode){


            document.body.classList.add("dark");


            localStorage.setItem(
                "theme",
                "dark"
            );


        }
        else{


            document.body.classList.remove("dark");


            localStorage.setItem(
                "theme",
                "light"
            );


        }


    },[darkMode]);




    const toggleTheme = () => {


        setDarkMode((previous)=> !previous);


    };



    return {

        darkMode,

        toggleTheme

    };


}


export default useTheme;