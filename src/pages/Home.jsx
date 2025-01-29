import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CarouselPizza from "../components/CarouselPizza";
import Category from "../components/Category";
import CardProduct from "../components/CardProduct";
import { product } from "../database/db";
import ClaudeMenu from "../components/ClaudeMenu";

const Home = () => {
  return (
    <main className="relative">
      <section>
        <div className="w-full  flex_box flex-col gap-6 pt-25 px-2 mb-38">
          <img
            className="w-[150px] h-[150px] rounded-full"
            src="https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg"
            alt=""
          />
          <h1 className="akshar font-extrabold text-[50px]">Pizza Ceneter</h1>
        </div>
      </section>

      <CarouselPizza />
      <section className="flex_box mt-16 mb-16 p-1">
        <Category />
      </section>

      <section className="flex flex-col gap-9 w-full">
        {product.map((item) => (
          <CardProduct key={item.id} data={item} />
        ))}
      </section>

      <div className="bottom-1 fixed max-w-[430px] z-20 w-full">
        <ClaudeMenu />
      </div>
    </main>
  );
};

export default Home;
