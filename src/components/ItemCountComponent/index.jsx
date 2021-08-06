import './style.css';
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
    <div className="countComponent">
      <button className="button-increment-decrement" onClick={() => { disminuir() }}> - </button>
      <div className="counter">{contador}</div>
      <button className="button-increment-decrement" onClick={() => { aumentar() }}> + </button>
    </div>
  )
};
