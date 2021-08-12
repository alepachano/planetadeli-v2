import './style.css';
import logo from '../.././logo.png';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Nav } from 'react-bootstrap';
import { CartWidgetComponent } from '../CartWidgetComponent';
import { CartContext } from '../../context/CartContext';

export function NavbarComponent() {
  const { totalItems } = useContext(CartContext);

  return (
    <>
      <Row className="navbar mb-3">
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
              <Nav.Link> <Link to={'/'} className="link">HOME</Link> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link> <Link to={'/category/batidoras'} className="link">BATIDORAS</Link> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link> <Link to={'/category/hornos'} className="link">HORNOS</Link> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link> <Link to={'/category/utensilios'} className="link">UTENSILIOS</Link ></Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col md="2" >
          <Nav className="justify-content-left">
            <Link to={"/cart"}> <CartWidgetComponent /> {totalItems}</Link>
          </Nav>
        </Col>
      </Row>
    </>
  )
};
