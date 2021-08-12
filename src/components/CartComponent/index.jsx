import './style.css';
import sadCart from '../.././sad-cart.png';
import { useContext, useState } from "react";
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
import { Spinner } from "react-bootstrap";

export function CartComponent() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '' });
  const { cart, removeItemToCart, clearTheCart, totalAPagar } = useContext(CartContext);
  const [checkout, setCheckout] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState(false);
  const [orderId, setOrderId] = useState();

  async function generarPedido() {
    const pedido = { buyer: { ...form }, items: cart, total: totalAPagar }
    console.log('Pedido: ', pedido);
    const BD = getFirestore();
    const collection = BD.collection('pedidos');
    const { id } = await collection.add(pedido);
    setOrderId(id);
    setTrackingNumber(true);
    setCheckout(false);
    clearTheCart();
  };

  function refreshPage() {
    window.location.reload();
  }

  function goToCheckout() {
    setCheckout(true)
  }

  if (checkout) {
    return (
      <Container>
        <Form>
          <h4 className="text-center mb-3">Formulario de Compra</h4>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" onInput={(event) => {
                setForm({ ...form, name: event.target.value, })
              }} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="phone" placeholder="+56 X XXXX XXXX" onInput={(event) => {
                setForm({ ...form, phone: event.target.value })
              }} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Ingrese e-mail" onInput={(event) => {
              setForm({ ...form, email: event.target.value })
            }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Direccion de envío</Form.Label>
            <Form.Control type="text" placeholder="Ingrese direccion completa" onInput={(event) => {
              setForm({ ...form, address: event.target.value })
            }} />
          </Form.Group>
          <Button variant="primary" onClick={refreshPage}><ArrowLeft /> Ir atrás </Button>
          <Button variant="primary" onClick={generarPedido}>Enviar pedido</Button>
        </Form>
      </Container>
    )
  };

  if (trackingNumber) {
    return (
      <Container>
        <div className="text-center">
          <p>¡Muchas gracias por tu compra!</p>
          <p>Ya estamos procesando tu pedido.</p>
          <p>Tu código de seguimiento es: {orderId}</p>
          <Button><Link to={'/'}>Ir al home</Link></Button>
        </div>
      </Container>
    )
  };

  if (cart.length === 0) {
    return (
      <Container>
        <div className="carritoVacio">
          <h3>¡No hay productos en tu carrito de compras!</h3>
          <div>
            <img className="sadCart" src={sadCart} alt="sadCart" />
          </div>
          <div className="carritoVacio">
            <Button variant="info"><Link to={'/'} className="link-style">Volver al inicio</Link></Button>
          </div>
        </div>
      </Container>
    )
  } else {
    return (
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">Carrito de Compras</h2>
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
                      <tr>
                        <th><img className="imgCart" src={product.image} alt={product.item} /></th>
                        <th className="itemCart">
                          <tr>{product.item}</tr>
                          <tr>SKU: {product.sku}</tr>
                        </th>
                        <th>{product.cantidad}</th>
                        <th>{product.unitPrice}</th>
                        <th>{product.price}</th>
                        <th><DeleteForeverOutlinedIcon onClick={() => { removeItemToCart(product.id) }} /></th>
                      </tr>
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
                  <Button variant="info" onClick={goToCheckout}>Completar la compra</Button>
                </div>
              </div>
              <div className="text-center"><Link to={'/'}><ArrowLeft /> Agregar mas productos</Link></div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  };
}
