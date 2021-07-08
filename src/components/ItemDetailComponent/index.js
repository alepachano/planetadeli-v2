import './style.css';
import { Card } from "react-bootstrap";

export function ItemDetailComponent({ nombre, ventas, precio, img }) {
  return (
    <>
      <Card>
        <Card.Img className="imgProducto" variant="top" src={img} alt={nombre} />
        <Card.Body>
          <Card.Text>
              <div> Producto: {nombre} </div>
              <div> Precio: {precio} CLP </div>
              <div> Cantidad vendida: {ventas} </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
};




