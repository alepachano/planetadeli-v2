import { useEffect } from "react";
import { useState } from "react";
import { ItemComponent } from "../../components/ItemComponent";

const listaProductos = [{
  "id": 1,
  "nombre": "Alisador de tortas",
  "descripcion": "Ancho: 10cm alto: 30cm",
  "categoria": "utensilios",
  "precio": 4500,
  "imagen": "https://soyunperro.com/wp-content/uploads/perrocontento.jpg",
  "stock": 60,
  "cantidadCompra": 0
},
{
  "id": 2,
  "nombre": "Base giratoria ajustable",
  "descripcion": "30 cm de diámetro",
  "categoria": "utensilios",
  "precio": 15000,
  "imagen": "https://soyunperro.com/wp-content/uploads/perrocontento.jpg",
  "stock": 45,
  "cantidadCompra": 0
},
{
  "id": 3,
  "nombre": "Batidora Kitchen Aid",
  "descripcion": "Lorem ipsum",
  "categoria": "batidoras",
  "precio": 300000,
  "imagen": "https://soyunperro.com/wp-content/uploads/perrocontento.jpg",
  "stock": 55,
  "cantidadCompra": 0
},
{
  "id": 4,
  "nombre": "Batidora Cusinart",
  "descripcion": "Lorem ipsum",
  "categoria": "batidoras",
  "precio": 11000,
  "imagen": "https://soyunperro.com/wp-content/uploads/perrocontento.jpg",
  "stock": 35,
  "cantidadCompra": 0
},
{
  "id": 5,
  "nombre": "Horno kitchen center",
  "descripcion": "Lorem ipsum",
  "categoria": "hornos",
  "precio": 250000,
  "imagen": "https://soyunperro.com/wp-content/uploads/perrocontento.jpg",
  "stock": 32,
  "cantidadCompra": 0
},
{
  "id": 6,
  "nombre": "Horno Thomas",
  "descripcion": "Lorem ipsum",
  "categoria": "hornos",
  "precio": 350000,
  "imagen": "https://soyunperro.com/wp-content/uploads/perrocontento.jpg",
  "stock": 28,
  "cantidadCompra": 0
}
];

function ItemListContainer() {
  const [listadoProductos, setListadoProductos] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(listaProductos);
      }, 2000);
    });

    promesa.then(data => {
      setListadoProductos(data);
    })

  }, [])

  return (
    <>
      <div>
        {
          listadoProductos.map(producto => {
            return (
              <ItemComponent key={producto.id} nombre={producto.nombre} precio={producto.precio} img={producto.imagen} />
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

export default ItemListContainer;
