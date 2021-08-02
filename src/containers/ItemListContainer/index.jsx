import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { ItemComponent } from "../../components/ItemComponent";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";

export function ItemListContainer() {
  const { listadoProductos } = useContext(CartContext)
  const [listaCategorias, setListaCategorias] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // const categoria = listadoProductos.filter(producto => producto.categoryId === id);
      // setListaCategorias(categoria);
      const BD = getFirestore();
      const collection = BD.collection('productos');
      const response = collection.where('categoryId', "==", id).get();
      response.then((result) => {
        setListaCategorias(result.docs.map(element => ({ id: element.id, ...element.data() })));
      });
      response.catch((error) => {
        console.log('error', error)
      });
    } else {
      setListaCategorias(listadoProductos);
    }
  }, [id])

  return (
    <>
      {
        listaCategorias.map((producto) => {
          return (
            <>
              <Container>
                <ItemComponent key={producto.id} img={producto.image} name={producto.title} description={producto.description} price={producto.price} id={producto.id} />
              </Container>
            </>
          )
        })
      }
    </>
  )
}
