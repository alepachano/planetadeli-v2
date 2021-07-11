import { useEffect } from "react";
import { useState } from "react";
import { ItemDetailComponent } from "../../components/ItemDetailComponent";

export function ItemDetailContainer() {
  const [detalleProducto, setDetalleProducto] = useState([]);

  useEffect(() => {
    async function obtenerDataMercadoLibre() {
      const response = await fetch("https://api.mercadolibre.com/sites/MLC/search?q=boquillas-wilton");
      const data = await response.json();
      setDetalleProducto(data.results[0]); // guarda solo 1 resultado (el de la posición 0)
    }

    obtenerDataMercadoLibre();
  }, []);

  return (
    <>
      <ItemDetailComponent key={detalleProducto.id} nombre={detalleProducto.title} precio={detalleProducto.price} img={detalleProducto.thumbnail} ventas={detalleProducto.sold_quantity} />
    </>
  )
}
