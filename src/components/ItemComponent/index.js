import './style.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export function ItemComponent({ img, name, sku, price, id }) {
  return (
    <CardGroup >
      <Card className="card-style" >
        <Card.Img className="img-card" variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>SKU: {sku}</Card.Text>
          <Card.Text className="price">CLP {price}</Card.Text>
        </Card.Body>
        <Card.Footer className="cardFooter">
          <Link to={`/item/${id}`}> Ver producto </Link>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
};
