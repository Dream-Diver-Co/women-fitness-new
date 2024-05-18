import React from "react";
import CategoryHeader from "../categoryHeader/CategoryHeader";
import "./topCollection.css";
import CollectionCard from "../collectionCard/CollectionCard";
const TopCollection = () => {
  const collections = [
    {
      id: 1,
      image: "tShirtCollection",
      title: "t-shirts",
      text: "T-shirts & tank tops",
      url: "/collections/t-shirts",
    },
    {
      id: 2,
      image: "hoodiesCollection",
      title: "hoodies",
      text: "Hoodies & sweatshirts",
      url: "/collections/hoodies-sweatshirts",
    },
    {
      id: 3,
      image: "accessoriesCollection",
      title: "accessories",
      text: "Dad hats, bucket hats & more",
      url: "/collections/accessories",
    },
  ];
  return (
    <section>
      <CategoryHeader title="Top Sell" subTitle="Product" link="/" />
      <div className="container">
        <div className="grid_container">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              id={collection.id}
              image={collection.image}
              title={collection.title}
              text={collection.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCollection;
