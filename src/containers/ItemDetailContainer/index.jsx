import { useEffect } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { ItemDetailComponent } from "../../components/ItemDetailComponent";
import { ItemCountComponent } from "../../components/ItemCountComponent";
import listaProductos from "../../bd/listaProductos.json";
import { Link, useParams } from "react-router-dom";

export function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);
  const [addToCart, setAddToCart] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      resolve(listaProductos);
    });

    if (id) {
      promesa.then(data => {
        const idProducto = data.find(producto => producto.id === parseInt(id))
        setProducto(idProducto)
        console.log('hola yo soy el producto con id #', id);
      })
    }
  }, [id])

  function onAdd() {
    setAddToCart(true);
    setIsAdded(true);
  }

  return (
    <>
      <Container >
        <ItemDetailComponent onAdd={onAdd} key={producto.id} img={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} stock={producto.stock} />
        {addToCart ? "" : <ItemCountComponent />}
        {isAdded ? <Button onClick={onAdd} variant="outline-primary"><Link to={"/cart"}>Terminar la compra</Link></Button> : <Button onClick={onAdd} variant="outline-primary">Agregar al carrito</Button>}
      </Container>
    </>
  )
};

