import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { CartProvider } from './context/CartContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/NavbarComponent';
import { HomeContainer } from './containers/HomeContainer';
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
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
              <HomeContainer greeting={'¡Conoce nuestras categorías!'} />
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
