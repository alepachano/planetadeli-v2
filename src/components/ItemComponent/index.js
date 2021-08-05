import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import './style.css';

export function ItemComponent({ img, name, sku, price, id }) {
  return (
    <CardGroup>
      <Card className="card-style" style={{ width: '18rem' }}>
        <Card.Img className="img-card" variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>SKU: {sku}</Card.Text>
          <Card.Text><strong>CLP {price}</strong></Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-primary"><Link to={`/item/${id}`}> Ver producto </Link></Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
};
