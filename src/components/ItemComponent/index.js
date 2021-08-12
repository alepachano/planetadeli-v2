import './style.css';
import { Link } from 'react-router-dom';
import { Card, CardGroup } from 'react-bootstrap';

export function ItemComponent({ img, name, sku, price, id }) {
  return (
    <CardGroup>
      <Card className="card-style" >
        <Card.Img className="img-card" variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>SKU: {sku}</Card.Text>
          <Card.Text className="price-card">CLP {price}</Card.Text>
        </Card.Body>
        <Card.Footer className="footer-card">
          <Link to={`/item/${id}`} className="link">Ver Producto</Link>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
};
