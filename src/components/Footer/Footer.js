import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <div className="iconContainer">
        <a href="https://github.com/UlrichHP/react-dictionary" title="GitHub" target="__blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer
