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

  function onAdd(id, quantity, product) {
    setAddToCart(true);
    setIsAdded(true);
    shoppingCart(id, quantity, product);
  }

  //Comprobando si el producto existe en el carrito
  function isInCart(id) {
    const element = cart.find(producto => producto.id === id);
    if (!element) {
      return false;
    } else {
      return true;
    }
  }

  //Agregar al carrito 
  function shoppingCart(id, quantity, product) {
    if (isInCart(id)) {
      const previousProduct = cart.find(producto => producto.id === id);
      console.log('validando datos', previousProduct);
      const newQuantity = previousProduct.cantidad + quantity;
      const newProduct = { "id": previousProduct.id, "item": previousProduct.item, "cantidad": newQuantity };
      const previousCart = cart.filter(product => product.id !== id);
      // Agrego el nuevo producto
      const newCart = [...previousCart, newProduct];
      console.log('soy new cart', newCart);
      setCart(newCart);
    } else {
      setCart(...cart, [product]);
      console.log('soy cart', cart);
    }
  };

  //Eliminar producto del carrito
  function removeItemToCart(id) {
    const newCart = cart.filter(product => product.id !== id);
    setCart(newCart);
    console.log('Soy el carro actualizado', cart)
  };

  //Eliminar todos los productos del carrito
  function clearTheCart() {
    setCart([]);
    console.log('Soy el carro actualizado', cart)
  };

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
  }, [])

  return (
    <CartContext.Provider value={{ listadoProductos, onAdd, addToCart, isAdded, setAddToCart, setIsAdded, quantity, setQuantity, cart, removeItemToCart, clearTheCart }}>
      {listadoProductos.length > 0 ? children : <Spinner animation="border" variant="info" />}
    </CartContext.Provider>
  )
};

