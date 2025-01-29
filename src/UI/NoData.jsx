import React from "react";
import basket from "./images/basket.svg";
import send from "./images/send.svg";
import error from "./images/error.svg";
import { useNavigate } from "react-router";
const NoData = ({ value }) => {
  let navigate = useNavigate();

  return (
    <div className="flex_box h-screen flex-col p-2">
      <img
        src={value === "data" ? basket : value === "send" ? send : error}
        alt="nod_data"
      />
      <p className="text-xl mt-3 text-center">
        {value === "data"
          ? "Ovqatingizni Topa olmadik"
          : value === "send"
            ? "Xavotir olmang, buyurtmangizni ofitsiantlar olib kelishadi."
            : "Kechirasiz, xatolik yuz berdi, yordam uchun xodimlarga murojaat qiling."}
      </p>

      <h2
        className={`text-3xl text-center font-bold mt-2 ${value === "data" ? "text-black" : value === "send" ? "text-green-600" : "text-red-600"}`}
      >
        {value === "data"
          ? ""
          : value === "send"
            ? "Omadli yuborildi"
            : "Buyurtma xatosi"}
      </h2>

      <button onClick={() => navigate("/")} className="cart_menu_btn">
        MENYU
      </button>
    </div>
  );
};

export default NoData;
