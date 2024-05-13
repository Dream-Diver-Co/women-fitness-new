import React from "react";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "../button/Button";
const Nav = () => {
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
            <li>
              <Link className="link" to="/">
                Help Center
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Shipping Info
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Track My Order
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Return & Exchanges
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Carreer
              </Link>
            </li>
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
        <ul className="links">
          <li>
            <NavLink className="link" to="/collections/t-shirts">
              T-shirts
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/collections/hoodies-sweatshirts">
              Hoodies
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/collections/accessories">
              Accessories
            </NavLink>
          </li>
        </ul>
        <ul className="icons_menu">
          <li className="search_icon disabled-link">{/* <CgSearch /> */}</li>
          <li className="cart_icon">{/* <CartIcon /> */}</li>
          <li className="mobile_icon">{/* <RiMenuLine  /> */}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
