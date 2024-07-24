import './Nav.css';

function Nav() {
    return (
        <nav>
            <ul class="navbar">
                <li><a href="index.html"><span class="tab"/>Home<span class="tab"/></a></li>
                <li><a href="todo.html"><span class="tab"/>About<span class="tab"/></a></li>
                <li><a href="todo.html"><span class="tab"/>Menu<span class="tab"/></a></li>
                <li><a href="todo.html"><span class="tab"/>Reservations<span class="tab"/></a></li>
                <li><a href="todo.html"><span class="tab"/>Order Online<span class="tab"/></a></li>
                <li><a href="todo.html"><span class="tab"/>Login<span class="tab"/></a></li>
            </ul>
        </nav>
    );
}

export default Nav;