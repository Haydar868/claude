import React, { useContext } from "react";
import { BiSolidComment } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import playVideo from "./images/playVideo.svg";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { CartContext } from "../context/CartContext";
const CardProduct = ({ data }) => {
  let uzs = new Intl.NumberFormat("en-US").format(data.price);
  let name = data.title.toUpperCase();
  let navigate = useNavigate();
  let location = useLocation();

  let { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="w-full flex_box flex-col gap-3 p-3">
        <div className="relative flex_box">
          <h1 className="font-bold text-[25px]">{name}</h1>
          <span className="text-[12px] font-bold absolute top-[-10px] right-[1px]">
            {uzs}
          </span>
        </div>

        <div
          onClick={() =>
            navigate(
              location.pathname === `/` || `/product?`
                ? `/product/${data.id}`
                : ``,
            )
          }
          className="h-[230px] mb-10"
        >
          <img className="h-full w-auto" src={data.img} alt={data.text} />
        </div>
        <div className="flex_between w-full px-6">
          <div className="flex_box gap-6">
            <button className="w-[41px] relative cursor-pointer text-xl h-[41px] border flex_box rounded-full">
              <BiSolidComment />
              <span className="text-green-500 text-[9px] absolute top-0">
                {data.comment.length}
              </span>
            </button>

            <button className="w-[41px] relative cursor-pointer text-xl h-[41px] border flex_box rounded-full">
              <AiOutlineLike />
              <span className="text-green-500 text-[9px] absolute top-0">
                {data.like}
              </span>
            </button>

            <div>
              <img
                className="w-[40px] cursor-pointer h-[40px]"
                src={playVideo}
                alt="play_video"
              />
            </div>
          </div>

          <button className="order_btn " onClick={() => addToCart(data)}>
            BUYRUTMA
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
