import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { ItemComponent } from "../../components/ItemComponent";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export function ItemListContainer() {
  const { listadoProductos } = useContext(CartContext)
  const [listaCategorias, setListaCategorias] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const categoria = listadoProductos.filter(producto => producto.categoriaId === id);
      setListaCategorias(categoria);
      console.log('hola yo soy la categoria:', categoria);
    } else {
      setListaCategorias(listadoProductos);
      console.log('no hay categoría en especifico, traigo todos los productos');
    }
  }, [id])

  return (
    <>
      {
        listaCategorias.map((producto, index) => {
          return (
            <>
              <Container>
                <ItemComponent key={index} img={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} id={producto.id} />
              </Container>
            </>
          )
        })
      }
    </>
  )
}






// function ItemListContainer() {
//     const [listadoProductos, setListadoProductos] = useState([]);

//     useEffect(() => {
//         async function obtenerDataMercadoLibre(){
//             const response = await fetch("https://api.mercadolibre.com/sites/MLC/search?q=batidoras");
//             const data = await response.json();
//             setListadoProductos(data.results);
//         }

//         obtenerDataMercadoLibre();
//     }, []);

//     console.log(listadoProductos);

//     return (
// <>
//     <div>
//         {
//             listadoProductos.map(producto => {
//                 return (
//                     <ItemComponent key={producto.id} nombre={producto.title} precio={producto.price} img={producto.thumbnail} />
//                 )}
//             )
//         }

//         <ItemCountComponent />
//     </div>
// </>
//     )
// }
