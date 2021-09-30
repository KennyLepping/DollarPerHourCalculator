import React, { useState } from "react";
import lightThemeIcon from "../assets/icons8-sun-96.png";
import darkThemeIcon from "../assets/icons8-moon-64.png";
import anime from "animejs";
import "../App.css";

export default function ThemeSwitcher() {
  const [iconImage, setIconImage] = useState(darkThemeIcon);
  const [darkTheme, setDarkTheme] = useState(false);
  const body = document.body;

  if (darkTheme) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }

  /* The font color was not switching fast enough when adding the dark class
     This function fixes that */
  const switchFontColor = (bodyColor, footerColor) => {
    const colorTL = anime.timeline({
      duration: 200,
    });
    colorTL.add({
      targets: "body",
      color: bodyColor,
    });
    colorTL.add({
      targets: "footer a",
      color: footerColor,
    });
  };

  const switchTheme = () => {
    if (darkTheme) {
      body.classList.remove("dark");
      switchFontColor("rgb(29, 29, 29)", "#2432ff");
      setIconImage(darkThemeIcon);
      setDarkTheme(false);
    } else {
      body.classList.add("dark");
      switchFontColor("rgb(255, 255, 255)", "#2b38ff");
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
