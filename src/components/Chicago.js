import './Chicago.css'

import MarioAndAdrianA from '../images/Mario and Adrian A.jpg'
import MarioAndAdrianB from '../images/Mario and Adrian b.jpg'

function Chicago() {
    return (
        <section className="chicago">
            <div>
                <p>Welcome to Little Lemon, a new concept from celebrated chef Mario Blank and Adrian Estevez.</p>
                <p>Inspired by Mediterranean's vibrant food, colors, and culture, Little Lemon is a place of discovery – of bold flavors and new culinary experiences – but also where the genuine warmth of Spanish hospitality will embrace you.</p>
                <p>
                    Our first location opened in early 2020 at Catalog in Chicago's iconic Willis Tower, offering counter service.
                    In January 2023, we opened our second location right in the heart of the city and one of the most iconic places in the world Times Square.
                </p>
            </div>
            <div>
                <figure>
                    <img src={MarioAndAdrianA} alt="About Mario and Adrian First"/>
                    <img id="secondImage" src={MarioAndAdrianB} alt="About Mario and Adrian Second"/>
                </figure>
            </div>
        </section>
    );
}

export default Chicago;