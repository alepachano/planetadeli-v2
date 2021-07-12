import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export function ItemComponent({ img, nombre, descripcion, precio, id }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt={nombre} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Card.Text>
          $ {precio}
        </Card.Text>
        <Button variant="outline-primary"><Link to={`/item/${id}`}> Ver producto </Link></Button>
      </Card.Body>
    </Card>
  )
};
