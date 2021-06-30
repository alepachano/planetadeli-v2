import { useState } from "react";

let cantidadMinima = 1;
let stock = 7;

function ItemCountComponent() {
    const [contador, setContador] = useState(1);

    return(
        <div>
            <button onClick={disminuir}> - </button>
            {contador}
            <button onClick={aumentar}> + </button>
        </div>
    )

    function aumentar() {
        if (contador < stock) {
            console.log("Hola, estas sumando");
            return(
                setContador(contador+1)
            );
        }
    };
    
    function disminuir() {
        if (contador > cantidadMinima) {
            console.log("Hola, estas restando");
            return(
                setContador(contador-1)
            )
        };
    };
};

export default ItemCountComponent;
