import logo from './logo.png';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Navbar } from './components/NavbarComponent';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div>
      <img src={logo} height="100" alt="logo"/>
      <Navbar />
      <ItemListContainer greeting={'hola, soy una prop :)'}/>
    </div>
  );
}

export default App;
