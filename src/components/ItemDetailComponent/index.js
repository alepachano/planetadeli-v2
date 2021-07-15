import './style.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typography } from '@material-ui/core';

export function ItemDetailComponent({ img, nombre, descripcion, precio, stock }) {
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
          </Col>
        </Row>
      </Container>
    </>
  )
};
