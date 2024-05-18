import React from "react";
import { Link } from "react-router-dom";
import "./categoryHeader.css";
const CategoryHeader = ({ title, subTitle, link }) => {
  return (
    <div class="d-flex category-header">
      <div class="category-header-left">
        <p>
          {title} {subTitle}
        </p>
      </div>
      <Link className="btn category-link" to={link}>
        Shop All
      </Link>
    </div>
  );
};

export default CategoryHeader;
