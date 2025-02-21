import { createContext, useState } from "react";

export let CartContext = createContext(null);

export let CartProvider = ({ children }) => {
  let [cartProduct, setCartProduct] = useState([]);

  console.log(cartProduct);

  const addToCart = (newProduct) => {
    setCartProduct(() => [...cartProduct, newProduct]);
  };

  const deleteCard = (getData) => {
    let filter = cartProduct.filter((item) => item.id !== getData.id);
    setCartProduct(() => [...filter]);
  };

  const deleteAllCart = (data) => {
    setCartProduct(data);
  };

  return (
    <CartContext.Provider
      value={{
        cartProduct,
        setCartProduct,
        addToCart,
        deleteCard,
        deleteAllCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
