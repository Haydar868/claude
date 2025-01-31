import React, { useContext, useState } from "react";
import claude from "../components/Navbar/images/claude.svg";
import claudeText from "./images/cloudtext.svg";
import userAvatar from "./images/userAvatar.svg";
import feed from "./images/fork-knife.svg";
import cart from "./images/cart.svg";
import { useNavigate } from "react-router";
import { CartContext } from "../context/CartContext";
const ClaudeMenu = () => {
  let [widthMenu, setWidthMenu] = useState(false);
  let menuWidth = () => {
    if (widthMenu) setWidthMenu(false);
    else setWidthMenu(true);
  };

  let navigate = useNavigate();

  let {cartProduct} = useContext(CartContext)

  return (
    <div
      className={` ${widthMenu ? "w-[98%] backdrop-blur-xl bg-[#00000088]" : "w-[140px] bg-black"} h-[78px] gap-3  overflow-hidden accardion_trans rounded-[10px] p-1 left-1 bottom-1  sticky z-10 text-white flex_between`}
    >
      <div onClick={() => menuWidth()} className="flex_box gap-1 shrink-0">
        <div className="flex_box ml-1 cursor-pointer w-[65px] rounded-lg h-[65px] bg-[#1c1b1bed]">
          <img className="w-full h-full" src={claude} alt="" />
        </div>

        <img className="w-[53px] h-[15px]" src={claudeText} alt="" />
      </div>

      <div
        className={`${widthMenu ? "opacity-[1]" : "opacity-0 "} transition-all gap-3 mr-3 flex_box`}
      >
        <button className="menu_btn flex_box">
          <img src={userAvatar} alt="icon" />
        </button>

        <button className="menu_btn flex_box">
          <img src={feed} alt="icon" />
        </button>

        <button onClick={() => navigate("/cart")} className="menu_btn relative flex_box">
          {
            cartProduct.length === 0 ? '' : 
          <span className="text-green-500 text-[10px] absolute top-0">{cartProduct.length}</span>
          }
          <img src={cart} alt="icon" />
        </button>
      </div>
    </div>
  );
};

export default ClaudeMenu;
