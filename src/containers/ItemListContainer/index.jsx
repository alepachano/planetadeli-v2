import { useEffect } from "react";
import { useState } from "react";
import { ItemComponent } from "../../components/ItemComponent";
import { ItemCountComponent } from "../../components/ItemCountComponent";

function ItemListContainer() {
    const [listadoProductos, setListadoProductos] = useState([]);

    useEffect(() => {
        async function obtenerDataMercadoLibre(){
            const response = await fetch("https://api.mercadolibre.com/sites/MLC/search?q=batidoras");
            const data = await response.json();
            setListadoProductos(data.results);
        }

        obtenerDataMercadoLibre();
    }, []);

    console.log(listadoProductos);

    return (                                                                                        
        <>
            <div>
                {                
                    listadoProductos.map(producto => {
                        return (
                            <ItemComponent key={producto.id} nombre={producto.title} precio={producto.price} img={producto.thumbnail} />
                        )}
                    )
                }

                <ItemCountComponent />
            </div>
        </>
    )
}

export default ItemListContainer;
