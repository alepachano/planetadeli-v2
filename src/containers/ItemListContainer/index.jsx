import './style.css';
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemComponent } from "../../components/ItemComponent";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import { Container } from "react-bootstrap";

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
      <Container>
        <h2 className="title">{id}</h2>
        <div className="cards-group">
          {
            listaCategorias.map((producto) => {
              return (
                <>
                  <ItemComponent key={producto.id} img={producto.image} name={producto.title} sku={producto.SKU} price={producto.price} id={producto.id} />
                </>
              )
            })
          }
        </div>
      </Container>
    </>
  )
}
