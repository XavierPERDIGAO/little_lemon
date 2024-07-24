import Nav from './Nav'
import Logo from '../images/LogoHeader.svg'
import './Header.css';

function Header() {
    return (
        <header class="header">
            <img src={Logo} alt="main Little Lemon logo" />
            <Nav/>
        </header>
    );
}

export default Header;