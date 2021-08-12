import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import error404 from './error404.jpg';
import { Navbar } from './components/NavbarComponent';
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { CartComponent } from './components/CartComponent';
import { Footer } from './components/FooterComponent';

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

            {/* TO DO: hacer componente not found */}
            <Route path={"*"} component={() => <div className="text-center"><img src={error404} className="error404" alt={'not-found'} /></div>} />
          </Switch>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
