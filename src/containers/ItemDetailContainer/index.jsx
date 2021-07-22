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
      const idProducto = listadoProductos.find(product => product.id === parseInt(id))
      setProducto(idProducto);
      console.log('hola yo soy el producto con id #', id);
      setAddToCart(false);
      setIsAdded(false);
    }
  }, [id])

  return (
    <>
      <Container >
        <ItemDetailComponent key={producto.id} id={producto.id} img={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} stock={producto.stock} />
      </Container>
    </>
  )
};
