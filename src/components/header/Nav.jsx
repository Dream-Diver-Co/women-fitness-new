import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "../button/Button";
import { CgSearch } from "react-icons/cg";
import { RiMenuLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import Dress from "./Dress";
const Nav = () => {
  const InfoList = [
    {
      link: "/",
      title: "Help Center",
    },
    {
      link: "/",
      title: "Contact Us",
    },
    {
      link: "/",
      title: "Shipping Info",
    },
    {
      link: "/",
      title: "Track My Order",
    },
    {
      link: "/",
      title: "Return & Exchanges",
    },
    {
      link: "/",
      title: "About Us",
    },
    {
      link: "/",
      title: "Carreer",
    },
  ];
  return (
    <nav className="nav">
      <div className="container_top">
        <div className="left-item">
          <p>Free Domestic Shipping over $150 and 30 Day Returns</p>
        </div>
        <div className="right-item">
          <Button to="/" className="link info_link" type="button">
            Info
          </Button>
          <ul className="info_list">
            {InfoList.map((data, index) => (
              <li key={index}>
                <Link className="link" to={data.link}>
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
          <Button to="/account/login" className="link login_link">
            Login
          </Button>
        </div>
      </div>
      <div className="container_bottom">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo Nav" />
        </Link>
        <div className="menu">
          <Link className="link dress" to="/">
            Dress
          </Link>
          <Link className="link" to="/">
            Foods
          </Link>
        </div>
        <ul className="icons_menu">
          <li className="search_icon disabled-link">
            <CgSearch />
          </li>
          <li className="cart_icon">
            <FaShoppingCart />
          </li>
          <li className="mobile_icon">
            <RiMenuLine />
          </li>
        </ul>
      </div>
      <Dress />
    </nav>
  );
};

export default Nav;
