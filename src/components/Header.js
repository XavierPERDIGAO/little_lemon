import Nav from './Nav'
import Logo from '../images/LogoHeader.svg'
import './Header.css';

function Header() {
    return (
        <header class="header">
            <figure>
                <img src={Logo} alt="main Little Lemon logo" />
            </figure>
            <Nav/>
        </header>
    );
}

export default Header;