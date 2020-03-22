import React, { useState, useEffect } from "react"
import "./Header.css"

const Header = () => {
  const windowGlobal = typeof window !== "undefined" && window
  let [position, setPosition] = useState(windowGlobal.pageYOffset)
  let [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      let temp = windowGlobal.pageYOffset

      setVisible(position > temp)
      setPosition(temp)
    }
    windowGlobal.addEventListener("scroll", handleScroll)
    return () => {
      windowGlobal.removeEventListener("scroll", handleScroll)
    }
  })

  const handleSidebar = () => {
    const navToggle = document.getElementById("nav-toggle")
    const sidebarNav = document.getElementById("nav-list")
    navToggle.classList.toggle("animate-toggle")
    sidebarNav.classList.toggle("active")
  }

  return (
    <header className={!visible ? "hide-header-navbar" : "show-header-navbar"}>
      <nav id="navbar">
        <button
          id="nav-toggle"
          aria-label="Navigation Menu Button"
          onClick={handleSidebar}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
        <ul id="nav-list">
          <li>
            <a href="/" id="brand">
              COVID-19 Live Stats
            </a>
          </li>
          <li>
            <a
              href="#world"
              className="navlinks"
              aria-label=""
              onClick={handleSidebar}
            >
              World
            </a>
          </li>

          <li>
            <a
              href="#resources"
              className="navlinks"
              aria-label=""
              onClick={handleSidebar}
            >
              Resources
            </a>
          </li>
          <li>
            <a
              href="#about"
              aria-label=""
              className="navlinks"
              onClick={handleSidebar}
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
