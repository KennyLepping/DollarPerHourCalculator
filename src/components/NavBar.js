import React from 'react'
import ThemeSwitcher from "./ThemeSwitcher"

export default function NavBar() {
    return (
      <header>
        <nav>
          <span className="title-text">Dollar Per Hour&nbsp;</span>Calculator
          <span className="theme-switcher">
            <ThemeSwitcher />
          </span>
        </nav>
      </header>
    )
}
