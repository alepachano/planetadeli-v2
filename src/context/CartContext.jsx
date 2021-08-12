import './style.css';
import { createContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getFirestore } from "../firebase";

// crear el contexto
export const CartContext = createContext();

// componente que provee los datos
export function CartProvider({ children }) {
  const [listadoProductos, setListadoProductos] = useState([]);
  const [addToCart, setAddToCart] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState();
  const [cart, setCart] = useState([]);
  const [totalAPagar, setTotalAPagar] = useState();
  const [totalItems, setTotalItems] = useState();

  let storageValues = localStorage.cartStorage;

  useEffect(() => {
    //Para traer la colección de productos
    async function getDataFromFirestore() {
      const BD = getFirestore();
      //se coloca como parámetro el nombre de la colección
      const collection = BD.collection('productos').orderBy('title', 'asc');
      //traer los datos
      const response = await collection.get();
      setListadoProductos(response.docs.map(element => ({ id: element.id, ...element.data() })));
    }
    getDataFromFirestore();

    // Validar el local storage
    function localStorageValidation() {
      if (!storageValues) {
        console.log('estoy vacio');
      } else {
        setCart(JSON.parse(storageValues))
      }
    }
    localStorageValidation()
  }, [])

  useEffect(() => {
    function calculateTotals() {
      //Calcular cantidad de items en el carrito
      let quantityOfItems = 0;
      //Calcular total a pagar
      let finalPrice = 0;

      cart.forEach(element => {
        finalPrice += element.price;
        quantityOfItems += element.cantidad;
      })

      setTotalAPagar(finalPrice);
      setTotalItems(quantityOfItems);
    }
    calculateTotals()

  }, [cart])

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
      const newProduct = { "id": previousProduct.id, "image": previousProduct.image, "item": previousProduct.item, "sku": previousProduct.sku, "cantidad": newQuantity, "unitPrice": previousProduct.unitPrice, "price": newPrice };
      const previousCart = cart.filter(product => product.id !== id);
      // agrego el nuevo producto
      const newCart = [...previousCart, newProduct];
      setCart(newCart);
      // Si el producto no existe en el carrito ..
    } else {
      setCart([...cart, product]);
    }
    localStorage.setItem('cartStorage', JSON.stringify([...cart, product]))
    console.log('soy cart', cart);
  };

  //Eliminar producto del carrito
  function removeItemToCart(id) {
    const newCart = cart.filter(product => product.id !== id);
    setCart(newCart);
    localStorage.setItem('cartStorage', JSON.stringify(newCart));
  };

  //Eliminar todos los productos del carrito
  function clearTheCart() {
    setCart([]);
    localStorage.clear()
  };

  return (
    <CartContext.Provider value={{ listadoProductos, onAdd, addToCart, isAdded, setAddToCart, setIsAdded, quantity, setQuantity, cart, removeItemToCart, clearTheCart, totalAPagar, totalItems }}>
      {listadoProductos.length > 0 ? children : <Spinner animation="border" variant="info" />}
    </CartContext.Provider>
  )
};
