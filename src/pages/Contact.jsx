import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [item, setItem] = useState("Chicken");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, phone, item, message });
    alert("Order submitted! We will call you soon.");
    setName("");
    setPhone("");
    setItem("Chicken");
    setMessage("");
  }

  return (
    <>
      <header>
        <Link to="/" className="logo">Fresh Meat Shop</Link>
 
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
        </button>
 
        <nav className={open ? "open" : ""}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </header>

      <section className="contact">
        <div className="contact-info">
          <h2>Let's talk about your order</h2>
          <p>Place your order and we will call you to confirm.</p>

          <h4>Email</h4>
          <p>freshmeats@gmail.com</p>

          <h4>Phone</h4>
          <p>+91 00000 00000</p>

          <h4>Location</h4>
          <p>Bengaluru, India</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label>Select Item</label>
          <select value={item} onChange={(e) => setItem(e.target.value)}>
            <option>Chicken</option>
            <option>Mutton</option>
            <option>Fish</option>
            <option>Duck</option>
            <option>Boti</option>
            <option>Lamp</option>
          </select>

          <label>Message</label>
          <textarea
            rows="4"
            placeholder="Quantity and delivery address"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit">Submit Order</button>
        </form>
      </section>

      <footer>
        <p>© 2026 Ashok Meat Shop. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Contact;