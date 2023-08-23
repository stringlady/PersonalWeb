import './Hero.css';

function Hero() {
    return (
        <div id="hero">
            <div>
                <h1>Anaya Bussey</h1>
                <h2>Junior | Northeastern University | <br/> Computer Science Major</h2>
            </div>
            <div>
                <img className='me' src="me.png"/>
            </div>
        </div>
    )
}

export default Hero;