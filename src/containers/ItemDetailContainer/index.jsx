import './style.css';
import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { ItemDetailComponent } from "../../components/ItemDetailComponent";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);

  const { id } = useParams();
  const { listadoProductos, setAddToCart, setIsAdded } = useContext(CartContext)

  useEffect(() => {
    if (id) {
      const idProducto = listadoProductos.find(product => product.id === id)
      setProducto(idProducto);
      setAddToCart(false);
      setIsAdded(false);
    }
  }, [id])

  return (
    <>
      <Container >
        <ItemDetailComponent key={producto.id} img={producto.image} sku={producto.SKU} name={producto.title} description={producto.description} price={producto.price} id={producto.id} stock={producto.stock} categoryId={producto.categoryId}/>
      </Container>
    </>
  )
};
