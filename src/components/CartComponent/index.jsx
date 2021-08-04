import { useEffect, useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Table from 'react-bootstrap/Table';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { getFirestore } from "../../firebase";

export function CartComponent() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const { cart, removeItemToCart, clearTheCart, totalAPagar, totalItems } = useContext(CartContext);

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
          <h4>¡No hay productos en tu carrito!</h4>
          <Link to={'/'}>Ir al inicio</Link>
        </Container>
        :
        <Container>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((product, index) => {
                  return (
                    <>
                      <tr>
                        <th>{index + 1}</th>
                        <th>{product.item}</th>
                        <th>{product.cantidad}</th>
                        <th>{product.price}</th>
                        <th><DeleteForeverOutlinedIcon onClick={() => { removeItemToCart(product.id) }} /></th>
                      </tr>
                    </>
                  )
                })
              }
              <th></th>
              <th>Total a pagar</th>
              <th>{totalItems}</th>
              <th>{totalAPagar}</th>
              <th></th>
            </tbody>
          </Table>
          <Button onClick={clearTheCart} variant="outline-primary">Eliminar todo</Button>

          <Form>
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
            <Button onClick={generarPedido}>Enviar datos</Button>

            {/* Para ingresar productos de manera masiva en Firestore
              const Batch = BD.batch();
              const elementos = [{ JSON }];
              for (let i = 0; i < elementos.length; i++) {
              BD.collection('productos').add(elementos[i]).then((response) => {
              console.log(response);
              })
              }; */}
          </Form>
        </Container>
      }
    </>
  )
};
