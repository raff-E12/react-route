import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer id="contact" className="footer container">
      <h2>Contact</h2>
      <p><Link to={"/"}>To HomePage</Link></p>
      <p>Email me at: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
   </footer>
  )
}
