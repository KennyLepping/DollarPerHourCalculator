import React from 'react'
import DarkMode from "./DarkMode"

export default function NavBar() {
    return (
      <header>
        <nav>
          <span className="title-text">Dollar Per Hour&nbsp;</span>Calculator
          <span className="theme-switcher">
            <DarkMode />
          </span>
        </nav>
      </header>
    )
}
