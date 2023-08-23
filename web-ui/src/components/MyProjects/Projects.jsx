import './Projects.css'
import bee from '../../assets/bee.png'
import fin from '../../assets/finflex.jpeg'
import orb from '../../assets/orb.png'
import koala from '../../assets/koala.png'

function Projects() {
    return (
        <div id='projects'>
            <div className='break'>
            <div id='project'>
                <img id="fin" src={fin}/>
                <h3>FINFLEX</h3>
                <p>Developed FinFlex, a dynamic web application, utilizing the PERN stack (PostgreSQL, Express, React, and Node.js), with a team of two other engineers, seamlessly blending powerful backend and user-friendly frontend technologies to create a comprehensive financial platform. </p>
                <a href='https://github.com/teamjar/FINFLEX' target='_blank' rel='noreferrer'><p>Github Repo Link</p></a>
                <a href='https://finflex-nbp4.onrender.com' target='_blank' rel='noreferrer'><p>Website Link</p></a>
            </div>
            </div>
            <div className='break'>
            <div id='project'>
                <img id="orb" src={orb}/>
                <h3>Orb of Power</h3>
                <p>Orb of Power is an IOS game designed using the Programming Language Swift and the Software XCode. 
                    The game is a level based game in where you need to make it to the end of the level by collecting orbs to 
                    move from water to land. </p>
                <a href='https://github.com/stringlady/OrbOfPower' target='_blank' rel='noreferrer'><p>Github Repo Link</p></a>
            </div>
            </div>
            <div className='break'>
            <div id='project'>
                <img id="bee" src={bee}/>
                <h3>Spelling Bee</h3>
                <p>Spelling Bee is a game in which you are given seven letters and you must match as many words as you can 
                    with the seven letters provided. This project was made using DrRacket. </p>
                <a href='https://github.com/stringlady/Spelling-Bee' target='_blank' rel='noreferrer'><p>Github Repo Link</p></a>
            </div>
            </div>
            <div className='break'>
            <div id='project'>
                <img id="koala" src={koala}/>
                <h3>Image Processing</h3>
                <p>Developed and implemented an image processing project utilizing Java and a GUI, focusing on enhancing and manipulating images through various algorithms and filters </p>
                <a href='https://github.com/stringlady/Image-Processing' target='_blank' rel='noreferrer'><p>Github Repo Link</p></a>
            </div>
            </div>
        </div>
    )
}

export default Projects;