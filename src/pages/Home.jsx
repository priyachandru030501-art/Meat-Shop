import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <header>
        <Link to="/" className="logo">Ashok Meat Shop</Link>
 
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
 
      <section className="hero">
        <div className="hero-content">
          <h1>Fresh Meat, Cut Daily</h1>

          <p>
            Fresh chicken and mutton from local farms,
            cleaned and cut the way you like.
          </p>

          <Link to="/contact" className="btn">Order Now</Link>
        </div>
      </section>

      <section className="menu">
        <h2>Our Menu</h2>

        <p className="section-text">Fresh cuts available every day. Price per kg.</p>

        <div className="menu-container">
          <div className="card">
            <img src="https://packmymeat.com/wp-content/uploads/2026/08/Whole-local-chicken-meat-without-neck-head-and-liver.png" alt="Chicken curry cut" />
            <h3>Chicken Curry </h3>
            <p>Fresh chicken cut for curry.</p>
            <h4>₹240</h4>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src="https://t4.ftcdn.net/jpg/02/66/03/21/360_F_266032107_lre5ZWBTTVJmMvYWyf3zYdb40QhBYDGA.jpg" alt="Mutton curry cut" />
            <h3>Mutton Curry </h3>
            <p>Soft and fresh mutton pieces.</p>
            <h4>₹820</h4>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src="https://5.imimg.com/data5/WI/ZZ/OL/ANDROID-81993397/product-jpeg-500x500.jpg" alt="Farm eggs" />
            <h3>Fish</h3>
            <p>Fresh fish, price per kg.</p>
            <h4>₹90</h4>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <img src="https://alaal.in/wp-content/uploads/2024/06/mutton-boti-1.jpg" alt="Mutton curry cut" />
            <h3>Boti </h3>
            <p>Soft and fresh mutton Boti pieces.</p>
            <h4>₹820</h4>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <img src="https://cdn.meatigo.com/richTextImages/1730802329793_Raw" alt="Mutton curry cut" />
            <h3>Duck </h3>
            <p>Raw Duck Breast</p>
            <h4>₹820</h4>
            <button>Buy Now</button>
          </div>
          <div className="card">
            <img src="https://media.istockphoto.com/id/538918713/photo/lamb-chops.jpg?s=612x612&w=0&k=20&c=qRiDgM6Pp7mKLcIf_hIy6o4jom6J-wGrtkRMaXw5RaM=" alt="Mutton curry cut" />
            <h3>Lamb </h3>
            <p>Soft and fresh Lamb pieces.</p>
            <h4>₹720</h4>
            <button>Buy Now</button>
          </div>
        </div>
      </section>

      <section className="about">
        <div>
          <h2>About Us</h2>

          <p>
            Fresh Meat Shop is a family-run shop serving the
            neighbourhood for over 20 years. We buy fresh every
            morning and cut to order.
          </p>

          <Link to="/contact" className="btn">Contact Us</Link>
        </div>
      </section>

      <footer>
        <p>© 2026 Fresh Meat Shop. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;