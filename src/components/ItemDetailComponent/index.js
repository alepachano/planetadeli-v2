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
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export function ItemDetailComponent({ img, name, sku, description, price, id, stock, categoryId }) {
  const { onAdd, addToCart, isAdded, quantity } = useContext(CartContext)

  return (
    <>
      <Container>
        <Row>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item className="title"><Link to={`/category/${categoryId}`}>{categoryId}</Link></Breadcrumb.Item>
            <Breadcrumb.Item active>{name}</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row>
          <Col>
            <Image src={img} rounded className="imgProducto" />
          </Col>
          <Col>
            <Typography>
              <h6>SKU {sku}</h6>
              <h4>{name}</h4>
              <h5>CLP {price}</h5>
              <h6>Quedan {stock} unidades</h6>
              <h5>Caracteristicas del producto:
                {description}
              </h5>
            </Typography>

            {addToCart ? "" : <ItemCountComponent cantidadMinima={1} stock={stock} />}

            {isAdded ? <Button onClick={onAdd} variant="outline-primary"><Link to={'/cart'}>Terminar la compra</Link></Button> : <Button onClick={() => { onAdd(id, quantity, price, { "item": name, "cantidad": quantity, "id": id, "price": (price * quantity) }) }} variant="outline-primary">Agregar al carrito</Button>}
          </Col>
        </Row>
      </Container>
    </>
  )
};