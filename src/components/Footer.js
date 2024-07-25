import Logo from '../images/LogoFooter.png'
import './Footer.css'

function Footer() {
    return (
        <footer class="footer">
            <figure>
                <img src={Logo} alt="footer Little Lemon logo" />
            </figure>
            <div class="footer-column">
                <h3>Doormat Navigation</h3>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="todo.html">About</a></li>
                        <li><a href="todo.html">Menu</a></li>
                        <li><a href="todo.html">Reservations</a></li>
                        <li><a href="todo.html">Order Online</a></li>
                        <li><a href="todo.html">Login</a></li>
                    </ul>
                </nav>
            </div>
            <div class="footer-column">
                <h3>Contact</h3>
                <ul>
                    <li>Adress</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Social Media Links</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;