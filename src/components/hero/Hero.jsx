import React from "react";
import { Link } from "react-router-dom";
import LogoHero from "../../assets/images/logo.png";
import video from "../../assets/video/videohero.mp4";
import "./hero.css";
const Hero = () => {
  return (
    <section>
      <div className={"container main-container mx-aut"}>
        <Link to="/" className="media_container video_container">
          <video src={video} autoPlay loop muted className="video video_fill" />
        </Link>
        <div className="content">
          <div className="logo_wrapper">
            <img src={LogoHero} alt="Hero Logo" className="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
