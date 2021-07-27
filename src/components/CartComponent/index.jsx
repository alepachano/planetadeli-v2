import { useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Table from 'react-bootstrap/Table';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function CartComponent() {

  const { cart, removeItemToCart, clearTheCart } = useContext(CartContext);



  useEffect(() => {

    console.log(cart.length);

  }, [cart.length])

  return (

    <>

      {cart.length === 0 ?
        <Container>
          <h4>¡No hay productos en tu carrito!</h4>
          <Link to={'/'}>Ver productos</Link>
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
                        <th>{index+1}</th>
                        <th>{product.item}</th>
                        <th>{product.cantidad}</th>
                        <th>{product.precio}</th>
                        <th><DeleteForeverOutlinedIcon onClick={() => { removeItemToCart(product.id) }} /></th>
                      </tr>

                    </>
                  )
                })
              }
            </tbody>
          </Table>
          <Button onClick={clearTheCart} variant="outline-primary">Eliminar todo</Button>
        </Container>
      }
    </>
  )
};
