import React from "react"
import "./Footer.css"
export const Footer = () => {
  return (
    <footer>
      <p>
        Developed by{" "}
        <a
          href="https://abhishekakade.github.io/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Abhishek's GitHub Profile"
          className="tooltip profile-link"
        >
          Abhishek Kakade
        </a>
      </p>
      <p>
        API by{" "}
        <a
          href="https://github.com/covid19india/covid19india"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="covid19india GitHub repository"
          className="tooltip profile-link"
        >
          covid19india
        </a>
      </p>
    </footer>
  )
}
