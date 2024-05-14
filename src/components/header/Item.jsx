import React from "react";
import { NavLink } from "react-router-dom";

const Item = (props) => {
  return (
    <ul className="links">
      <h6>{props.category}</h6>
      {props.items.map((data, index) => (
        <li key={index}>
          <NavLink className="link" to={data.link}>
            {data.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Item;
