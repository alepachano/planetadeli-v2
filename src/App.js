
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Navbar } from './components/NavbarComponent';
import ItemListContainer from './containers/ItemListContainer';
import React from 'react';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar exact path={'/cart'} />

        <Switch>
          <Route exact path={'/'}>
            <ItemListContainer />
          </Route>

          <Route exact path={'/detalle'}>
            <ItemDetailContainer />
          </Route>
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
