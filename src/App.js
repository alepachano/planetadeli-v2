import logo from './logo.png';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Navbar } from './components/NavbarComponent';
// import ItemListContainer from './containers/ItemListContainer';
import React from 'react';
import { ItemDetailContainer } from './containers/ItemDetailContainer';


const ButtonComponent = () => {
  return (
    <button>Hola soy un boton!</button>
  )
};

function App() {
  return (
    <>
        <img src={logo} height="100" alt="logo"/>
        <Navbar boton={ButtonComponent}/>
        <ItemDetailContainer />
        {/* <ItemListContainer /> */}
    </>
  );
}

export default App;
