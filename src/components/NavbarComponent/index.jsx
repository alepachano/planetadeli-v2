import './style.css';
import { CartWidget } from '../CartWidgetComponent';

export function Navbar({boton}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">¡Bienvenidos!</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link active" aria-current="page">Inicio</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">Tortas y Postres</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">Insumos de repostería</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">Conócenos</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">Contáctanos</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">Carrito <CartWidget /> </span>
                        </li>
                        {boton()}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

