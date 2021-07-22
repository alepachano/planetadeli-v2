import { createContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import listaProductos from "../bd/listaProductos.json"

// crear el contexto
export const CartContext = createContext();

// componente que provee los datos
export function CartProvider({ children }) {
  const [listadoProductos, setListadoProductos] = useState([]);
  const [addToCart, setAddToCart] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState();
  const [cart, setCart] = useState([]);

  function onAdd(product) {
    setAddToCart(true);
    setIsAdded(true);
    shoppingCart(product);
  }

  function shoppingCart(product){
    setCart(product);
    console.log('hola soy el producto', product)
    console.log('hola soy el producto en cart', cart);
  }

console.log(cart);

  useEffect(() => {
    function traerData() {
      setTimeout(() => {
        new Promise((resolve, reject) => {
          resolve(listaProductos);
          setListadoProductos(listaProductos);
        });
      }, 2000)
    };

    traerData();
    console.log(listadoProductos);
  }, [])

  return (
    <CartContext.Provider value={{ listadoProductos , onAdd, addToCart, isAdded, setAddToCart, setIsAdded, quantity, setQuantity, cart }}>
      {listadoProductos.length > 0 ? children : <Spinner animation="border" variant="info" />}
    </CartContext.Provider>
  )
};