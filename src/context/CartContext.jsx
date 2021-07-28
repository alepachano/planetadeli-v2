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
  const [total, setTotal] = useState();
  const [totalItems, setTotalItems] = useState();

  useEffect(() => {
    //Calcular total a pagar
    let precioFinal = 0;
    let precioTotal = cart.map(element => element.price);
    //Calcular cantidad de items en el carrito
    let cantidadItems = 0;
    let totalItems = cart.map(element => element.cantidad);

    for (let i = 0; i < precioTotal.length; i++) {
      precioFinal += precioTotal[i];
      cantidadItems += totalItems[i];
    }

    setTotal(precioFinal);
    setTotalItems(cantidadItems);
  }, [cart]);

  function onAdd(id, quantity, precio, product) {
    setAddToCart(true);
    setIsAdded(true);
    shoppingCart(id, quantity, precio, product);
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

  // Agregar al carrito 
  function shoppingCart(id, quantity, precio, product) {
    // Si el producto existe en el carrito ...
    if (isInCart(id)) {
      const previousProduct = cart.find(producto => producto.id === id);
      // calcular cantidad total
      const newQuantity = previousProduct.cantidad + quantity;
      // calcular precio total del producto
      const newPrice = newQuantity * precio;
      // actualizar info producto
      const newProduct = { "id": previousProduct.id, "item": previousProduct.item, "cantidad": newQuantity, "price": newPrice };
      const previousCart = cart.filter(product => product.id !== id);
      // agrego el nuevo producto
      const newCart = [...previousCart, newProduct];
      setCart(newCart);
      // Si el producto no existe en el carrito ..
    } else {
      setCart([...cart, product]);
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

  //TO DO
  //Calcular total productos para mostrar en navbar

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
    <CartContext.Provider value={{ listadoProductos, onAdd, addToCart, isAdded, setAddToCart, setIsAdded, quantity, setQuantity, cart, removeItemToCart, clearTheCart, total, totalItems }}>
      {listadoProductos.length > 0 ? children : <Spinner animation="border" variant="info" />}
    </CartContext.Provider>
  )
};
