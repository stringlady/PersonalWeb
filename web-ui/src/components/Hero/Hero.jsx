import './Hero.css';
import me from '../../assets/me.png'

function Hero() {
    return (
        <div id="hero">
            <div>
                <h1>Anaya Bussey</h1>
                <h2>Senior | Northeastern University | <br/> Computer Science Major</h2>
            </div>
            <div>
                <img className='me' src={me}/>
            </div>
        </div>
    )
}

export default Hero;