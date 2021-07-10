import './style.css';
import logo from '../.././logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { CartWidget } from '../CartWidgetComponent';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <>
      <Container>
        <Row className="navbar">
          <Col md="3">
            <Nav>
              <Nav.Item>
                <img src={logo} height="80" alt="logo"/>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md="7">
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link>HOME</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>PRODUCTOS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>CATEGORIAS</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md="2" >
            <Nav className="justify-content-left">
              <Link to={"/cart"}> <CartWidget /> 1</Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  )
};
