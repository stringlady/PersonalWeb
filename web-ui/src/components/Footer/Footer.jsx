import './Footer.css'
import git from '../../assets/github.png'
import link from '../../assets/linkedin.svg'

function Footer() {
    return (
        <div id="footer">
            <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/busseyanaya/' ><img id="hover" src={link} alt="LinkedIn Logo" /></a>
            <a rel='noreferrer' target='_blank' href='https://github.com/stringlady'><img id="hover" src={git} alt="Github Logo" /></a>
        </div>
    )
}
export default Footer;