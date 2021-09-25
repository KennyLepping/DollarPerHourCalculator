import React, { useState } from "react";
import lightThemeIcon from "../assets/icons8-sun-96.png";
import darkThemeIcon from "../assets/icons8-moon-64.png";
import "../App.css";

export default function ThemeSwitcher() {
  const [iconImage, setIconImage] = useState(lightThemeIcon);
  const [darkTheme, setDarkTheme] = useState(true);
  const body = document.body;

  if (darkTheme) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }

  const switchTheme = () => {
    if (darkTheme) {
      body.classList.remove("dark");
      setIconImage(darkThemeIcon);
      setDarkTheme(false);
    } else {
      body.classList.add("dark");
      setIconImage(lightThemeIcon);
      setDarkTheme(true);
    }
  };

  return (
    <button
      className="theme-switcher"
      style={{ backgroundImage: `url('${iconImage}')` }}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    ></button>
  );
}
