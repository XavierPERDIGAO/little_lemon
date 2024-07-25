import ChefB from '../images/RestaurantChefB.png'
import './CallToAction.css'

import { Link } from "react-router-dom";

function CallToAction() {
    return (
        <section className="hero-section">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/booking">
                    <button type="button" className="button">Reserve a table</button>
                </Link>
            </div>
            <figure>
                <img src={ChefB} alt="Chef B"/>
            </figure>
        </section>
    );
}

export default CallToAction;