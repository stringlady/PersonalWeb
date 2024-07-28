import './AboutMe.css';

function AboutMe() {
    return (
        <div id='aboutme'>
            <div className='aboutme2'>
                <p>Hello There, my name is Anaya. I am currently a Sophmore at Northeastern University 
                studying Computer Science at the Khoury School for Computer Sciences. </p>
                <p>My curiosity for technology began when I was 11 years old after enrolling in a 
                    Black Girls Code Hackathon in the summer of 2014. That event sparked my passion for Web development 
                    and Software Engineering. During those introductory years not having access to formal training, 
                    led me to navigate programming on my own. Being self-taught has allowed me to learn how to think 
                    critically to find the most efficient way to solve problem. I am a forward thinker that 
                    aspires to improve our world through technology.</p>
                <p>I am extremely passionate about software development. I strive to gain practical experience and expand my knowledge. I am very willing to learn and look forward to working on real projects that contribute to the development of high-quality software solutions. I am committed to continuously developing my skills and advancing my career.</p>
            </div>
            <div id="skills">
                
                <div className='languages'>
                    <h3>Languages</h3>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>DrRacket</p>
                    <p>Java</p>
                    <p>Swift</p>
                    <p>Python</p>
                    <p>SQL</p>
                    <p>PHP</p>
                    <p>R</p>
                    <p>C</p>
                    <p>APEX</p>
                    <p>SOQL</p>
                </div>
                
                <div className='languages'>
                    <h3>Databases/Tools</h3>
                    <p>PostgreSQL</p>
                    <p>Git</p>
                    <p>Github</p>
                    <p>Jira</p>
                    <p>VS Code</p>
                    <p>Figma</p>
                    <p>XCode</p>
                    <p>MongoDB</p>
                </div>
                <div className='languages'>
                    <h3>Frameworks/Libraries</h3>
                    <p>REACT</p>
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>Bootstrap</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;