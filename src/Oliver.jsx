import './css/oliver.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RickGif from './img/rick.gif';


const check = () => {
  const outOf = document.getElementById("chance").value
  const result = Math.floor(Math.random() * Math.floor(outOf)) === 0
  console.log(result)
  if(result){
    document.getElementById("rick-image").classList.remove("hidden")
    var audio = new Audio(process.env.PUBLIC_URL + '/Never Gonna Give You Up.mp3');
    audio.loop = true;
    audio.play();
  }
}

export default function Oliver() {

  return (
    <div id="content">
      <div>
        <h1>Oliver's lil program</h1>
        {/*<TextField label="Minutes to play for" type="number" />*/}
        <TextField id="chance" label="1 in how many chance" type="number" defaultValue={600} />
        <br/>
        <Button variant="contained" color="primary" onClick={check}>
          Press me
        </Button>
        <img id="rick-image" src={RickGif} class="hidden" alt="rick"></img>
      </div>
    </div>
  )
}
