import './Home.css'
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Navbar from '../NavBar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../MyProjects/Projects';
import Experience from '../Experience/Experience';

function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <div id="label">
                <h3>About Me</h3>
            </div>
            
            <AboutMe/>
            <div id="label1">
                <h3>My Projects</h3>
            </div>
            
            <Projects/>
            <div id="label2">
                <h3>Experience</h3>
            </div>
            <Experience/>
            <Footer/>
        </div>
    )
}
export default Home;