import Background from './Background'
import './css/site.css'
import ScrollBar from './ScrollBar'
import Header from './Header'

export default function App() {

  return (
    <Background>
        <ScrollBar/>

        <Header/>

        <div style={{height: "3000px"}}>
        </div>


        <footer>
          <p>© 2020 Max Robinson</p>
        </footer>

    </Background>
  );
}
