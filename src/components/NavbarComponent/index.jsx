import './style.css';
import { CartWidget } from '../CartWidgetComponent';


export function Navbar({boton}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">¡Bienvenidos!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Tortas y Postres</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Insumos de repostería</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Conócenos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contáctanos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Carrito <CartWidget /> </a>
                        </li>
                        {boton()}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

