import React, { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../components/Products";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const items = products;

  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const params = useParams();
  const prodDetail = products.data.filter((x) => x.slug === params.slug);

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id && x.qty < product.quantity
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const quantityUpdate = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id && x.qty === product.quantity
            ? { ...exist, qty: product.quantity - exist.qty }
            : x
        )
      );
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <DataContext.Provider
      value={{
        cartBtn,
        setCartBtn,
        onAdd,
        onRemove,
        cartItems,
        items,
        prodDetail,
        quantityUpdate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
