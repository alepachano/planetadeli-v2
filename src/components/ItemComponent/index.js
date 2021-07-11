import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


export function ItemComponent({ nombre, precio, img }) {
  return (
    <Container>
      <Row>
        <Col md="3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={nombre} />
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>
                $ {precio}
              </Card.Text>
              <Button variant="outline-primary"><Link to={'/detalle'}> Ver producto </Link></Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
};
