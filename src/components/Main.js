import ChefB from '../images/RestaurantChefB.png'
import './Main.css'

function Main() {
    return (
        <main>
            <section class="hero-section">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <figure>
                    <img src={ChefB} alt="Chef B"/>
                </figure>
            </section>
            <section>
            Find a table
            </section>
        </main>
    );
}

export default Main;