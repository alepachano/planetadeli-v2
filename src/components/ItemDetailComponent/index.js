import './style.css';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import { ItemCountComponent } from "../../components/ItemCountComponent";
import { Container, Row, Col, Breadcrumb, Button } from 'react-bootstrap';

export function ItemDetailComponent({ img, name, sku, description, price, id, stock, categoryId }) {
  const { onAdd, addToCart, isAdded, quantity } = useContext(CartContext);

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
            <img src={img} className="imgProducto" alt={name} />
          </Col>

          <Col>
            <div>
              <div>
                <h1>{name}</h1>
              </div>

              <div className="row-description">
                <h6>SKU {sku}</h6>
              </div>

              <div className="row-description">
                <h3>CLP {price}</h3>
                <h6>Quedan {stock} unidades</h6>
              </div>

              <div className="row-description">
                <h6>Caracteristicas del producto:</h6>
                <p>{description}</p>
              </div>

              <div className="row-description flex">
                {addToCart ? "" : <ItemCountComponent cantidadMinima={1} stock={stock} />}
                {isAdded ? <Button className="goToCart"><Link to={'/cart'} className="goToCart">Ir al carrito de compras</Link></Button> : <Button className="buttonAddToCart" onClick={() => { onAdd(id, quantity, price, { "image": img, "item": name, "sku": sku, "cantidad": quantity, "id": id, "unitPrice": price, "price": (price * quantity) }) }} variant="info">Agregar al carrito</Button>}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
};
