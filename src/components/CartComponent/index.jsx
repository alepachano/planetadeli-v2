import './style.css';
import sadCart from '../.././sad-cart.png';
import { useEffect, useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Table from 'react-bootstrap/Table';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { getFirestore } from "../../firebase";
import Col from 'react-bootstrap/Col';
import { ArrowLeft } from 'react-bootstrap-icons';

export function CartComponent() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const { cart, removeItemToCart, clearTheCart, totalAPagar } = useContext(CartContext);

  useEffect(() => {

  }, [])

  function generarPedido() {
    const pedido = { buyer: { ...form }, items: cart, total: totalAPagar }
    console.log('Pedido: ', pedido);

    const BD = getFirestore();
    const collection = BD.collection('pedidos');
    // Para mostrar el id de pedido al comprador
    collection.add(pedido).then(({ id }) => {
      alert(`EL ID DE LA COMPRA ES: ${id}`)
    });
  };

  return (
    <>
      {cart.length === 0 ?
        <Container>
          <div className="carritoVacio">
            <h3>¡No hay productos en tu carrito de compras!</h3>
            <div>
              <img className="sadCart" src={sadCart} />
            </div>
            <div className="carritoVacio">
              <Button variant="info"><Link to={'/'} className="link-style">Volver al inicio</Link></Button>
            </div>
          </div>
        </Container>
        :
        <Container>
          <h2 className="text-center">Carrito de Compras</h2>
          <Row>
            <Col>
              <Table className="table-head text-center" hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody >
                  {
                    cart.map(product => {
                      return (
                        <>
                          <tr>
                            <th><img className="imgCart" src={product.image} /></th>
                            <th className="itemCart">
                              <tr>{product.item}</tr>
                              <tr>SKU: {product.sku}</tr>
                            </th>
                            <th>{product.cantidad}</th>
                            <th>{product.unitPrice}</th>
                            <th>{product.price}</th>
                            <th><DeleteForeverOutlinedIcon onClick={() => { removeItemToCart(product.id) }} /></th>
                          </tr>
                        </>
                      )
                    })
                  }
                </tbody>
              </Table>
              <Button variant="danger" onClick={clearTheCart}>Vaciar carrito</Button>
            </Col>
            <Col xs={3}>
              <div className="cart-summary">
                <div className="summary">
                  <h6 className="title-summary">Resumen de la compra</h6>
                  <Table>
                    <tr>
                      <th>Total del pedido</th>
                      <th>${totalAPagar}</th>
                    </tr>
                  </Table>
                  <div className="text-center">
                    <Button variant="info">Completar la compra</Button>
                  </div>
                </div>
                <div className="text-center"><Link to={'/'}><ArrowLeft /> Agregar mas productos</Link></div>
              </div>
            </Col>
          </Row>

          {/* <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
              <Form.Control type="text" placeholder="Name" onInput={(event) => {
                setForm({ ...form, name: event.target.value, })
              }} />
              <Form.Control type="email" placeholder="Email" onInput={(event) => {
                setForm({ ...form, email: event.target.value })
              }} />
              <Form.Control type="tel" placeholder="Phone" onInput={(event) => {
                setForm({ ...form, phone: event.target.value })
              }} />
            </Form.Group>
            <Button onClick={generarPedido}>Enviar datos</Button> */}

          {/* Para ingresar productos de manera masiva en Firestore
              const Batch = BD.batch();
              const elementos = [{ JSON }];
              for (let i = 0; i < elementos.length; i++) {
              BD.collection('productos').add(elementos[i]).then((response) => {
              console.log(response);
              })
              }; */}
          {/* </Form> */}
        </Container>
      }
    </>
  )
};
