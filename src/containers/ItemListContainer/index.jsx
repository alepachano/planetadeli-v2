import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { ItemComponent } from "../../components/ItemComponent";
import listaProductos from "../../bd/listaProductos.json";
import { useParams } from "react-router-dom";

export function ItemListContainer() {
  const [listadoProductos, setListadoProductos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(listaProductos);
      }, 1000);
    });

    if (id) {
      promesa.then(data => {
        const categoria = data.filter(producto => producto.categoriaId === id)
        setListadoProductos(categoria)
        console.log('hola yo soy la categoria:', id);
      })

    } else {
      promesa.then(data => {
        setListadoProductos(data);
        console.log('no hay categoría en especifico, traigo todos los productos');
      })
    }
  }, [id])

  return (
    <>
      <div>
        {
          listadoProductos.map((producto, index) => {
            return (
              <>
                <Container>
                  <ItemComponent key={index} img={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} id={producto.id} />
                </Container>
              </>
            )
          })
        }
      </div>
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
