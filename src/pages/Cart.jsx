import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import { FiTrash2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsChatLeftFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";
import { CartContext } from "../context/CartContext";
import NoData from "../UI/NoData";
const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();


  let { cartProduct, deleteCard, deleteAllCart } = useContext(CartContext);

  const totalPrice = cartProduct.reduce((sum, item) => sum + item.price, 0);
  let sum = new Intl.NumberFormat("en-US").format(totalPrice);

  if (cartProduct.length === 0) {
    return <NoData value={"data"} />;
    {
      /* agarda value data bolsa malumot toplmadi chiqadi agrad send bolsa yuborildi chiqadi aks holda error page */
    }
  }
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="text-gray-700 font-bold text-lg mb-8"
      >
        <FaArrowLeft className="inline-block mr-2" /> Savat
      </button>

      {cartProduct.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center gap-4"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-20 h-20 object-cover rounded-md"
          />

          {/* data */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <span className="text-green-600 font-bold">
              {item.price.toLocaleString()} so‘m
            </span>
          </div>

          {/* O‘chirish  */}
          <button
            onClick={() => deleteCard(item)}
            className="text-red-500 hover:text-red-700"
          >
            <FiTrash2 size={20} />
          </button>
        </div>
      ))}

      {/* Pastki panel */}
      <div className="fixed bottom-0 left-0 w-full  ">
        <div className="flex justify-end m-3 mb-6 mr-3">
          <button className="text-2xl bg-white border p-3 rounded-full">
            <BsChatLeftFill />
          </button>
        </div>

        <div className="bg-white  text-black w-full rounded-tr-lg rounded-tl-lg shadow-md p-4">
          <div className="flex justify-between items-center border-b border-black/20 pb-2 mb-2">
            <h1 className="text-lg font-semibold">Ovqat:</h1>
            <p className="font-mono text-lg">{sum} UZS</p>
          </div>

          <div className="flex justify-between items-center border-b border-black/20 pb-2 mb-2">
            <h1 className="text-lg font-semibold">Xizmat:</h1>
            <p className="font-mono text-lg">14,000 UZS</p>
          </div>

          <div className="flex justify-between text-[#008C2C] items-center">
            <h1 className="text-lg font-semibold">Jami:</h1>
            <p className="font-mono text-lg font-bold">234,000 UZS</p>
          </div>

          <div className="flex items-center gap-1.5 mt-7">
            <button
              onClick={() => deleteAllCart([])}
              className="flex_box border p-3 rounded-xl text-lg text-red-500"
            >
              <RiDeleteBin6Line />
            </button>
            <button
              onClick={() => console.log("hello")}
              disabled={cartProduct.length === 0}
              className="w-full disabled:opacity-[0.6] h-[50px] bg-green-700 text-2xl rounded-[20px] text-white "
            >
              Yuborish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
