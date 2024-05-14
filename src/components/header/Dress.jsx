import React from "react";
import { Link, NavLink } from "react-router-dom";
import dress from "../../assets/images/4U8A0766.webp";
import "./dress.css";
import Item from "./Item";
const Dress = () => {
  const Featured = [
    {
      title: "New Arrivals",
      link: "/",
    },
    {
      title: "T-shirts",
      link: "/",
    },
    {
      title: "Amplify",
      link: "/",
    },
    {
      title: "Better in Black",
      link: "/",
    },
  ];
  const Tops = [
    {
      title: "Sports Bras",
      link: "/",
    },
    {
      title: "Tank Tops",
      link: "/",
    },
    {
      title: "Shirts & Crops",
      link: "/",
    },
    {
      title: "Long Sleeves",
      link: "/",
    },
  ];
  const Bottoms = [
    {
      title: "Leggings",
      link: "/",
    },
    {
      title: "Joggers",
      link: "/",
    },
    {
      title: "Underwear",
      link: "/",
    },
    {
      title: "All Bottoms",
      link: "/",
    },
  ];
  const Collections = [
    {
      title: "Leggings",
      link: "/",
    },
    {
      title: "Joggers",
      link: "/",
    },
    {
      title: "Underwear",
      link: "/",
    },
    {
      title: "All Bottoms",
      link: "/",
    },
  ];
  return (
    <div className="hover_visibility">
      <div className="dress_menu">
        <div className="dress_menu_category d-flex">
          <Item category="Featured" items={Featured} />
          <Item category="Tops" items={Tops} />
          <Item category="Bottoms" items={Bottoms} />
          <Item category="Collections" items={Collections} />
        </div>
        <ul className="dress_menu_product_image">
          <Link to="/">
            <img src={dress} alt="" />
          </Link>
          <Link to="/">
            <img src={dress} alt="" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Dress;
