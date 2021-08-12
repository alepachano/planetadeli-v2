import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { Navbar } from './components/NavbarComponent';
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { CartComponent } from './components/CartComponent';
import { Footer } from './components/FooterComponent';
import { NotFoundComponent } from './components/NotFoundComponent';

function App() {
  return (
    <>
      <CartProvider >
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route exact path={'/'}>
              <ItemListContainer />
            </Route>

            <Route exact path={'/category/:id'}>
              <ItemListContainer />
            </Route>

            <Route exact path={'/item/:id'}>
              <ItemDetailContainer />
            </Route>

            <Route exact path={'/cart'}>
              <CartComponent />
            </Route>

            <Route path={"*"}>
              <NotFoundComponent />
            </Route>
          </Switch>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
