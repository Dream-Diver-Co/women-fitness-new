import React from "react";
import { Link } from "react-router-dom";
import LogoHero from "../../assets/images/logo.png";
import video from "../../assets/video/videohero.mp4";
import "./hero.css";
const Hero = () => {
  return (
    <section>
      <div className="container main-container mx-auto">
        <Link to="/" className="media_container video_container">
          <video src={video} autoPlay loop muted className="video video_fill" />
        </Link>
        <div className="content">
          <div className="hero_title">
            <span>new</span>
            <h3>Sports Bras Tank </h3>
            <p>
              {" "}
              Tops Shirts and New Arrivals COLLECTIONS Tops Shirts and New
              Arrivals COLLECTIONSTops Shirts and New Arrivals COLLECTIONS
            </p>
          </div>

          <div className="logo_wrapper">
            {/* <img src={LogoHero} alt="Hero Logo" className="logo" /> */}
            <Link className="btn" to="/">
              Shop Dress
            </Link>
            <Link className="btn" to="/">
              Shop Foods
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
