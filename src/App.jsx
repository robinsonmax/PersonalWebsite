import Background from './Background'
import './css/site.css'
import ScrollBar from './ScrollBar'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
//import ImgMax from './img/max.jpg';

export default function App() {

  return (
    <Background>
      <ScrollBar/>

      <Header/>

      <section>
        <h1>About</h1>
        <div className={"text"}>
          <p>
            Hi, I'm Max and I'm a Junior Software Developer with experience of modern web technologies in the information technology industry. Driven by solving complex problems, I'm skilled in ASP.Net, JavaScript, SQL as well as many front-end web technologies.
          </p>
          <br/>
          <p>
            In the last year or so, I have taken a greater interest in front-end development, and creating modern user interfaces.
          </p>
        </div>
        {/*
        <div className={"img"}>
          <img src={ImgMax} className={"img-round"} />
        </div>
        */}
      </section>
      <section>
        <h1>Skills</h1>
        <div className={"text"}>
          <ul>
            <li>
              <strong>JavaScript & React</strong>
              <p>I have experience with React, jQuery and vanilla JavaScript for creating rich front-end user experiences, as well working with NodeJS & Express for creating basic Web APIs.</p>
            </li>
            <li>
              <strong>ASP.Net MVC & WebForms (C#)</strong>
              <p>I can competently create web apps & REST APIs using both ASP.Net Core and Framework.</p>  
            </li>
            <li>
              <strong>SQL</strong>
              <p>I can comfortably write SQL queries & stored procedures, as well as designing databases, having experience with Microsoft SQL Server. Recently, I have been getting to know Firebase's NOSQL database for my smaller projects.</p>  
            </li>
            <li>
              <strong>Design Tools</strong>
              <p>I use Adobe XD & Illustrator to create designs and graphics for my projects. Recently, I have been using them in conjunction with Rive2 to create animated graphics.</p>
            </li>
            <li>
              <strong>Cloud</strong>
              <p>I have a basic understanding of Google cloud & Microsoft azure, having used them both to host various web apps & databases.</p>
            </li>
            <li>
              <strong>Python</strong>
              <p>I use Python for creating simple scripts to automate common tasks.</p>  
            </li>
          </ul>
        </div>
      </section>
      {/*
      <section>
        <h1>Tracking app for Warrington scouts</h1>
        <div className={"text"}>
          <p>TEXT</p>
        </div>
        <div className={"img"}>
          <img />
        </div>
      </section>
      */}
      <section>
        <h1>Contact</h1>
        <div className={"text"}>
          <ul>
            <li>
              <p>
                <a target="_blank" rel="noreferrer" href="mailto:max@maxrobinson.net">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  max@maxrobinson.net
                  </a>
              </p>
            </li>
            <li>
              <p>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/max17">
                  <FontAwesomeIcon icon={faLinkedin} className="icon" />
                  Max17
                </a>
              </p>
            </li>
            <li>
              <p>
                <a target="_blank" rel="noreferrer" href="https://github.com/robinsonmax">
                  <FontAwesomeIcon icon={faGithubSquare} className="icon" />
                  RobinsonMax
                </a>
              </p>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <p>© 2020 Max Robinson</p>
      </footer>

    </Background>
  );
}
