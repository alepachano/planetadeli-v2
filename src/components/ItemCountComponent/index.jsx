import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export function ItemCountComponent({ cantidadMinima, stock }) {
  const { setQuantity } = useContext(CartContext)
  const [contador, setContador] = useState(1);

  function aumentar() {
    if (contador < stock) {
      setContador(contador + 1)
    }
  };

  function disminuir() {
    if (contador > cantidadMinima) {
      setContador(contador - 1);
    };
  };

  const cantidad = contador;
  setQuantity(cantidad);

  return (
    <div>
      <button onClick={() => { disminuir() }}> - </button>
      {contador}
      <button onClick={() => { aumentar() }}> + </button>
    </div>
  )
};
