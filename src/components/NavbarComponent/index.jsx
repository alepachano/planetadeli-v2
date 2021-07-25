import './style.css';
import logo from '../.././logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { CartWidget } from '../CartWidgetComponent';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export function Navbar() {

  const { cart } = useContext(CartContext)

  return (
    <>
      <Container>
        <Row className="navbar">
          <Col md="3">
            <Nav>
              <Nav.Item>
                <Link to={'/'}><img src={logo} height="80" alt="logo" /></Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col md="7">
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link>
                  <Link to={'/'}>HOME</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Link>
                <Link to={'/category/batidoras'}>BATIDORAS</Link>
              </Nav.Link>
              <Nav.Item>
                <Nav.Link>
                  <Link to={'/category/utensilios'}>UTENSILIOS</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to={'/category/hornos'}>HORNOS</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col md="2" >
            <Nav className="justify-content-left">
              <Link to={"/cart"}> <CartWidget /> {cart.length}</Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  )
};
