import './Navbar.css';

function Navbar() {
    return (
        <div id="color">
            <div className="nav">
                <a href='#aboutme' className='navinfo'><p>About me</p></a>
                <a href='#projects' className='navinfo'><p>My Projects</p></a>
                <a className='navinfo'><p>Resume</p></a>
                <a href='#ex' className='navinfo'><p>Experience</p></a>
            </div>
        </div>
    )
}

export default Navbar;