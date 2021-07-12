import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { ItemDetailComponent } from "../../components/ItemDetailComponent";
import listaProductos from "../../bd/listaProductos.json";
import { useParams } from "react-router-dom";

export function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      resolve(listaProductos);
    });

    if (id) {
      promesa.then(data => {
        const idProducto = data.find(producto => producto.id === parseInt(id))
        setProducto(idProducto)
        console.log('hola yo soy el idProducto', idProducto);
      })

    } else {
      promesa.then(data => {
        setProducto(data);
        console.log('no hay categoría en especifico, traigo todos los productos');
      })
    }
  }, [])

  return (
    <>
      <Container>
        <ItemDetailComponent key={producto.id} img={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} stock={producto.stock} />
      </Container>
    </>
  )
};

