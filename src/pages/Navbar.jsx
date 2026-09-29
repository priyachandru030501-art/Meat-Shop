import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="logo"> Fresh Meat Shop</div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;