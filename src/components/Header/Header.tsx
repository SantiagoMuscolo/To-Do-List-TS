import { useEffect, useState } from "react";
import './style.css';

export const Header = () => {
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme ? JSON.parse(storedTheme) : 'medium';
    const [theme, setTheme] = useState<any>(initialTheme);


    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <header>
            <div className="headerContainer">
                <div className="logo">
                    <span>Taskmate</span>
                </div>
                <div className="themeSelector">
                    <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
                    <span onClick={() => setTheme("medium")} className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
                    <span onClick={() => setTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
                    <span onClick={() => setTheme("gOne")} className={theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
                    <span onClick={() => setTheme("gTwo")} className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
                    <span onClick={() => setTheme("gThree")} className={theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
                </div>
            </div>
        </header>
    )
}
