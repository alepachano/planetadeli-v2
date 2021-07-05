import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function ItemComponent( {nombre, precio, img} ) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} alt={nombre}/>
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
                $ {precio}
            </Card.Text>
            <Button variant="primary">Ver producto</Button>
        </Card.Body>
    </Card>
    )
};
