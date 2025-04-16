import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <header className="hero container">
    <nav className="navbar">
        <div className="logo">My Blog</div>
        <ul className="menu">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/posts"}>Post</Link></li>
              <li><Link to={"/contact"}>Contacts</Link></li>
          </ul>
      </nav>
      <div className="hero-text">
          <h1>Welcome to My Blog</h1>
          <p>Discover stories, insights, and more!</p>
          <a href="#posts" className="cta-btn">Explore Posts</a>
      </div>
  </header>
  )
}
