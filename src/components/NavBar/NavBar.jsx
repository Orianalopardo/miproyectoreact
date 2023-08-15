import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"

const NavBar = () => {

    return (
        <div className="navbar-container">
            <div className="container-logo">
                <Link to="/">
                <img 
                className="logo-navbar" 
                src="https://res.cloudinary.com/dofqoorbp/image/upload/v1669497981/logo_c7nlxd.png" 
                alt="" 
                />
                </Link>
            </div>
            <ul className="navbar">
                <Link className="navbar-item" to="/">Todos los productos</Link>
                <Link className="navbar-item" to="/Category/Cerveza">Cerveza</Link>
                <Link className="navbar-item" to="/Category/Vodka">Vodka</Link>
                <Link className="navbar-item" to="/Category/Aperitivo">Aperitivos</Link>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar;