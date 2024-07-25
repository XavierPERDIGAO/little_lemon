import Logo from '../images/LogoFooter.png'
import './Footer.css'

import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <figure>
                <img src={Logo} alt="footer Little Lemon logo" />
            </figure>
            <div className="footer-column">
                <h3>Doormat Navigation</h3>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><Link to="/order">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-column">
                <h3>Contact</h3>
                <ul>
                    <li>Adress</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="footer-column">
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