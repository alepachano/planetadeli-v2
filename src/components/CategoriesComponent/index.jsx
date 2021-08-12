import './style.css';
import { Link } from 'react-router-dom';
import { Col, Row, Image } from 'react-bootstrap'

export function CategoriesComponent({ name, img }) {
  
  return (
    <>
      <Col xs={6} md={4}>
        <Link to={`/category/${name}`}>
          <Image src={img} thumbnail alt={name} className="imgCategories m-5" />
        </Link>
        <Row>
          <h4 className="text-center text-uppercase bold">{name}</h4>
        </Row>
      </Col>
    </>
  )
}
