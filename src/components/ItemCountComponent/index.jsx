import { useState } from "react";

let cantidadMinima = 1;
let stock = 7;

export function ItemCountComponent() {
  const [contador, setContador] = useState(1);

  function aumentar() {
    if (contador < stock) {
      setContador(contador + 1)
    }
  };

  function disminuir() {
    if (contador > cantidadMinima) {
      setContador(contador - 1)
    };
  };

  return (
    <div>
      <button onClick={disminuir}> - </button>
      {contador}
      <button onClick={aumentar}> + </button>
    </div>
  )
};
