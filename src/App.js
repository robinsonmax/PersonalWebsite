import Background from './Background'
import './css/site.css'
import ScrollBar from './ScrollBar'
import Header from './Header'

export default function App() {

  return (
    <Background>
        <ScrollBar/>

        <Header/>

        <section>
          <h1>About</h1>
          <p>REWRITE THIS BIT!!!</p>
          <p>Hi, I'm Max and I'm a Software Developer with experience of modern web technologies in the information technology industry. Driven by solving complex problems, I'm skilled in ASP.Net, JavaScript, SQL as well as many front-end web technologies.</p>
        </section>
        <section>
          <h1>Skills</h1>
          <ul>
            <li>
              <strong>JavaScript & React</strong>
              <p>I have experience with React, jQuery and vanilla JavaScript for creating rich front-end user experiences, as well working with NodeJS & Express for creating basic Web APIs.</p>
            </li>
            <li>
              <strong>ASP.Net MVC & WebForms (C#)</strong>
              <p>I can competently create web apps & REST APIs using both ASP.Net core and framework.</p>  
            </li>
            <li>
              <strong>SQL</strong>
              <p>TEXT</p>  
            </li>
            <li>
              <strong>Python</strong>
              <p>TEXT</p>  
            </li>
          </ul>
        </section>
        <section>
          <h1>Tracking app for Warrington scouts</h1>
          <p>TEXT</p>
        </section>
        <section>
          <h1>Contact</h1>
          <p>TEXT</p>
        </section>

        <footer>
          <p>© 2020 Max Robinson</p>
        </footer>

    </Background>
  );
}
