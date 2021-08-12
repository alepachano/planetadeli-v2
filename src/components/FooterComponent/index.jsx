import './style.css';
import truck from "./truck.png";
import { Col, Row } from "react-bootstrap";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

export function FooterComponent() {
  return (
    <>
      <Row className="footer">
        <Col>
          <div>
            <h6 className="text-center mt-3 link">PLANETA DELI</h6>
            <ul>
              <li>Nosotros</li>
              <li>Tiendas</li>
              <li>Blog</li>
              <li>Nuestras Marcas</li>
              <li>Trabaja con Nosotros</li>
            </ul>
          </div>
        </Col>

        <Col>
          <div>
            <h6 className="text-center mt-3 link">Servicio al Cliente</h6>
            <ul>
              <li>Seguimiento de mi pedido</li>
              <li>Preguntas frecuentes</li>
            </ul>
          </div>
        </Col>

        <Col>
          <div className="text-center">
            <h6 className="mt-3 link">Contactanos</h6>
            <h6 >¡y siguenos en nuestras redes sociales!</h6>
            <a href='https://wa.link/0ebcou' target="blank"><WhatsAppIcon /></a>
            <a href='https://www.instagram.com/planetadeli' target="blank"><InstagramIcon /></a>
          </div>
        </Col>

        <Col className="text-center">
          <h6 className="mt-3 link">Envios</h6>
          <h6 >Realizamos envios a toda la Región Metropolitana</h6>
          <img src={truck} alt="truck" />
        </Col>

        <div >
          <p className="text-center">COPYRIGHT © 2021. Planeta Deli</p>
        </div>
      </Row>
    </>
  )
};
