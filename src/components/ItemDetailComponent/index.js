import './style.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Button } from "react-bootstrap";
import { ItemCountComponent } from "../../components/ItemCountComponent";
import { Link } from "react-router-dom";

export function ItemDetailComponent({ img, nombre, descripcion, precio, stock, id }) {
  const { onAdd, addToCart, isAdded, quantity, cart } = useContext(CartContext)

  console.log('soy cart', cart)

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image src={img} rounded className="imgProducto" />
          </Col>
          <Col>
            <Typography>
              <h4>{nombre}</h4>
              <h5>CLP {precio}</h5>
              <h5>{descripcion}</h5>
              <h5>Stock: {stock} </h5>
            </Typography>

            {addToCart ? "" : <ItemCountComponent cantidadMinima={1} stock={stock} />}

            {isAdded ? <Button onClick={onAdd} variant="outline-primary"><Link to={"/cart"}>Terminar la compra</Link></Button> : <Button onClick={() => { onAdd(id, quantity, precio, { "item": nombre, "cantidad": quantity, "id": id, "price": (precio*quantity) }) }} variant="outline-primary">Agregar al carrito</Button>}
          </Col>
        </Row>
      </Container>
    </>
  )
};