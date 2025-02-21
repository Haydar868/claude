import React, { useEffect } from "react";
import { useParams } from "react-router";
import { product } from "../database/db";
import CardProduct from "../components/CardProduct";
import ClaudeMenu from "../components/ClaudeMenu";
import userAvatar from "../components/images/userAvatar.svg";
import { AiOutlineLike } from "react-icons/ai";
const DynamicPage = () => {
  const { id } = useParams();
  const params = Number(id);

  let sort = product.filter((item) => item.id === params);
  let filter = sort[0];
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[id])

  return (
    <div className="min-h-[100vh] pb-2 max-w-[430px] relative mx-auto">
      <div className="mt-32">
        <CardProduct data={filter} />
      </div>

      <div className="bottom-1 fixed max-w-[430px] z-20 w-full">
        <ClaudeMenu />
      </div>

      <div className="w-full h-auto grid grid-cols-1 px-6 mt-16 gap-4">
        {filter.comment.map((item, id) => (
          <div
            key={id}
            className="min-h-[184px] p-9 bg-black text-white comment_rounded"
          >
            <div className="flex items-center gap-2">
              <img src={userAvatar} alt={item.name} />
              {item.name}
            </div>
            <p className="akshar text-sm py-4">{item.text}</p>
            <button className="text-xl font-bold cursor-pointer">
              <AiOutlineLike />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicPage;
