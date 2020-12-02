import Background from './Background'
import './css/site.css'
import ScrollBar from './ScrollBar'

export default function App() {

  return (
    <Background>
        <ScrollBar/>

        <header style={{height:"100vh"}}>
            <h1>Max Robinson</h1>
            <h2>Software Developer</h2>
        </header>
        <header>
            <h1>Max Robinson</h1>
            <h2>Software Developer</h2>
        </header>
        <header>
            <h1>Max Robinson</h1>
            <h2>Software Developer</h2>
        </header>
        <header>
            <h1>Max Robinson</h1>
            <h2>Software Developer</h2>
        </header>
        <header>
            <h1>Max Robinson</h1>
            <h2>Software Developer</h2>
        </header>


        <div style={{height: "3000px"}}>
        </div>


        <footer>
          <p>© 2020 Max Robinson</p>
        </footer>

    </Background>
  );
}
