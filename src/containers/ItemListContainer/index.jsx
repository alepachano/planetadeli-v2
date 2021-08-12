import './style.css';
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemComponent } from "../../components/ItemComponent";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import { Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import Row from 'react-bootstrap/Row'

export function ItemListContainer() {
  const { listadoProductos } = useContext(CartContext)
  const [listaCategorias, setListaCategorias] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
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
        <Row>
          <h2 className="title text-center">{id}</h2>
          <div className="cards-group">
            {
              listaCategorias.length > 0 ?
                listaCategorias.map((producto) => {
                  return (
                    <>
                      <ItemComponent key={producto.id} img={producto.image} name={producto.title} sku={producto.SKU} price={producto.price} id={producto.id} />
                    </>
                  )
                })
                :
                <Spinner animation="border" variant="info" />
            }
          </div>
        </Row>
      </Container>
    </>
  )
}
