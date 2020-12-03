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
        <p>Hi, I'm Max and I'm a Junior Software Developer with experience of modern web technologies in the information technology industry. Driven by solving complex problems, I'm skilled in ASP.Net, JavaScript, SQL as well as many front-end web technologies.</p>
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
            <p>I can competently create web apps & REST APIs using both ASP.Net Core and Framework.</p>  
          </li>
          <li>
            <strong>SQL</strong>
            <p>I can comfortably write SQL queires & stored procedures, as well as designing databases, having experience with Microsoft SQL Server. Recently, I have been getting to know Firebase's NOSQL database for my smaller projects.</p>  
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
      </section>
      <section>
        <h1>Technical Interests</h1>
        <p>In the last year or so, I have taken a greater interest in front-end development, and creating modern user interfaces.</p>
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
