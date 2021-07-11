import './style.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCountComponent } from "../../components/ItemCountComponent";
import { Typography } from '@material-ui/core';

export function ItemDetailComponent({ nombre, descripcion, stock, precio, img }) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image src={'https://soyunperro.com/wp-content/uploads/perrocontento.jpg'} rounded className="imgProducto" />
          </Col>
          <Col>
            <Typography>
              <h4>{nombre}</h4>
              <h5>CLP {precio}</h5>
              <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
              <h5> {stock} </h5>
            </Typography>
            <ItemCountComponent />
          </Col>
        </Row>
      </Container>
    </>
  )
};
