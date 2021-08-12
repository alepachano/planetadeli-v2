import './style.css';
import sadCart from '../.././sad-cart.png';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase";
import { CartContext } from "../../context/CartContext";
import { Container, Col, Row, Form, Button, Table } from "react-bootstrap";
import { ArrowLeft } from 'react-bootstrap-icons';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

export function CartComponent() {
  const { cart, removeItemToCart, clearTheCart, totalAPagar } = useContext(CartContext);
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '' });
  const [checkout, setCheckout] = useState(false);
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

  function goToCheckout() {
    setCheckout(true);
  };

  // En caso de que decida 'ir hacia atrás' en la pantalla de llenar formulario de compra
  function refreshPage() {
    window.location.reload();
  };

  if (checkout) {
    return (
      <Container>
        <Form>
          <h3 className="text-center mb-3">Formulario de Compra</h3>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingrese nombre y apellido" onInput={(event) => {
                setForm({ ...form, name: event.target.value, })
              }} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Teléfono (+56)</Form.Label>
              <Form.Control type="phone" placeholder="X XXXX XXXX" onInput={(event) => {
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

          <Button className="buttonGeneric" onClick={refreshPage}><ArrowLeft /> Ir atras </Button>
          <Button className="buttonGeneric" onClick={generarPedido}>Enviar pedido</Button>
        </Form>
      </Container>
    )
  };

  if (trackingNumber) {
    return (
      <Container>
        <div className="text-center">
          <h4>¡Muchas gracias por tu compra!</h4>
          <p>Muy pronto te contactaremos</p>
          <p>Tu codigo de seguimiento es: {orderId}</p>
          <Button className="goToHome"><Link to={'/'} className="goToHome">Ir al home</Link></Button>
        </div>
      </Container>
    )
  };

  if (cart.length === 0) {
    return (
      <Container>
        <div className="carritoVacio">
          <h4>¡No hay productos en tu carrito de compras!</h4>
          <div>
            <img className="sadCart" src={sadCart} alt="sadCart" />
          </div>
          <div className="carritoVacio">
            <Link to={'/'}><ArrowLeft />Volver al inicio</Link>
          </div>
        </div>
      </Container>
    )
  } else {
    return (
      <Container>
        <Row>
          <Col>
            <h3 className="text-center">Carrito de Compras</h3>
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
                  cart.map((product, index) => {
                    return (
                      <tr key={index}>
                        <td><img className="imgCart" src={product.image} alt={product.item} /></td>
                        <td className="itemCart">
                          <p>{product.item}</p>
                          <p>SKU: {product.sku}</p>
                        </td>
                        <td>{product.cantidad}</td>
                        <td>{product.unitPrice}</td>
                        <td>{product.price}</td>
                        <td><DeleteForeverOutlinedIcon onClick={() => { removeItemToCart(product.id) }} /></td>
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
                <h5 className="title-summary">Resumen de la compra</h5>
                <Table>
                  <thead>
                    <tr>
                      <th>Total del pedido</th>
                      <th>${totalAPagar}</th>
                    </tr>
                  </thead>
                </Table>
                <div className="text-center">
                  <Button className="buttonGeneric" onClick={goToCheckout}>Completar la compra</Button>
                </div>
              </div>
              <div className="text-center"><Link to={'/'}><ArrowLeft /> Agregar mas productos</Link></div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
}
