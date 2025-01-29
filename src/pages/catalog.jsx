import React from "react";
import love from "./images/like-icopn.svg";
import { useLocation } from "react-router";
import { product } from "../database/db";
import CardProduct from "../components/CardProduct";
const Catalog = () => {
  const location = useLocation();
  const locationSearch = location.search.slice(1);

  let filter = product.filter((value) => value.category === locationSearch);

  return (
    <div>
      <div className="w-full relative flex_box px-4">
        <div className="sign-container">
          <div className="sign">
            <span className="icon">
              <img src={love} alt="" />
            </span>
            <marquee direction="left">
              <span className="text">menyumizga xush kelibsiz</span>
            </marquee>
          </div>
          <div className="strings">
            <div className="string"></div>
            <div className="string"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-54">
        {filter?.map((item) => (
          <CardProduct key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
