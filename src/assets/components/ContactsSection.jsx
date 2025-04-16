import React from 'react'

export default function ContactsSection() {
  return (
    <>
     <section className="contact-section container">
        <h2>Contact Me</h2>
        <p>If you have any questions or comments, feel free to send me a message!</p>
        <form className="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    </section>
    </>
  )
}
