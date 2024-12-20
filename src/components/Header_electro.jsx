import './Header_electro.css'

const Header_electro = () => {
    return (
        <header class="container">
        <nav class="navbar__container">
                <h1 class="navbar__logo">Electro<span class="navbar__logo--primary">Station</span></h1>
                
                <ul>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Contactos</a></li>
                </ul>
        </nav>
    </header>
    )
}

export default Header_electro