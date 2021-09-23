import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="text-primary">DollarPerHour</span> Calculator
        </div>
        <span className="theme-switcher">
          <ThemeSwitcher />
        </span>
      </nav>
    </header>
  );
}
