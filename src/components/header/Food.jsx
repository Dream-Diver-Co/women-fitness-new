import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import foods from "../../assets/images/foods.jpg";
const Food = () => {
  const Healthy = [
    {
      title: "Beans",
      link: "/",
    },
    {
      title: "Broccoli",
      link: "/",
    },
    {
      title: "Salmon",
      link: "/",
    },
    {
      title: "Sweet potatoes",
      link: "/",
    },
  ];
  const Dairy = [
    {
      title: "Milk",
      link: "/",
    },
    {
      title: "Cheese",
      link: "/",
    },
    {
      title: "Yogurt",
      link: "/",
    },
    {
      title: "Butter",
      link: "/",
    },
  ];
  const Nutrition = [
    {
      title: "Leafy Greens",
      link: "/",
    },
    {
      title: "Nuts and Seeds",
      link: "/",
    },
    {
      title: "Berries",
      link: "/",
    },
    {
      title: "ASalmon",
      link: "/",
    },
  ];
  const Sweets = [
    {
      title: "Chocolate",
      link: "/",
    },
    {
      title: "Ice Cream",
      link: "/",
    },
    {
      title: "Cake",
      link: "/",
    },
    {
      title: "Cookies",
      link: "/",
    },
  ];
  return (
    <div className="hover_visibility">
      <div className="dress_menu">
        <div className="dress_menu_category d-flex">
          <Item category="Featured" items={Healthy} />
          <Item category="Tops" items={Dairy} />
          <Item category="Bottoms" items={Nutrition} />
          <Item category="Collections" items={Sweets} />
        </div>
        <ul className="dress_menu_product_image">
          <Link to="/">
            <img src={foods} alt="" />
          </Link>
          <Link to="/">
            <img src={foods} alt="" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Food;
