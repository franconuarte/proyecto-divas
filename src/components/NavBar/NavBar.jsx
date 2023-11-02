import cart from './assets/logo.png';
import CartWidget from '../CardWidget/CartWidget';
import estilos from './NavBar.css';

const NavBar = () => {
    return (
        <nav class="navbar">
            <img class="logo" src={cart} />
            <div class="anclas">
                <a class="ancla" href="">¿Quines Somos?</a>
                <a class="ancla" href="">Nuestro Catalogo</a>
                <a class="ancla" href="">Contactanos</a>
            </div>
            <div class="carro">
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar