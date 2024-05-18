import React from "react";
import "./collectionCard.css";
import { Link } from "react-router-dom";
const CollectionCard = ({ id, image, title, text, url }) => {
  return (
    <div className="card">
      <div className="content_wrapper">
        <p className="content_title">{title}</p>
        <p className="content_subtitle">{text}</p>
        <Link className="button" to={url}>
          Shop {title}
        </Link>
      </div>
      {/* <img className={styles.image} src={image} alt="" /> */}
      {/* <MediaContainer
        containerClassName={styles.image_container}
        fillClassName={isAlt ? styles.image_fill_alt : styles.image_fill}
        mediaClassName={styles.image}
        image={image}
        alt=""
      /> */}
    </div>
  );
};

export default CollectionCard;
