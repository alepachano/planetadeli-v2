import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export function ItemComponent({ img, name, description, price, id }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
          {id}
        </Card.Text>
        <Card.Text>
          $ {price}
        </Card.Text>
        <Button variant="outline-primary"><Link to={`/item/${id}`}> Ver producto </Link></Button>
      </Card.Body>
    </Card>
  )
};
