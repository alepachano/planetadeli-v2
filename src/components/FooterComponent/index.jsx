import './style.css';
import { Col, Container, Row } from "react-bootstrap";

export function Footer() {
	return (
		<>
			<Container>
				<Row className="footer">
					<Col>
						<div>
							<h6 className="text-center">PLANETA DELI</h6>
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
							<h6 className="text-center">Servicio al Cliente</h6>
							<ul>
								<li>Seguimiento de mi pedido</li>
								<li>Preguntas frecuentes</li>
							</ul>
						</div>
					</Col>

					<Col>
						<div>
							<h6 className="text-center">Contáctanos</h6>
							<div>
								<h6 className="text-center">¡y síguenos en nuestras redes sociales!</h6>
							</div>
						</div>
					</Col>

					<Col>
						<div>
							<h6 className="text-center">Envíos</h6>
						</div>
						<div >
							<h6 className="text-center">Realizamos envíos a toda la Región Metropolitana</h6>
						</div>
					</Col>
				</Row>

				<Row className="copyright">
					<div >
						<p className="text-center">COPYRIGHT © 2021. Planeta Deli</p>
					</div>
				</Row>
			</Container >

		</>
	)
};
