import './style.css';
import { createContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase";
import { Container, Spinner } from 'react-bootstrap';

export const CartContext = createContext();

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
    // Para traer la colección de productos
    async function getDataFromFirestore() {
      const BD = getFirestore();
      const collection = BD.collection('productos').orderBy('title', 'asc');
      const response = await collection.get();
      setListadoProductos(response.docs.map(element => ({ id: element.id, ...element.data() })));
    }
    getDataFromFirestore();

    // Validar el local storage
    function localStorageValidation() {
      if (!storageValues) {
      } else {
        setCart(JSON.parse(storageValues));
      }
    }
    localStorageValidation();
  }, []);

  // Calcular el total de items y total precio
  useEffect(() => {
    function calculateTotals() {
      let quantityOfItems = 0;
      let finalPrice = 0;

      cart.forEach(element => {
        finalPrice += element.price;
        quantityOfItems += element.cantidad;
      })

      setTotalAPagar(finalPrice);
      setTotalItems(quantityOfItems);
    }
    calculateTotals();
  }, [cart]);

  // Cambia los estados al seleccionar agregar al carrito
  function onAdd(id, quantity, precio, product) {
    setAddToCart(true);
    setIsAdded(true);
    shoppingCart(id, quantity, precio, product);
    updateStock(id, quantity, 'down');
  };

  // Actualizar STOCK de producto
  function updateStock(id, quantity, operator) {
    let itemRemove;
    if (operator === 'up') {
      itemRemove = cart.find(element => element.id === id);
    }

    const newListadoProductos = listadoProductos.map(element => {
      if (element.id === id) {
        element.stock = operator === 'down' ? element.stock - quantity : element.stock + itemRemove.cantidad;
      }
      return element;
    });
    setListadoProductos(newListadoProductos);
  };

  // Para comprobar si el producto ya existe en el carrito
  function isInCart(id) {
    const element = cart.find(producto => producto.id === id);
    if (!element) {
      return false;
    } else {
      return true;
    }
  };

  // Agregar al carrito 
  function shoppingCart(id, quantity, precio, product) {
    // Si el producto existe en el carrito ...
    if (isInCart(id)) {
      const previousProduct = cart.find(producto => producto.id === id);
      // Calcular cantidad y precio total
      const newQuantity = previousProduct.cantidad + quantity;
      const newPrice = newQuantity * precio;
      // Actualiza la información del producto
      const newProduct = { "id": previousProduct.id, "image": previousProduct.image, "item": previousProduct.item, "sku": previousProduct.sku, "cantidad": newQuantity, "unitPrice": previousProduct.unitPrice, "price": newPrice };
      const previousCart = cart.filter(product => product.id !== id);
      // Se agrega la informacion actualizada del producto
      const newCart = [...previousCart, newProduct];
      setCart(newCart);
      // Si el producto no existe en el carrito ..
    } else {
      setCart([...cart, product]);
    }
    localStorage.setItem('cartStorage', JSON.stringify([...cart, product]))
  };

  // Eliminar producto del carrito
  function removeItemToCart(id) {
    updateStock(id, undefined, 'up');
    const newCart = cart.filter(product => product.id !== id);
    setCart(newCart);
    localStorage.setItem('cartStorage', JSON.stringify(newCart));
  };

  // Eliminar TODOS los productos del carrito
  function clearTheCart() {
    cart.forEach(element => {
      updateStock(element.id, undefined, 'up');
    });
    setCart([]);
    localStorage.clear();
  };

  return (
    <CartContext.Provider value={{ listadoProductos, onAdd, addToCart, isAdded, setAddToCart, setIsAdded, quantity, setQuantity, cart, removeItemToCart, clearTheCart, totalAPagar, totalItems }}>
      {listadoProductos.length > 0 ?
        children
        :
        <Container>
          <Spinner animation="border" variant="info" />
        </Container>
      }
    </CartContext.Provider>
  )
};
